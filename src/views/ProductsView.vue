<template>
  <div class="container | p-3">
    <table class="table">
      <thead>
        <tr>
          <th width="120" scope="col">圖片</th>
          <th width="120" scope="col">產品名稱</th>
          <th width="120" scope="col">價格</th>
          <th width="120" scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <img class="img-fluid" :src="product.imageUrl" :alt="product.title" />
          </td>
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td>
            <router-link :to="`/product/${product.id}`" class="btn btn-primary | me-1">
              查看更多</router-link
            >
            <button type="button" class="btn btn-warning">加入購物車</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      pagination: {},
    };
  },
  methods: {
    get_all_products() {
      const api = `${process.env.VUE_APP_BASE}/v2/api/${process.env.VUE_APP_PATH}/products`;
      this.$http
        .get(api)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  mounted() {
    this.get_all_products();
  },
};
</script>
