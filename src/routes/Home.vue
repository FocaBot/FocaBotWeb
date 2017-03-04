<template>
  <div class="view home-view">
    <div class="masthead">
      <span class="md-display-3 blue">An advanced music bot</span><br>
      <span class="md-display-1 blue">For your Discord server</span><br><br>
      <span class="md-title"><md-icon>av_timer</md-icon> Seeking</span><br>
      <span class="md-title"><md-icon>blur_linear</md-icon> Audio Filters</span><br>
      <span class="md-title"><md-icon>playlist_play</md-icon> Playlist Support</span><br>
      <span class="md-title"><md-icon>fiber_smart_record</md-icon> Livestreams</span><br><br>
      <md-button href="https://tblnk.me/focabot/" class="md-raised md-primary">Get Started</md-button>
      <router-link tag="md-button" to="/commands" class="md-primary">Command List</md-button>
    </div>
    <img class="seal" src="~assets/seal.png">
  </div>
</template>

<style lang="stylus" scoped>
.home-view {
  background: url('~assets/homebg.jpg') center / cover;
}

.seal {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50vw;
}

.masthead {
  margin: 5vw 10vw

  +below(720px) {
    margin: 15vh 2vw
  }


  span {
    &.md-title {
      line-height: 1.75em;
    }

    &.blue {
      color: #1b6ec2;
    }

    .md-icon {
      height: 1.5em
      vertical-align: top
    }

    font-weight: 200;
  }
}
</style>
