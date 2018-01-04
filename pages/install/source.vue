<template lang="md">
## Installing FocaBot from source


For most people, the [npm package](/install/self) should be enough, but if you want to make modifications
to the bot, enable sharding, or use additional modules, you must host FocaBot from source.

This guide assumes you have basic CLI knowledge.

#### System Requirements

 - Linux / Windows 7+ / macOS
 - At least 512mb of RAM
 - [Node.js 8.x](https://nodejs.org/en/download/current/) or newer
   - On Linux, it's recommended to use [nvm](https://github.com/creationix/nvm) to install Node.
 - On Linux and macOS, python 2.7 is required (some distros don't include it by default)
 - At least 250MB of free disk space

#### Downloading FocaBot

 - Clone the [GitHub repository](https://github.com/FocaBot/FocaBot) (you can also download the .zip from GitHub)

```shell
git clone https://github.com/FocaBot/FocaBot && cd FocaBot
```

 - Install the dependencies

```
npm install
```

#### Setting up environment variables

 - Create a `.env` file using `.env.example` as a template.

```
cp .env.example .env
```

 - Fill out the required variables:
   - `BOT_TOKEN`: The bot user token. You can get one [here](https://discordapp.com/developers/applications/me)
   - `BOT_PREFIX`: The global command prefix. You can override it per-guild with the `f'config prefix` command.
   - `BOT_OWNER`: User IDs of the "owner" accounts. They have global full access to the bot.
   - `BOT_MODULES`: Modules to load. The default should be enough for most people.
   - `BOT_ADMINS`: User IDs of the "admin" account. They have global access to most administrative commands (Bot Commander).
   - `BOT_ADMIN_ROLES`: Users with these roles will have administrative access on their respective guilds.
   - `BOT_DJ_ROLES`: Users with these roles will have full control over the music commands.

 - The following fields are **optional**:
   - `BOT_LOCALE`: Default language used by the bot. Check the `locales` directory to see available translations.
   - `HELP_MESSAGE`: Displays an additional string when you run the help command.
   - `GOOGLE_KEY` and `GOOGLE_CX`: Used for image search in the f'img command. To get them, follow these steps:
     - Go to the [Google CSE dashboard](http://www.google.com/cse/manage/all)
     - Create a new search engine. Put whatever you want in the site URL.
     - Go to the control panel of the newly created CSE.
     - Enable image search.
     - Under "Sites to search", select "Search the entire web but emphasize included sites".
     - Under Details, click "Search engine ID". This is the `GOOGLE_CX` variable.
     - Go to the [Google Developer console](https://console.developers.google.com/).
     - Create a new project, then click "Add APIs and services".
     - Search for the "Custom Search API" and enable it.
     - Go to "credentials" to get the API key you'll use in `GOOGLE_KEY`.
   - `IMGUR_KEY`: Imgur API key used for the f'imgur image search.
     - [Register a new OAuth app](https://api.imgur.com/oauth2/addclient).
     - Select "Anonymous usage without user authorization".
     - Use `https://www.focabot.xyz/` as the callback URL
     - Copy the client id and paste it into `IMGUR_KEY`. The client secret isn't used by the bot.
   - `DANBOORU_LOGIN` and `DANBOORU_API_KEY`: Used for the f'danbooru image search. Not required unless you want to bypass the 2 tags search limit with a gold account.
     - `DANBOORU_LOGIN` is just the username.
     - You can get your API key in your account settings.
   - `TUMBLR_CONSUMER_KEY`: Used for the f'tumblr image search.
     - [Register a new OAuth app](https://www.tumblr.com/oauth/register)
     - Use `https://www.focabot.xyz/` as the website and callback URL.
     - Copy the OAuth consumer key and paste it into `TUMBLR_CONSUMER_KEY`. The secret key isn't used.
   - `OSU_KEY`: Used for the f'osu command.
     - Get it [here](https://osu.ppy.sh/p/api)

#### Starting FocaBot

After installing the dependencies and having the required variables set, you can start the bot with npm:

```shell
npm start
```

To add the bot to your guild, copy the client id from the [applications page](https://discordapp.com/developers/applications/me) and use this URL:

```
https://discordapp.com/oauth2/authorize?scope=bot&permissions=57408&client_id=[YOUR CLIENT ID HERE]
```

>NOTES:
> - FocaBot will keep running as long as you keep the terminal/cmd window open.
> - A process.yml file is included for use with PM2. It enables sharding.

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