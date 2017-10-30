<template>
  <v-layout column justify-center align-center class="home">
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="~assets/image/focabot_logo.png" class="logo" />
      </div>
      <center>
        <h5>An easy to use music bot with advanced features!</h5>
        <ul class="hp-icons">
          <li><v-icon>blur_linear</v-icon>Audio Filters</li>
          <li><v-icon>playlist_play</v-icon>Playlists</li>
          <li><v-icon>settings_input_antenna</v-icon>Livestreams</li>
          <li><v-icon>shuffle</v-icon>Full Control</li>
          <li><v-icon>settings</v-icon>Customizable</li>
        </ul>
        <br>
        <v-btn to="/install" primary>Get Started<v-icon dark right>forward</v-icon></v-btn>
        <br><br>
        <v-btn to="/commands" small flat><v-icon dark left>chat_bubble_outline</v-icon>Commands</v-btn>
        <v-btn to="/docs" flat><v-icon dark left>book</v-icon>Documentation</v-btn>
        <v-btn small flat href="https://github.com/FocaBot" target="_blank"><v-icon dark left>code</v-icon>GitHub</v-btn>
        <br><br>
        <v-btn href="https://github.com/TheBITLINK" target="_blank" flat class="hp-footer">
          Made by TheBITLINK
          <img class="av" src="https://www.gravatar.com/avatar/93f31b88845bcdca6bcfa908ebeef4ab.jpg?s=32"></img>
        </v-btn>
      </center>
    </v-flex>
  </v-layout>
</template>
<style lang="stylus">
.logo {
  max-width: 75%
}

.hp-icons {
  display: flex
  justify-content: center
  flex-wrap: wrap
  li {
    margin: 8px
    display: flex
    flex-direction: column
    // width: 96px
    align-items: center
  }
}

.hp-footer {
  text-transform: none
  font-weight: 100
  img {
    margin-left: 8px
    border-radius: 100%
  }
}
</style>
