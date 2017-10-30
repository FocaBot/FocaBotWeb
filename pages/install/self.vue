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

#### Limitations of this version

The NPM package has some limitations:

 - Modules requiring external API keys are unavailable.
 - Sharding is also unavailable (at least for now), therefore you can only add the bot to a maximum of 2000 servers.

If you want to avoid those limitations, consider [installing from source](/install/source).

#### Getting Support

If you find any difficulties while installing or running the bot, have questions,
feedback, or just want to have a casual talk with me, feel free to come to the official support server.

<v-btn href="https://discord.gg/V5drVUS">Official Support Server</v-btn>

Before asking any questions though, i'd appreciate if you read the FAQs first:
<v-btn to="/faq">FAQ</v-btn>

</template>
<script>
export default {
  layout: 'docs'
}
</script>