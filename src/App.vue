<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <AppHeader />
  <div class="container">
    <RouterView />
  </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style scoped lang="scss">
@import './assets/variables.scss';

@media screen and (min-width: $mobile) {
  .container {
    padding: 24px 16px;
  }
}
@media screen and (min-width: $desktop) {
  .container {
    padding: 80px 45px;
  }
}
</style>
