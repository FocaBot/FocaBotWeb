<template>
  <md-toolbar class="md-dense" v-show="!hidden">
    <md-icon v-if="icon">{{icon}}</md-icon>
    <span class="alert-text"><slot></slot></span>
    <md-button class="md-icon-button" @click="hidden = true">
      <md-icon>close</md-icon>
    </md-button>
  </md-toolbar>
</template>

<script>
export default {
  name: 'alert',
  props: ['icon'],
  data: () => ({
    hidden: false,
  }),
};
</script>

<style scoped>
.alert-text {
  flex: 1;
  margin: 0 1em;
}
</style>
