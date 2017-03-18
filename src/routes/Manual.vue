<template>
  <div class="view view-scroll manual-view">
    <div class="wrap">
      <h1 class="md-display-2">Manual</h1>
      <md-list class="md-dense toc">
        <md-list-item href="#installing">Installing</md-list-item>
        <md-list-item href="#configuration">Configuration</md-list-item>
        <md-list-item href="#roles">Roles</md-list-item>
        <md-list-item href="#supported-sites">Supported Sites</md-list-item>
        <md-list-item href="#troubleshooting">Troubleshooting</md-list-item>
      </md-list>

      <h2 class="md-title" id="installing">Installing</h2>
      Sometimes you might want to host your own FocaBot... Well, thanks to open source magic
      it's pretty much possible, but this procedure might be quite difficult for the
      average user. I'll try to make it easier in the future.
      <h4>Prerequisites</h4>
      <ul>
        <li><a href="https://nodejs.org/es/">Node.js v7+</a> (v6 will <b>not</b> work)</li>
        <li><a href="https://redis.io/">Redis</a> (If you use Windows, you can download it <a href="https://github.com/MSOpenTech/redis/releases">here</a>)</li>
        <li><a href="https://ffmpeg.org/">FFMpeg</a></li>
        <li><a href="https://discordapp.com/developers/applications/me">A Discord bot token</a></li>
        <li><a href="https://github.com/FocaBot/FocaBot/blob/master/.env.example">Some API keys if you want the additional stuff</a></li>
      </ul>
      <h4>Installing FocaBot</h4>
      <ul>
        <li><a href="https://github.com/FocaBot/FocaBot/archive/master.zip">Download</a> or clone the <a href="https://github.com/FocaBot/FocaBot">GitHub repo</a> to an empty folder.</li>
        <li>Open a command line on said folder and run <code>npm install</code>.</li>
        <li>
          Rename the <code>.env.example</code> file to <code>.env</code> and fill the required fields:
          <ul>
            <li><code>BOT_TOKEN</code>: A discord bot token. You can get one <a href="https://discordapp.com/developers/applications/me">here</a>.</li>
            <li><code>BOT_PREFIX</code>: The default Command Prefix. If you set it to <code>!</code> i'll find you and kill you.</li>
            <li><code>BOT_OWNER</code>: Here you put the user IDs of the accounts that will have full access to the bot.</li>
            <li><code>BOT_MODULES</code>: List of modules you want to be loaded.</li>
            <li><code>BOT_ADMINS</code>: The IDs here will have access to admin commands across all guilds</li>
            <li><code>BOT_ADMIN_ROLES</code>: Users with these roles will have administrative access on their guilds.</li>
            <li><code>BOT_DJ_ROLES</code>: Users with these roles will have full control over the queue and instant skip.</li>
            <li>The other fields are optional</li>
          </ul>
        </li>
      </ul>
      <h4>Running FocaBot</h4>
      <ul>
        <li>Make sure Redis is running before starting the bot (otherwise your data will not be saved)</li>
        <li>Run the <code>npm start</code> command in the bot's folder</li>
      </ul>
      FocaBot also includes a <code>process.yml</code> for use with PM2. If you use PM2, the bot will
      be automatically sharded.

      <h2 class="md-title" id="configuration">Configuration</h2>
      FocaBot has a few configurable parameters.
      To set them, use the <code>{{prefix}}config</code> command with the following syntax:
      <pre><code>{{prefix}}config {parameter} {value}</code></pre>
      <h4>List of configurable parameters</h4>
      <ul>
        <li>
          <b>prefix</b> {text} (default: <code>{{defaultPrefix}}</code>)
          <p>Custom command prefix for the server.</p>
          <pre><code>{{prefix}}config prefix '</code></pre>
        </li>
        <li>
          <b>restrict</b> {yes/no} (default: <code>no</code>)
          <p>When enabled, only DJs and Bot Commanders have access to the bot.</p>
          <pre><code>f'config restrict yes</code></pre>
        </li>
        <li>
          <b>autoDel</b> {yes/no} (default: <code>yes</code>)
          <p>When enabled, the bot deletes some messages automatically.</p>
          <pre><code>f'config autoDel no</code></pre>
        </li>
        <li>
          <b>allowNSFW</b> {yes/no} (default: <code>no</code>)
          <p>
            When disabled, the commands <code>imgn</code> and <code>rimgn</code> can't be used.
            Instead, they act as aliases to <code>img</code> and <code>rimg</code>.
          </p>
          <pre><code>f'config allowNSFW yes</code></pre>
        </li>
        <li>
          <b>voteSkip</b> {yes/no} (default: <code>yes</code>)
          <p>
            When disabled, only DJs and Bot Commanders are able to skip songs.
            The vote skip function is entirely disabled.
          </p>
        </li>
        <li>
          <b>allowWaifus</b> {yes/no} (default: <code>yes</code>)
          <p>When disabled, the <code>f'setWaifu</code> and <code>f'waifu</code> commands can't be used.</p>
        </li>
        <li>
          <b>allowTags</b> {yes/no} (default: <code>yes</code>)
          <p>When disabled, the tag commands can't be used.</p>
        </li>
        <li>
          <b>greet</b> {text} (default: <code>off</code>)
          <p>When set, the bot will send the specified text everytime a new member joins your server.</p>
          <p>You can use the following variables in the message:</p>
          <ul>
            <li>{mention} - Mentions the user</li>
            <li>{name} - Prints the Username</li>
            <li>{server} - Prints the current server name</li>
          </ul>
          <p>Example:</p>
          <pre><code>f'config greet Welcome to {server}, {mention}!</code></pre>
          <p>Set it to <code>off</code> to disable.</p>
        </li>
        <li>
          <b>farewell</b>
          <p>Same as above, but triggered when a user leaves the server.</p>
        </li>
        <li>
          <b>maxSongLength</b> {number} (default: <code>1800</code>)
          <p>Max allowed song length for non-DJs, in seconds.</p>
          <p>Must be at least 15 seconds and not exceed 21600 seconds (6 hours).</p>
        </li>
        <li>
          <b>dynamicNick</b> {yes/no} (default: <code>no</code>)
          <p>When enabled, the bot sets its nickname to the title of the song currently being played.</p>
        </li>
        <li>
          <b>allowImages</b> {yes/no} (default: <code>yes</code>)
          <p>When disabled, no image commands can be used.</b>
        </li>
        <li>
          <b>maxItems</b> {number} (default: <code>0</code>)
          <p>Limites the maximum number of items the same user can have in the queue.</p>
          <p>Setting it to 0 disables the limit. The limit doesn't apply to DJs or Bot Commanders.</p>
        </li>
      </ul>

      <h2 class="md-title" id="roles">Roles</h2>
      FocaBot has 4 access levels, each one requires the users to have the corresponding roles.
      Server Owners have admin access by default.

      <h4>User</h4>
      <ul>
        <li>This is the default and lowest access level</li>
        <li>Playlist requests limited to 30 minutes in length by default</li>
        <li>Have control over playlist items added by themselves (filters, skip, remove)</li>
      </ul>
      <h4>DJ</h4>
      <ul>
        <li>People with the <code>DJ</code> role.</li>
        <li>Playlist requests limited to 12 hours in length</li>
        <li>Instant skip</li>
        <li>Have full control over the playlist (move, swap, shuffle, remove, etc)</li>
        <li>Have access to some restricted filters and commands</li>
      </ul>
      <h4>Admin/Bot Commander</h4>
      <ul>
        <li>Server Owners and people with the <code>Bot Commander</code> or <code>Admin</code> roles.</li>
        <li>Playlist requests limited to 24 hours in length</li>
        <li>Have access to the <code>{{prefix}}config</code> command</li>
      </ul>
      <h4>Bot Owner</h4>
      <ul>
        <li>Must be specified manually on the <code>.env</code> file.</li>
        <li>No limits in song length</li>
        <li>Access to the <code>{{prefix}}eval</code> command, which allows to run code</li>
        <li>Can restart the bot</li>
        <li>Can execute shell commands</li>
      </ul>

      <h2 class="md-title" id="supported-sites">Supported Sites</h2>
      In theory, FocaBot should support <a href="http://rg3.github.io/youtube-dl/supportedsites.html">most of the sites supported by youtube-dl</a>
      but here's a list of sites that were oficially tested and should work most of the time:

      <ul>
        <li>YouTube Videos</li>
        <li>YouTube Playlists</li>
        <li>YouTube Streams</li>
        <li>SoundCloud Tracks</li>
        <li>SoundCloud Artists</li>
        <li>SoundCloud Playlists</li>
        <li>Bandcamp Tracks</li>
        <li>Bandcamp Albums</li>
        <li>Beatport</li>
        <li>Facebook Videos</li>
        <li>Twitter Videos</li>
        <li>Twitch Streams</li>
        <li>Discord Attachments (send the file with {{prefix}}play as message)</li>
        <li>Direct links to media files</li>
        <li>Most internet radios (with direct link)</li>
      </ul>

      Of course, you are welcome to try other sites. If you find another major site supported by
      FocaBot, you can contact me and i'll add it to the list.

      <h2 class="md-title" id="troubleshooting">Troubleshooting</h2>
      <h4>The bot is stuck in a voice channel, and doesn't play anything</h4>

      First, make sure the current song is not paused with <code>{{prefix}}np</code>. If it's paused,
      ask a DJ to use the <code>{{prefix}}resume</code> command. Vote Skipping also works on paused songs.
      <ul>
        <li>
          If the current song appears as `playing`, but you don't hear anything:
          <ul>
            <li>
              Try disconnecting and reconnecting from the Voice Chat yourself. Discord has a bug that
              makes bots go silent if they disconnect on other servers you are.
            </li>
            <li>
              If you don't hear anything after reconnecting, try to use the <code>{{prefix}}seek</code> command.
            </li>
            <li>
              If that doesn't work, use <code>{{prefix}}skip</code>.
            </li>
          </ul>
        </li>
        <li>
          If <code>{{prefix}}np</code> produces no output, or the above steps didn't work.
          <ul>
            <li>
              The queue is likely corrupt. Use <code>{{prefix}}clear</code> as a last resort.
            </li>
            <li>
              If that doesn't solve the problem, contact me inmediatly (@TheBITLINK#3141).
            </li>
          </ul>
        </li>
      </ul>

      <h4>The bot doesn't respond to my commands on some servers</h4>
      Make sure you're using the right command prefix. FocaBot allows setting custom prefix, and not all
      servers will have the same prefix. The default prefix however (<code>{{defaultPrefix}}</code>) should
      always work. Even when a custom prefix is set on the current server.

      FocaBot also fails silently if you try to run a command you are not allowed to use. So try running
      <code>{{prefix}}ping</code> or <code>{{prefix}}help</code>. If neither of those work, but work on
      other servers, it might be a problem with a shard. If you are not hosting the bot yourself, ask the
      bot owner to restart the bot, or the affected shard(s).

      <h4>Text search doesn't work, but links do / Links from <i>X</i> site don't work anymore.</h4>
      Sometimes, <a href="https://github.com/rg3/youtube-dl">youtube-dl</a> breaks, so it's pretty common
      to see some sites stop working. Most of the time, those sites are fixed the same day they break
      (youtube-dl is a very active project), and just require an updated version of youtube-dl.
      <br><br>
      I don't have much free time to constantly check if everything is ok, so if i forget to update
      youtube-dl, just send me a DM and i'll update it as soon as possible.
      <br><br>
      If you are hosting the bot yourself, you can execute this command to update youtube-dl:
      <pre><code>{{prefix}}exec npm uninstall youtube-dl && npm install youtube-dl</code></pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'manual',
  data() {
    return {
      defaultPrefix: process.env.BOT_PREFIX,
      prefix: this.$route.query.prefix || process.env.BOT_PREFIX,
    };
  },
};
</script>
<style lang="stylus">
.toc {
  max-width: 300px
  background: #ddd!important

  &::before {
    content: "Table of contents"
    color: #999
    user-select: none
    cursor: default
    padding: 4px
    text-transform: uppercase
  }
}
</style>
