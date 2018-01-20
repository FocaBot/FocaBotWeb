<template lang="md">
## Frequently Asked Questions

 - [What are the DJ and Bot Commander roles?](#permission-levels)
 - [What are inline commands / How do i enable them?](#inline-commands)
 - [What sites does FocaBot support?](#supported-sites)
 - [How do i make FocaBot run in the background / at startup](#run-in-background)
 - [Text search doesn't work, but links do / Links from X site don't work anymore.](#text-search-doesnt-work)
 - [The bot doesn't respond to my commands on some guilds](#bot-doesnt-respond)
 - [The bot is stuck in the voice channel and doesn't play anything](#stuck-in-voice-channel)

<h4 id="permission-levels">What are the DJ and Bot Commander roles?</h4>

FocaBot has 4 different permission levels, `User`, `DJ`, `Bot Commander`, and `Bot Owner`.

All of them, excluding `User` and `Bot Owner` are plain old Discord roles.

That means if you want to give someone DJ permissions, all you have to do is create a
discord role called `DJ` (case-sensitive), and give it to that person.

If you're hosting the bot yourself, you can change the role names to whatever you want.

Here are the differences between permission levels:

**User**

 - The lowest permission level. Everyone has this level by default.
 - Song requests limited to 30 minutes long by default (can be changed with `f'config maxSongLength`)
 - Have limited control over the queue (they can remove, skip, and modify items as long as they're requested by themselves)

**DJ**

 - People with the `DJ` role.
 - Song requests limited to 12 hours in length
 - Full control over music commands (instant skip, shuffle, loop, remove, swap, etc)
 - Access to restricted filters (volume, loop, etc)
 - Able to add playlists and livestreams

**Bot Commander**

 - Guild owners and people with the `Bot Commander` role.
 - Song requests limited to 24 hours in length
 - Able to change bot settings for the guild (see <nuxt-link to="/configuration">configuration</nuxt-link>)

**Bot Owner**

 - The owner of the bot
   - For the <nuxt-link to="/install/self">npm package</nuxt-link>, it's the account that created the bot user.
   - For <nuxt-link to="/install/source">source installations</nuxt-link>, it must be specified in the `.env` file.
 - Bypasses all limits
 - Access to administrative commands (restart the bot, run code, change the username, etc)

<h4 id="inline-commands">What are inline commands / How do i enable them?</h4>

Inline commands allow you use commands inside a message, like this:

![Inline Commands](~/assets/image/inlineCommands.png)

To enable them, just run `f'enable inlineCommands`

<h4 id="supported-sites">What sites does FocaBot support?</h4>

Essentialy, FocaBot supports [most sites supported by youtube-dl](http://rg3.github.io/youtube-dl/supportedsites.html),
but here's a list of sites that were oficially tested and should be expected
to work most of the time:

 - YouTube Videos
 - YouTube Playlists
 - YouTube Streams
 - SoundCloud Tracks
 - SoundCloud Artists
 - SoundCloud Playlists
 - Bandcamp Tracks
 - Bandcamp Albums
 - Beatport
 - Facebook Videos
 - Twitter Videos
 - Twitch Streams
 - Discord Attachments (send the file with `f'play` as message)
 - Direct links to media files
 - Most internet radios (with direct link)

Of course, you are welcome to try other sites. If you find another major site supported
by FocaBot, you can contact me and i'll add it to the list. 

<h4 id="run-in-background">How do i make FocaBot run in the background / at startup</h4>

FocaBot only runs as long as you leave the terminal / cmd window open, but this
can be a disadvantage if you're running it on your own computer or a server, where it's
desirable to keep it running in the background.

There are different ways to do it, but i personally recommend [PM2](http://pm2.keymetrics.io/).
It's what i use in my production servers and so far i've had no issues at all.

To install PM2, use this command:

```
npm install -g pm2
```

If you installed the <nuxt-link to="/install/self">npm package</nuxt-link>, run this command
to start FocaBot in the background:

```
pm2 start focabot
```

If you installed FocaBot <nuxt-link to="/install/ssource">from source</nuxt-link>,
first `cd` into FocaBot's directory and run this:

```
pm2 start daemon/pm2.yml
```

If you're on Linux or on a VPS, you can go even further and make the bot run at startup with:

```
pm2 save && pm2 startup
```

Then follow the instructions.

<h4 id="text-search-doesnt-work">Text search doesn't work, but links do / Links from X site don't work anymore.</h4>

Sometimes, [youtube-dl](https://github.com/rg3/youtube-dl) breaks, so it's pretty
common to see some sites stop working.

Most of the time, those sites are fixed the same day they break, and just require
an updated version of youtube-dl.

I don't have enough free time to constantly check if everything is ok,
so if i forget to update youtube-dl, just send me a DM and i'll update it as soon
as possible.

If you're hosting the bot yourself, just run `f'update norestart` to update youtube-dl

<h4 id="bot-doesnt-respond">The bot doesn't respond to my commands on some guilds</h4>

First, make sure you're using the correct command prefix. Most self-hosted versions have
a different command prefix than the default.

Second, make sure you have permission to use the bot. Guild owners can restrict the
bot to a single channel or even disable the bot entirely for normal users.

Third, make sure you have permission to run the command you're trying to use. The bot
fails silently if you don't have permission to use a command. Guild owners also have
the option to restrict specific commands.

<h4 id="stuck-in-voice-channel">The bot is stuck in the voice channel and doesn't play anything</h4>

First, make sure the current song is not paused with `f'np`.
If it's paused, ask a DJ to use the `f'resume`` command.
Vote Skipping also works on paused songs. 

 - If the current song appears as `playing`, but you don't hear anything:
   - Try disconnecting and reconnecting from the Voice Chat. Discord has a bug that makes bots go silent if they disconnect on other guilds you share with them.
   - If you don't hear anything after reconnecting, try running `f'seek 0`.
   - If that doesn't work, use `f'skip`. 
 - If `f'np` produces no output, or the above steps didn't work.
   - The queue is likely corrupt. Use f'clear as a last resort.
   - If that doesn't solve the problem, contact me immediately (@TheBITLINK#3141).

</template>
<script>
export default {
  layout: 'docs'
}
</script>
<style scoped>
h4 {
  margin-top: 2em;
}
</style>
