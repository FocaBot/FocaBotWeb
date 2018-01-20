<template>
  <v-app dark toolbar footer>
    <v-navigation-drawer persistent enable-resize-watcher app v-model="drawer">
      <v-list>
        <v-list-tile ripple router v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout column justify-center align-left>
          <nuxt />
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2017 thebit.link</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { icon: 'home', title: 'Docs Home', to: '/docs' },
          { icon: 'get_app', title: 'Installation Guide', to: '/install' },
          { icon: 'extension', title: 'Commands', to: '/commands' },
          { icon: 'blur_on', title: 'Filters', to: '/filters' },
          { icon: 'build', title: 'Configuration', to: '/configuration' },
          { icon: 'question_answer', title: 'FAQ', to: '/faq' },
          { icon: 'lightbulb_outline', title: 'Contribute', to: '/contribute' },
          { icon: 'favorite', title: 'Donate', to: '/donate' }
        ],
        title: 'FocaBot Docs'
      }
    }
  }
</script>

<style lang="stylus">
blockquote {
  font-size: 12px 
  padding: 8px
}
</style>