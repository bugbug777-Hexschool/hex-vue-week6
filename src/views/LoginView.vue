<template>
  <div class="container | p-3 pt-5">
    <v-form @submit="login" v-slot="{ errors }">
      <div class="row justify-content-center">
        <div class="col-4">
          <h1 class="text-center">使用者請登入</h1>
          <div class="form-floating mb-3">
            <v-field
              v-model="user.username"
              type="email"
              name="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              id="email"
              rules="email|required"
              aria-describedby="example@.mail.com"
            ></v-field>
            <label for="email" class="d-block">帳號</label>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>
          <div class="form-floating mb-3">
            <v-field
              v-model="user.password"
              type="password"
              name="password"
              class="form-control"
              rules="required"
              :class="{ 'is-invalid': errors['password'] }"
              id="password"
            ></v-field>
            <label for="password" class="d-block">密碼</label>
            <error-message name="password" class="invalid-feedback"></error-message>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-primary">登入</button>
          </div>
        </div>
      </div>
    </v-form>
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
