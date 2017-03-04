<template>
  <div class="view view-scroll commands-view">
    <div class="wrap">
      <md-tabs md-fixed class="md-transparent">
        <md-tab id="music-commands" md-label="Music Commands" md-icon="music_note">
          <icon-header icon="public" tooltip="Public">{{prefix}}play {link/title}</icon-header>
          Use this command while in a voice room to request a song.<br>
          The command accepts both text searches and links. <a href="/manual#supported-sites">List of supported sites</a>.<br>
          You can also upload a music file as an attachment.<br><br>
          <b>Examples:</b>
          <br><code>{{prefix}}play Karma Fields - Edge of the world</code>
          <br><code>{{prefix}}play https://www.youtube.com/watch?v=7ZWU3d3iIBs</code>
          <br><code>{{prefix}}play Au5 - Freefall | speed=1.25</code> - see <router-link to="/filters">filters</router-link>.

          <icon-header icon="public" tooltip="Public">{{prefix}}queue</icon-header>
          Displays the entire music queue for the current server. If there are more than 10 elements,
          they'll be divided in pages.

          <icon-header icon="public" tooltip="Public">{{prefix}}np</icon-header>
          Displays information about the currently playing song.

          <icon-header icon="public" tooltip="Public">{{prefix}}skip</icon-header>
          Votes to skip the current song.<br>
          By default, a song will be skipped if 40% of the people in the Voice Chat runs this command.<br>
          If the current song was requested by <b>you</b>, running this command will skip instantly.
          DJs and Bot Commanders have insta-skip as well.

          <icon-header icon="lock_outline" tooltip="DJs/Bot Commanders">{{prefix}}pause</icon-header>
          Pauses playback.

          <icon-header icon="lock_outline" tooltip="DJs/Bot Commanders">{{prefix}}resume</icon-header>
          Resumes playback.

          <icon-header icon="lock_open" tooltip="DJs/Bot Commanders/Song Requesters">{{prefix}}seek {position}</icon-header>
          Seeks to the specified position. Doesn't work with livestreams and songs with static filters.

          <icon-header icon="lock_outline" tooltip="DJs/Bot Commanders">{{prefix}}shuffle</icon-header>
          Shuffles the queue.

          <icon-header icon="lock_outline" tooltip="DJs/Bot Commanders">{{prefix}}stop</icon-header>
          Stops playback and clears the queue.

          <icon-header icon="lock_open" tooltip="DJs/Bot Commanders/Song Requesters">{{prefix}}remove {position}</icon-header>
          Removes the song at the specified position.

          <icon-header icon="lock_open" tooltip="DJs/Bot Commanders/Song Requesters">{{prefix}}removeLast</icon-header>
          Removes the last item from the queue.

          <icon-header icon="lock_outline" tooltip="DJs/Bot Commanders">{{prefix}}swap {pos1} {pos2}</icon-header>
          Swaps the position of 2 items in the queue.

          <icon-header icon="lock_outline" tooltip="DJs/Bot Commanders">{{prefix}}move {pos1} {pos2}</icon-header>
          Moves the item at <code>{pos1}</code> to <code>{pos2}</code>.

          <icon-header icon="lock_outline" tooltip="DJs/Bot Commanders">{{prefix}}bump {pos}</icon-header>
          Moves the item at <code>{pos}</code> to the first position.

          <icon-header icon="lock_open" tooltip="DJs/Bot Commanders/Song Requesters">{{prefix}}|</icon-header>
          See <router-link to="/filters">filters</router-link>.
        </md-tab>
        <md-tab id="image-commands" md-label="Image Commands" md-icon="photo">
          <icon-header icon="public" tooltip="Public">{{prefix}}seal</icon-header>
          Sends seal pictures

          <icon-header icon="public" tooltip="Public">{{prefix}}img {query}</icon-header>
          Finds the first image matching the query.<br>

          If NSFW is enabled, you can use <code>{{prefix}}imgn</code> to search with the safe filter disabled.

          <icon-header icon="public" tooltip="Public">{{prefix}}rimg {query}</icon-header>
          Finds a random image matching the query.<br>

          If NSFW is enabled, you can use <code>{{prefix}}rimgn</code> to search with the safe filter disabled.

          <icon-header icon="public" tooltip="Public">{{prefix}}imgur {query}</icon-header>
          Searchs in imgur and returns a random result.

          <icon-header icon="public" tooltip="Public">{{prefix}}gif {query}</icon-header>
          Searchs a GIF using Giphy.

          <icon-header icon="public" tooltip="Public">{{prefix}}danbooru {tag}</icon-header>
          Finds a random image containing <code>{tag}</code> in danbooru.<br>

          If NSFW is disabled, the <u>rating:safe</u> metatag will be added to the query.

          <icon-header icon="public" tooltip="Public">{{prefix}}safebooru {tag}</icon-header>
          Finds a random image containing <code>{tag}</code> in safebooru.

          <icon-header icon="public" tooltip="Public">{{prefix}}setWaifu {tag}</icon-header>
          "Bookmarks" a safebooru tag. After using this command, you can use <code>{{prefix}}waifu</code> to
          get a random image from such character.

          <icon-header icon="public" tooltip="Public">{{prefix}}waifu</icon-header>
          Sends a random image from the character previously defined using <code>{{prefix}}setWaifu</code>.
        </md-tab>
        <md-tab id="fun-commands" md-label="Fun Commands" md-icon="games">
          <icon-header icon="public" tooltip="Public">{{prefix}}+ {tag} {response}</icon-header>
          Adds a new tag.<br><br>

          <b>Examples:</b>
          <br><code>{{prefix}}+ hello hi</code>
          <br><code>{{prefix}}+ seals are cute :3</code>

          <icon-header icon="public" tooltip="Public">{{prefix}}- {tag} [response?]</icon-header>
          Removes a tag added by yourself. Specify a response to remove only that response.<br><br>

          <b>Examples:</b>
          <br><code>{{prefix}}- hello</code>
          <br><code>{{prefix}}- hello hi</code>

          <icon-header icon="public" tooltip="Public">{{prefix}}! {tag}</icon-header>
          Sends the response of a tag.<br>

          If the tag has multiple responses, a random one is chosen.<br><br>

          <b>Examples:</b>
          <br><code>{{prefix}}! hello</code>
          <br><code>{{prefix}}! seals</code>

          <icon-header icon="public" tooltip="Public">{{prefix}}poll {question} | {option 1} | {option 2} | [option 3?]...</icon-header>
          Creates a "poll".<br><br>
          <b>Examples:</b>
          <br><code>{{prefix}}poll Is blue a color? | Yes | No</code>
          <br><code>{{prefix}}poll Green tea or coffee? | Coffee | Green Tea | Both | Meh</code>

          <icon-header icon="public" tooltip="Public">{{prefix}}roll [max=100]</icon-header>
          Rolls a dice.

          <icon-header icon="public" tooltip="Public">{{prefix}}8ball {question}</icon-header>
          The classic

          <icon-header icon="public" tooltip="Public">{{prefix}}choose {option 1} ; {option 2} ; [option 3?]...</icon-header>
          Picks a random element from the List.<br><br>
          <b>Examples:</b>
          <br><code>{{prefix}}choose Console Peasants ; PC Master Race</code>
          <br><code>{{prefix}}choose Red ; Green ; Blue</code>

          <icon-header icon="public" tooltip="Public">{{prefix}}rate {thing}</icon-header>
          Rates the specified thing.
        </md-tab>
        <md-tab id="misc-commands" md-label="Misc." md-icon="extension">
          <icon-header icon="lock" tooltip="Bot Commanders Only">{{prefix}}clean</icon-header>
          Attempts to delete all messages sent by the bot.

          <icon-header icon="lock" tooltip="Bot Commanders Only">{{prefix}}config {parameter} [value?]</icon-header>
          See <router-link to="/manual#configuration">Manual#Configuration</router-link>.

          <icon-header icon="public" tooltip="Public">{{prefix}}help</icon-header>
          Sends a link to this page.

          <icon-header icon="public" tooltip="Public">{{prefix}}filters</icon-header>
          Sends a link to the <router-link to="/filters">filters</router-link> page.

          <icon-header icon="public" tooltip="Public">{{prefix}}ping</icon-header>
          Pong!
        </md-tab>
      </md-tabs>
    </div>
  </div>
</template>

<script>
import Alert from '../components/Alert';
import IconHeader from '../components/IconHeader';

export default {
  name: 'commands',
  components: { Alert, IconHeader },
  data() {
    return {
      defaultPrefix: process.env.BOT_PREFIX,
      prefix: this.$route.query.prefix || process.env.BOT_PREFIX,
    };
  },
};
</script>
