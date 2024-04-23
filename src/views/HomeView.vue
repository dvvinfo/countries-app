<template>
  <main>
    <SearchInput @update-search="handleSearch" />
    <div class="loader" v-if="loading">
      <AppLoader />
    </div>
    <CountryList v-else :countries="countries" :search-query="searchQuery" />
  </main>
</template>
<script>
import SearchInput from '../components/ContrySearch.vue'
import CountryList from '../components/CountryList.vue'
import AppLoader from '../components/AppLoader.vue'
export default {
  name: 'HomeView',
  components: {
    SearchInput,
    CountryList,
    AppLoader
  },
  data() {
    return {
      loading: true,
      countries: [],
      searchQuery: '' // Запрос для фильтрации стран
    }
  },

  methods: {
    handleSearch(query) {
      this.searchQuery = query
    },
    async loadCountries() {
      this.loading = true

      try {
        const response = await fetch('data.json')
        const data = await response.json()
        this.countries = data
      } catch (error) {
        // Обработка ошибки при загрузке данных
        console.error('Error loading countries:', error)
      } finally {
        this.loading = false
      }
    }
  },
  created() {
    this.loadCountries()
  }
}
</script>
<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
}
</style>
