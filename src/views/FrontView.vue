<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
