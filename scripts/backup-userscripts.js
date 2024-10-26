const fs = require("fs/promises");
const path = require("path");
const axios = require("axios");

const MARKDOWN_PATH = path.join("docs", "userscripts", "index.md");
const BACKUP_DIR = path.join("docs", "userscripts", "userscript-backup");

// Helper function to download a file
async function downloadFile(url, filepath) {
  try {
    const response = await axios({
      method: "get",
      url: url,
      responseType: "arraybuffer",
      maxRedirects: 5,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    await fs.writeFile(filepath, response.data);
    return true;
  } catch (error) {
    console.error(`Error downloading ${url}:`, error.message);
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Headers:", error.response.headers);
    }
    throw error;
  }
}

// Helper function to extract filename from URL
function getFilenameFromUrl(url) {
  const filename = url.split("/").pop();
  return decodeURIComponent(filename);
}

// Helper function to encode filename for URL use while preserving file extension
function encodeFilename(filename) {
  const lastDotIndex = filename.lastIndexOf(".");
  if (lastDotIndex === -1) return encodeURIComponent(filename);

  const name = filename.substring(0, lastDotIndex);
  const ext = filename.substring(lastDotIndex);

  return encodeURIComponent(name) + ext;
}

async function backupUserscripts() {
  try {
    // Ensure backup directory exists
    await fs.mkdir(BACKUP_DIR, { recursive: true });

    // Read markdown file
    let content = await fs.readFile(MARKDOWN_PATH, "utf-8");

    // Find all download links using regex
    const downloadPattern = /\*\*Download:\*\* \[(.*?)\]\((.*?)\)/g;
    const matches = Array.from(content.matchAll(downloadPattern));

    let successCount = 0;
    let failCount = 0;

    // Process each download link
    for (const match of matches) {
      const [fullMatch, title, url] = match;
      const filename = getFilenameFromUrl(url);
      const backupPath = path.join(BACKUP_DIR, filename);
      const encodedFilename = encodeFilename(filename);

      console.log(`Downloading: ${filename}`);

      try {
        // Download the file
        await downloadFile(url, backupPath);

        // Find the position of the Download line and handle the backup line
        const lines = content.split("\n");
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes(fullMatch)) {
            // Remove existing backup line and its surrounding newlines if it exists
            let nextLineIndex = i + 1;
            while (
              nextLineIndex < lines.length &&
              (lines[nextLineIndex] === "" ||
                lines[nextLineIndex].startsWith("Backup Download:") ||
                lines[nextLineIndex].startsWith("**Backup Download:**"))
            ) {
              lines.splice(nextLineIndex, 1);
            }

            // Insert two newlines after the Download line, then the backup line, then two more newlines
            lines.splice(
              i + 1,
              0,
              "",
              "",
              `Backup Download: [${filename}](./userscript-backup/${encodedFilename})`,
              "",
              ""
            );
            break;
          }
        }

        content = lines.join("\n");
        successCount++;
        console.log(`✓ Successfully downloaded: ${filename}`);
      } catch (err) {
        console.error(`✗ Failed to download ${filename}:`, err.message);
        failCount++;
      }
    }

    // Clean up any excessive newlines (more than 2)
    content = content.replace(/\n{3,}/g, "\n\n");

    // Ensure proper spacing around horizontal rules
    content = content.replace(/\n([-*][-*][-*]+)\n/g, "\n\n$1\n\n");

    // Write modified content back to file
    await fs.writeFile(MARKDOWN_PATH, content, "utf-8");

    console.log("\nBackup process completed!");
    console.log(`Successfully downloaded: ${successCount} files`);
    console.log(`Failed downloads: ${failCount} files`);
  } catch (err) {
    console.error("Backup process failed:", err);
    process.exit(1);
  }
}

// Run the backup process
backupUserscripts();
