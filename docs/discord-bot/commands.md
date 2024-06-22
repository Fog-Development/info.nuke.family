---
sidebar_label: Commands
sidebar_position: 1
---

# Commands

The Foggy Bot continues to grow/expand and this is the current list of commands that are available to use.

:::info
The vast majority of these commands are only available to the [Nuke Family](https://nuke.family) members with a [linked Nuke Family](#linking-your-nuke-family-account) account. Some commands are only available to the Nuke Family staff members and will be noted as such.
:::

## Linking Your Nuke Family Account

In order to use the majority of the commands, you will need to link your Nuke Family account to your Discord account. The command to accomplish and manage linking is accessed via `/link`.

- `/link set <nuke_family_token>` - This previously was the only thing you could do with this command. Now it is a subcommand.
- `/link opt-in` - The above commands require you to opt into sharing your API key to be used in our API key pool. Currently this pool is only used for the above two commands. We need a minimum of 4 keys in the pool or the bot won't allow those commands to run. This is to avoid excessive usage on any one key.
- `/link check` - You can check whether you're linked to the [Nuke Family](https://nuke.family) website on Discord. And whether you are currently opted in or out for the optionally api usage. As a side note, you are by default opted-out. We greatly appreciate any help in this regard.
- `/link generate` - Gives you a direct link to go generate a token which can be pasted into `/link set`

<details>
<summary>Why Link Your Nuke Family Account?</summary>

Linking your account allows us to verify you are a Nuke Family member. It also allows the bot to access information from the Nuke Family site as-if you were logged in.

</details>

<details>
<summary>Why Opt-In to Sharing Your API Key?</summary>

Opting in to sharing your API key allows us to use your key in our API key pool. This pool is currently used for the [Faction Commands](#faction-commands). We need a minimum of 4 keys in the pool or the bot won't allow those commands to run. This is to avoid excessive usage on any one key. In the future it may get used to aid in other tools but I always intend to make sure we aren't using the key more than 25 times per minute. Ideally even less than this. If the key pool is small I will hold off on new features to ensure nobodies key is getting hammered.

For example, one future feature I plan to add is providing more information on reviving requests. This includes checking the players current status (in hospital or not?), whether they have revives on/off, and whether they have other things like early discharge available. This will be a great tool for revivers to know who to revive and who to avoid. This will require the API key pool to be used as the player data cannot be more than 30-60 seconds old. Currently with revive requests I can cache data like their player name and faction information for an extended period and avoid using the API key pool. But for this new feature I cannot do that as the information is more dynamic and "live" in nature. There will also be future tools to monitor chains and look for RW targets. Such as notifying when a player comes out of the hospital and can be attacked. All these things require substantially more API calls than my key alone can handle before being rate limited.

</details>

## Faction Commands

A set of commands that currently allow you to see who in a faction has their revives on, and who is currently in the hospital. These commands are only available to members who have

:::tip
You must be opted in to the API key pool to use these commands. See [Linking Your Nuke Family Account](#linking-your-nuke-family-account) for more information.
:::

- `/faction revives <faction_id>` - See who in a faction has their revives on.
- `/faction revivable <faction_id> <isPrivate?> <isLive?> <live_monitor_time>` - Same as above command, but only shows people both revivable AND currently in the hospital. Aka who can a reviver farm revives on. It also can live update an embed, but this must be done via public messages, not private ones.
  - `faction_id` - The faction ID you want to check.
  - `isPrivate` - Optional. If you want the embed to be private or not. Default is `false`. Must be `true` if you want to use the live update feature.
  - `isLive` - Optional. If you want the embed to be live updating or not. Default is `false`.
  - `live_monitor_time` - Optional. You can specifiy how long the live updating will occur. Max is 3 hours, default is 30 minutes. You can specifiy the time in minutes or hours. Example: `30m` or `1h`. You can also provide a combination of both. Example: `1h30m`. If you don't provide a time, it will default to 30 minutes.

:::caution
This section is still a work in progress. There are other commands available, but they are not yet documented. More information will be added soon. If you do `/` in Discord you can see a list of all available commands if you click on Foggy Bot on the left of the panel (the cow).
:::
