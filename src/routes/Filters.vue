<template>
  <div class="view view-scroll filters-view">
    <div class="wrap">
      <h1 class="md-display-2">Filters</h1>
      <p>FocaBot supports some basic audio effects and filters.</p>
      <p>For example:</p>
      <code>{{prefix}}play Noma - Brain Power | speed=1.5</code>
      <p>Will play Brain Power at 1.5x speed!</p>
      <p>You can chain multiple filters as well:</p>
      <code>{{prefix}}play Rick Hentai | speed=0.75 reverse lowpass=1000</code>
      <p>
        <b>
          Please do not try chain more than 3 filters, or you might end up with
          <a href="https://www.youtube.com/watch?v=Bg9fwP1vMv0">this hell</a>.
        </b>
      </p>
      <p>You can also change filters while the song plays:</p>
      <code>{{prefix}}| nightcore echo</code>
      <p>You can only do this if you're a DJ/Bot Commander or if the current song was requested by you.</p>

      <h2 class="md-display-1">Available Filters</h2>
      <span class="md-caption">
        Filters with the <md-icon>lock_outline</md-icon> icon can only be used by DJs and Bot commanders.
        <br>
        Filters with the <md-icon>portable_wifi_off</md-icon> icon are "static filters" that cannot be applied
        or removed while a song is playing and disable seeking and pausing.
      </span>

      <icon-header>| speed</icon-header>
      <p>
        Changes the speed of the song. (both pitch and tempo).<br>
        Speed must be in the 0.1x~10x range.
      </p>
      <p><b>Example:</b></p>
      <filter-demo src="/static/filter_demo/speed.opus">
        {{prefix}}play _ghost - Lullaby | speed=1.5
      </filter-demo>

      <icon-header>| tempo</icon-header>
      <p>
        Changes the speed (tempo) of the song without altering the pitch.<br>
        Speed must be in the 0.5x~2x range.
      </p>
      <p><b>Example:</b></p>
      <filter-demo src="/static/filter_demo/tempo.opus">
        {{prefix}}play _ghost - Lullaby | tempo=0.75
      </filter-demo>

      <icon-header icon="portable_wifi_off" tooltip="Static Filter">| reverse</icon-header>
      <p>
        Reverses the song.
      </p>
      <p><b>Example:</b></p>
      <filter-demo src="/static/filter_demo/reverse.opus">
        {{prefix}}play BoxCat Games - Epic Song | reverse
      </filter-demo>

      <icon-header>| echo</icon-header>
      <p>
        An exagerated reverb effect.
      </p>
      <p><b>Example:</b></p>
      <filter-demo src="/static/filter_demo/echo.opus">
        {{prefix}}play BoxCat Games - Epic Song | echo
      </filter-demo>

      <icon-header>| lowpass</icon-header>
      <p>
        Attenuates frequencies higher than the cutoff frequency.
      </p>
      <p><b>Example:</b></p>
      <filter-demo src="/static/filter_demo/lowpass.opus">
        {{prefix}}play Graphiqs Groove - Deep Sky Blue | lowpass=500
      </filter-demo>

      <icon-header>| highpass</icon-header>
      <p>
        Attenuates frequencies lower than the cutoff frequency.
      </p>
      <p><b>Example:</b></p>
      <filter-demo src="/static/filter_demo/highpass.opus">
        {{prefix}}play Graphiqs Groove - Deep Sky Blue | highpass=2000
      </filter-demo>

      <icon-header icon="lock_outline" tooltip="DJs/Bot Commanders">| bass</icon-header>
      <p>
        Bass Boost Filter. Use 20 for <b>maximum boost</b> (not recommended).
      </p>
      <p><b>Example:</b></p>
      <filter-demo src="/static/filter_demo/bass.opus">
        {{prefix}}play Broke For Free - Night Owl | bass=10
      </filter-demo>

      <icon-header icon="lock_outline" tooltip="DJs/Bot Commanders">| treble</icon-header>
      <p>
        Like <code>| bass</code>, but boosts the higher frequencies.
      </p>

      <icon-header>| flanger</icon-header>
      <p>
        Flanger Effect. (trippy af if you use stereo headphones)
      </p>
      <p><b>Example:</b></p>
      <filter-demo src="/static/filter_demo/flanger.opus">
        {{prefix}}play Broke For Free - Night Owl | flanger=0.25
      </filter-demo>

      <icon-header icon="lock_outline" tooltip="DJs/Bot Commanders">| volume</icon-header>
      <p>
        Amplifies the song. (Also produces ear rape if used with high values)<br>
        Volume must be in the -40dB~40dB range.
      </p>
      <p><b>Examples:</b></p>
      <filter-demo>
        {{prefix}}| volume=10
      </filter-demo>
      <filter-demo>
        {{prefix}}| volume=-20
      </filter-demo>

      <icon-header>| karaoke</icon-header>
      <p>
        Simulates Audacity's shitty vocal remover (heh)
      </p>
      <p><b>Example:</b></p>
      <filter-demo>
        {{prefix}}| karaoke
      </filter-demo>

      <icon-header>| chorus</icon-header>
      <p>
        Makes the audio sound like a chorus.
        (<s>combine it with flanger to make it extra trippy</s>)
      </p>
      <p><b>Example:</b></p>
      <filter-demo src="/static/filter_demo/chorus.opus">
        {{prefix}}play AlexBeroza - All As One | chorus
      </filter-demo>

      <icon-header>| phaser</icon-header>
      <p>
        Phaser Filter
      </p>
      <p><b>Example:</b></p>
      <filter-demo src="/static/filter_demo/phaser.opus">
        {{prefix}}play AlexBeroza - All As One | phaser
      </filter-demo>

      <icon-header>| tremolo</icon-header>
      <p>The volume goes constantly up and down.</p>
      <p><b>Example:</b></p>
      <filter-demo src="/static/filter_demo/tremolo.opus">
        {{prefix}}play LASERS - Amsterdam | tremolo=0.5
      </filter-demo>

      <icon-header icon="portable_wifi_off lock_outline" tooltip="Static Filter | DJs/Bot Commanders">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| loop</icon-header>
      <p>Loops a section of the audio.</p>
      <p>You must use this format:</p>
      <code>loop=[start]-[end]-[number of loops]</code>
      <p><b>Example:</b></p>
      <filter-demo src="/static/filter_demo/loop.opus">
        {{prefix}}play Azureflux - Wizard House | loop=0:01-0:07-3
      </filter-demo>

      <icon-header icon="portable_wifi_off" tooltip="Static Filter">| nofx</icon-header>
      <p>
        Dummy Static Filter that prevents further changes to filters. Can only be used when requesting a song.
      </p>

      <h1 class="md-display-2">Filter Presets</h1>
      <icon-header>| nightcore</icon-header>
      Same as <code>speed=1.22</code>.
      <icon-header>| vaporwave</icon-header>
      Same as <code>speed=0.75</code>.
      <icon-header  icon="lock_outline" tooltip="DJs/Bot Commanders">| earrape</icon-header>
      Same as <code>volume=25</code>.
      <br><br>
      <hr>
      <p class="md-caption">
        All songs used here are under a <a href="https://creativecommons.org/">Creative Commons</a> license.
      </p>
    </div>
  </div>
</template>

<script>
import Alert from '../components/Alert';
import IconHeader from '../components/IconHeader';
import FilterDemo from '../components/FilterDemo';

export default {
  name: 'commands',
  components: { Alert, IconHeader, FilterDemo },
  data() {
    return {
      defaultPrefix: process.env.BOT_PREFIX,
      prefix: this.$route.query.prefix || process.env.BOT_PREFIX,
    };
  },
};
</script>
