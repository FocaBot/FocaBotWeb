<template>
  <div id="app">
    <md-toolbar class="md-dense">
      <md-button class="md-icon-button" @click="toggleNav">
        <md-icon>menu</md-icon>
      </md-button>
      <router-link tag="h2" to="/" class="md-title" style="flex: 1; cursor: pointer">FocaBot</router-link>
    <!--
      <md-button v-if="!auth" class="md-icon-button" @click="authenticate">
        <md-icon>input</md-icon>
      </md-button>
      <div v-else class="user_btn">
        {{auth.user.username}}
        <img :src="auth.user.avatarURL"></img>
      </div>
    -->
    </md-toolbar>

    <md-sidenav class="md-left" ref="nav">
      <md-list>
        <router-link tag="md-list-item" to="/" @click="closeNav">
          <md-icon>home</md-icon> <span>Home</span>
        </router-link>
        <div class="md-divider"></div>
        <router-link tag="md-list-item" to="/commands" @click="closeNav">
          <md-icon>question_answers</md-icon> <span>Commands</span>
        </router-link>
        <router-link tag="md-list-item" to="/filters">
          <md-icon>blur_linear</md-icon> <span>Filters</span>
        </router-link>
        <router-link tag="md-list-item" to="/manual">
          <md-icon>book</md-icon> <span>Manual</span>
        </router-link>
        <router-link tag="md-list-item" to="/donate">
          <md-icon>favorite</md-icon> <span>Donate</span>
        </router-link>
        <md-list-item href="https://github.com/FocaBot/FocaBot/releases">
          <md-icon>history</md-icon> <span>Changelog</span>
        </md-list-item>
        <md-list-item href="https://discord.gg/V5drVUS">
          <md-icon>feedback</md-icon> <span>Support Server</span>
        </md-list-item>
        <div class="md-divider"></div>
        <router-link tag="md-list-item" to="/about">
          <md-icon>help</md-icon> <span>About</span>
        </router-link>
        <md-list-item href="https://www.github.com/FocaBot">
          <md-icon>code</md-icon> <span>GitHub</span>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    const d = {};
    if (sessionStorage.auth) d.auth = JSON.parse(sessionStorage.auth);
    return d;
  },
  methods: {
    toggleNav() {
      this.$refs.nav.toggle();
    },
    closeNav() {
      this.$refs.nav.close();
    },
    authenticate() {
      document.location.href = 'https://discordapp.com/oauth2/authorize' +
        `?client_id=${encodeURIComponent(process.env.BOT_CLIENT)}` +
        '&scope=identify%20guilds&response_type=token' +
        `&redirect_uri=${document.location.protocol}//${document.location.host}/callback`;
    },
  },
  watch: {
    $route() {
      // Close nav menu on route change.
      this.closeNav();
    },
  },
};
</script>
<style>
a .md-list-item-holder {
  height: 48px
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.view {
  flex: 1;
}

.view-scroll {
  overflow-y: auto;
  flex: 1 1 auto;
  height: 0;
}

.wrap {
  margin: 2em 5vw;
}

.user_btn img {
  max-height: 40px;
  border-radius: 100%;
  margin-left: 4px;
}
</style>
