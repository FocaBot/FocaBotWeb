<template>
  <h3 class="md-title">
    <md-icon v-if="icon">
      {{icon}}
      <md-tooltip md-direction="right" v-if="tooltip">{{tooltip}}</md-tooltip>
    </md-icon>
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: 'icon-header',
  props: ['icon', 'tooltip'],
};
</script>
