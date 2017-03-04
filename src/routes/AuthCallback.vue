<template>
  <div class="view auth-view">
    <md-spinner v-if="!error" :md-size="32" :md-stroke="2" md-indeterminate></md-spinner>
    <span v-if="!error">&nbsp; Making seals fly...</span>
    <span v-if="error">
      <md-icon>error</md-icon> Something went wrong.
    </span>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return { error: false };
  },
  created() {
    this.validate();
  },
  watch: {
    $route: 'validate',
  },
  methods: {
    validate() {
      const authData = {
        token: document.location.hash.match(/access_token=([\w]+)/)[1],
      };
      if (!authData.token) return this.$router.replace('/');
      return axios({
        method: 'get',
        baseURL: process.env.API_BASE,
        url: '/users/me',
        headers: {
          Authorization: `Bearer ${authData.token}`,
        },
      })
      .then((res) => {
        const userInfo = res.data;
        authData.user = userInfo;
        authData.user.avatarURL = `https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar}.jpg`;
        sessionStorage.auth = JSON.stringify(authData);
        document.location.href = '/';
      })
      .catch(() => {
        this.error = true;
      });
    },
  },
};
</script>
<style>
.auth-view {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  user-select: none;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default!important;
}
</style>