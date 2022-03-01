<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <ul class="navbar-nav flex-row w-100">
        <li class="nav-item me-auto">
          <router-link class="nav-link" to="/">回到首頁</router-link>
        </li>
        <li class="nav-item">
          <a @click.prevent="logout" href="#" class="nav-link">登出</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container | p-3">
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_BASE}/v2/logout`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.$router.replace('/');
        }
      });
    },
    check_login_status() {
      const api = `${process.env.VUE_APP_BASE}/v2/api/user/check`;
      const token = document.cookie
        ?.split('; ')
        .find((row) => row.startsWith('hexToken='))
        ?.split('=')[1];
      if (token === undefined) {
        this.$router.replace('/login');
      }
      this.$http.defaults.headers.common.Authorization = token;
      this.$http.post(api).catch((err) => {
        if (!err.response.data.success) {
          this.$router.replace('/login');
        }
      });
    },
  },
  mounted() {
    this.check_login_status();
  },
};
</script>
