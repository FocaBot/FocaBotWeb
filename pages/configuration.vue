<template lang="md">
## Configuration

FocaBot can be customized on a per-guild basis, even if you're not the bot owner.

To change most parameters, you must use the `f'config` command. For example, running

```
f'config locale fr_FR
```

Changes the bot's language to french for the current guild.

Only guild owners and those with the Admin/Bot Commander roles have access to the `config`
command.

### List of configurable parameters

 - **restrict** {yes/no} (default: `no`)

<div>
  When set to `yes`, only those with Bot Commander roles are allowed to use the bot.

  `f'config restrict yes`
</div>

 - **prefix** {text} (default: `f'`)

<div>
  Defines a custom command prefix for the guild.

  `f'config prefix '`
</div>

 - **autoDel** {yes/no} (default: `yes`)

<div>
  When set to `yes`, the bot deletes some messages automatically, in order to
  keep the channels cleaner. This might flood the audit log, though.

  `f'config autoDel no`
</div>

 - **commandChannel** {#channel} (default: `*`)

<div>
  If this is set, commands are only allowed in the specified text channel. 
  Bot Commanders bypass this.
  
  Setting it to `*` makes it unrestricted.

  `f'config commandChannel #bots`
</div>

 - **voiceChannel** {channel name} (default: `*`)

<div>
  If this is set, the bot may only join the specified voice channel.
  Bot Commanders bypass this.
  
  Setting it to `*` makes it unrestricted.

  `f'config voiceChannel Music`
</div>

 - **allowNSFW** {yes/no} (default: `no`)

<div>
  When set to `yes`, NSFW commands are allowed *outside* NSFW channels.
  Regardless of this parameter, NSFW commands will still be allowed inside NSFW channels.

  `f'config allowNSFW yes`
</div>

 - **locale** {language code} (default: `en_US`)

<div>
  Changes the bot's language. Please note that translations are a community effort and
  some are only partially done. If you want to help translating FocaBot to your language,
  check out the <nuxt-link to="/contribute">contribute</nuxt-link> page.

  `f'config locale es_ES`
</div>

 - **greet** {text} (default: `off`)

<div>
  Displays a greeting message whenever someone joins the server. Set it to `off` to disable.
  You can use the following variables:

   - {mention} - Mentions the user.
   - {name} - Prints the username
   - {server} - Prints the guild name

  `f'config greet Welcome to the server, {mention}!`
</div>

 - **farewell** {text} (default: `off`)

<div>
  Displays a farewell message whenever someone leaves the server. Set it to `off` to disable.
  The same variables from the `greet` parameter are available.

  `f'config farewell {name} left the server.`
</div>

 - **voteSkip** {yes/no} (default: `yes`)

<div>
  When enabled, non-DJ users are allowed to vote to skip queue items.

  If 40% of the users in the voice channel vote to skip a song, it is skipped immediately.

  `f'config voteSkip no`
</div>

 - **maxSongLength** {number} (default: `1800`)

<div>
  Maximum queue item length for non-DJ users, in seconds.
  Must be at least 60 seconds and not exceed 21600 seconds (6 hours)

  `f'config maxSongLength 3600`
</div>

 - **maxItems** {number} (default: `0`)

<div>
  Maximum number of items a non-DJ user is allowed to have in the queue at a time.
  Set it to 0 to disable this limit.

  `f'config maxItems 2`
</div>

 - **asyncPlaylists** {yes/no} (default: `no`)

<div>
  By default, when a playlist is requested, the entire playlist gets preloaded before
  adding the items to the queue. This can take a very long time for large playlists.

  When this parameter is set to `yes`, playlist items are added to the queue as they're
  loaded.
  
  The downside of this is that since the items are added asynchronously, they
  might not be added in the same order they appear in the playlist.

  `f'config asyncPlaylists yes`
</div>

 - **inversePlaylist** {yes/no} (default: `no`)

<div>
  If enabled, the playback order will be reversed
  (when a song ends, the most recently added song is played instead of the first one)

  `f'config inversePlaylist yes`
</div>

 - **allowWaifus** {yes/no} (default: `no`)

<div>
  When set to `no`, the f'setWaifu and f'waifu commands can't be used.

  `f'config allowWaifus no`
</div>

 - **raffleMention** {yes/no} (default: `no`)

<div>
  Enables or disables @everyone mentions in raffle events.

  `f'config raffleMention yes`
</div>

## Disabling modules

Most modules can be disabled on a per-guild basis as well, by using the `f'disable` command.

For example, if you want to disable the danbooru (anime image search) in your guild, you have
to run this command:

```
f'disable danbooru
```

Naturally, the module can be enabled again by running

```
f'enable danbooru
```

Some modules, like the `inlineCommands` module, are disabled by default and must be
manually enabled.

## Overriding permissions

You can override command permissions by using the `f'perm` command.

For example, if you want to restrict the `f'play` command to DJs only:

```
f'perm play dj
```

The following permission levels are available:

 - `*` - Everyone is allowed to use the command.
 - `dj` - Only those with the `DJ` role (or higher) are allowed.
 - `admin` - Only those with the `Bot Commander` role are allowed.

For security reasons, some commands can't be overriden.

</template>
<script>
export default {
  layout: 'docs'
}
</script>
<style lang="stylus" scoped>
ul + div {
  margin-top: 1em
  margin-left: 2em
  > ul li {
    list-style: square 
  }
  code {
    margin-top: 1em
  }
}
</style>