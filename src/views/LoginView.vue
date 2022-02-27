<template>
  <div class="container | p-3 pt-5">
    <form @submit.prevent="login">
      <div class="row justify-content-center">
        <div class="col-4">
          <h1 class="text-center">使用者請登入</h1>
          <div class="mb-3">
            <label for="email" class="d-block"
              ><span class="fs-5 | mb-1">帳號</span>
              <input
                v-model="user.username"
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </label>
          </div>
          <div class="mb-3">
            <label for="password" class="d-block"
              ><span class="fs-5 | mb-1">密碼</span>
              <input v-model="user.password" type="password" class="form-control" id="password" />
            </label>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-primary">登入</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const api = `${process.env.VUE_APP_BASE}/v2/admin/signin`;
      this.$http
        .post(api, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(
            expired,
          )}; SameSite=None; Secure`;
          this.$router.replace('/admin/products');
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>
