<template>
  <div class="filter-demo">
    <md-button class="md-primary" v-bind:disabled="!src" @click="togglePlayback">
      <md-icon>{{icon}}</md-icon>
    </md-button>
    <audio v-if="src" :src="src" ref="audioEl" @play="updateStatus" @pause="updateStatus"></audio>
    <code><slot></slot></code>
  </div>
</template>

<script>
export default {
  name: 'filter-demo',
  props: ['src'],
  data: () => ({
    playing: false,
    icon: 'play_arrow',
  }),
  methods: {
    togglePlayback() {
      if (this.$refs.audioEl.paused) {
        this.$refs.audioEl.play();
      } else {
        this.$refs.audioEl.pause();
        this.$refs.audioEl.currentTime = 0;
      }
    },
    updateStatus() {
      if (this.$refs.audioEl.paused) {
        this.playing = false;
        this.icon = 'play_arrow';
      } else {
        this.playing = true;
        this.icon = 'pause';
      }
    },
  },
};
</script>

<style scoped>
.filter-demo {
  display: flex;
  align-items: center;
}
</style>
