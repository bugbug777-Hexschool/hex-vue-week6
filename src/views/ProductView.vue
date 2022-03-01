<template>
  <div class="container | p-3">
    <h1>{{ product.title }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    get_product() {
      const { id } = this.$route.params;
      const api = `${process.env.VUE_APP_BASE}/v2/api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http
        .get(api)
        .then((res) => {
          this.product = res.data.product;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  mounted() {
    this.get_product();
  },
};
</script>
