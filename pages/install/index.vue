
<template>
  <div>
    <h4>I just want to have FocaBot in my server</h4>
    <p>If you just want to have FocaBot in your server and don't have time to set up your own, there's a public instance you can use:</p>
    <v-btn primary target="_blank" href="https://tblnk.me/focabot/">Add FocaBot to my server</v-btn>
    <br><br>
    <h4>I want to host my own FocaBot</h4>
    <p>Installing FocaBot on your own PC/VPS is easy and takes less than 5 minutes depending on your internet connection</p>
    <p>Use this if you want full control over the bot or higher audio quality.</p>
    <v-btn success to="/install/self">Host my own FocaBot</v-btn>
    <br><br>
    <h4>I want to make my own modifications</h4>
    <p>If you know how to code and want to make modifications to FocaBot, follow this guide to install FocaBot using the source code.</p>
    <p>By the way, <a href="https://github.com/FocaBot/FocaBot" target="_blank">pull requests</a> are always welcome, in case you want to add new features to FocaBot!</p>
    <v-btn to="/install/source">Install from Source</v-btn>
  </div>
</template>
<script>
export default {
  layout: 'docs'
}
</script>