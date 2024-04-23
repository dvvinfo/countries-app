<template>
  <div class="country-list">
    <CountryCard
      v-for="country in filteredCountries"
      :key="country.alpha3Code"
      :country="country"
    />
    <div v-if="filteredCountries.length === 0">Нет данных</div>
  </div>
</template>

<script>
import CountryCard from './CountryCard.vue'
export default {
  name: 'CountryList',
  components: {
    CountryCard
  },

  props: {
    countries: {
      type: Array,
      required: true
    },
    searchQuery: {
      type: String,
      required: true
    }
  },
  computed: {
    filteredCountries() {
      return this.countries.filter((country) =>
        country.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';
.country-list {
  display: grid;
}
@media screen and (min-width: $mobile) {
  .country-list {
    margin-top: 24px;
    grid-template-columns: 264px;
    gap: 40px;
    justify-content: center;
  }
}
@media screen and (min-width: $desktop) {
  .country-list {
    margin-top: 48px;
    grid-template-columns: repeat(4, 264px);
    gap: 75px;
    justify-content: flex-start;
  }
}
</style>
