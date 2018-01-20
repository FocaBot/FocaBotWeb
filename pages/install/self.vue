<template lang="md">
## Installing FocaBot


Hosting your own FocaBot is no different to hosting a game server, you just need to install and
configure some stuff, keep the server running and you're basically done. FocaBot has an
[npm package](https://www.npmjs.com/package/focabot) that simplifies installation on most systems,
so we're going to use that.

#### System Requirements

 - Linux / Windows 7+ / macOS
 - At least 512mb of RAM
 - [Node.js 8.x](https://nodejs.org/en/download/current/) or newer
   - On Linux, it's recommended to use [nvm](https://github.com/creationix/nvm) to install Node.
 - On Linux and macOS, python 2.7 is required (some distros don't include it by default)
 - At least 250MB of free disk space

> **NOTE FOR VPS USERS**:
> The most recent ffmpeg builds are incompatible with OpenVZ kernels.
> If you install FocaBot inside an OpenVZ host, you'll find yourself unable to play YouTube livestreams.
>
> Since most VPS providers (especially cheap ones) use OpenVZ, take special care of choosing one that *doesn't* use it.
>
> I personally recommend [Vultr](https://www.vultr.com/?ref=7094752) and [DigitalOcean](https://m.do.co/c/87a81b97a078).

#### Downloading FocaBot

After installing Node.js, the `npm` command becomes available. To install FocaBot, open a Terminal (cmd on Windows) and run this command:
```shell
npm install -g focabot
```
>NOTES:
> - On Windows, you might need to log out and log in again to be able to use the npm command upon installing Node
> - You might see some warning messages during the installation, it's safe to ignore them.

#### Starting FocaBot

After installing, you can run FocaBot at any time by running this command from your terminal/cmd:

```shell
focabot start
```

The first time you run FocaBot, it will run the initial setup wizard first. Just follow the steps on
the screen.

Upon startup, it'll print an invite link so you can add it to your Discord servers.

>NOTES:
> - After the initial setup, you can change individual parameters by running `focabot config`
> - You can also run the initial setup wizard again by running `focabot reconfigure`
> - FocaBot will keep running as long as you keep the terminal/cmd window open.
> - If you want to run FocaBot in the background, please check [How do i make FocaBot run in the background/at startup?](/faq#how-do-i-make-focabot-run-in-the-background-at-startup)

#### Getting Support

If you find any difficulties while installing or running the bot, have questions,
feedback, or just want to have a casual talk with me <s>(we love memes)</s>, feel free to join the
[official support server](https://discord.gg/V5drVUS).

Before asking any questions though, i'd appreciate if you read the
<nuxt-link to="/faq">FAQs</nuxt-link> first.
</template>
<script>
export default {
  layout: 'docs'
}
</script>