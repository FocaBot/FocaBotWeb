<template>
  <div>
    <v-tabs @input="updateAccent" dark icons centered>
      <v-tabs-bar class="transparent">
        <v-tabs-slider :color="accent"></v-tabs-slider>
        <v-tabs-item v-for="(section, i) in def" :key="i" :href="`#${i}`">
          <v-icon>{{section._icon}}</v-icon>
          <span class="hidden-xs-only">{{section._title}}</span>
        </v-tabs-item>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content v-for="(section, i) in def" :key="i" :id="i">
          <p class="subheading grey--text" v-html="simpleMarkdown(section._note)"></p>
          <command-definition
            v-for="(command, commandName) in section"
            v-if="!commandName.match(/^_/)"
            :key="commandName"
            :prefix="prefix"
            :color="accent"
            :commandName="commandName"
            :commandMeta="command"
          ></command-definition>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>
<script>
import CommandDefinition from '~/components/CommandDefinition'
const def = require('json-loader!yaml-loader!~/assets/defs/commands.yml') // eslint-disable-line import/no-webpack-loader-syntax
// TODO: Environment variable for this
const defaultPrefix = "f'"

export default {
  layout: 'docs',
  components: { CommandDefinition },
  data() {
    return {
      def,
      accent: 'cyan'
    }
  },
  methods: {
    updateAccent(sectionId) {
      this.accent = def[sectionId]._color || 'cyan'
    },
    simpleMarkdown(input) {
      if (!input) return ''
      return input
      .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
      .replace(/\*(.+?)\*/g, '<i>$1</i>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\[(.+?)]\((.+?)\)/g, '<a target="_blank" href="$2">$1</a>')
      .replace(/$/gm, '<br>')
      .replace(/{{prefix}}/g, this.prefix)
    }
  },
  computed: {
    prefix () {
      return this.$route.query.prefix || defaultPrefix
    }
  }
}
</script>