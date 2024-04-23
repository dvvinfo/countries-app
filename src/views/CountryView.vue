<template>
  <AppBreadcrumbs/>
  <CountryDetail />
</template>

<script>
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
import CountryDetail from '../components/CountryDetail.vue'
export default {
  name: 'CountryView',
  components: {
    CountryDetail,
    AppBreadcrumbs
  }
}

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
