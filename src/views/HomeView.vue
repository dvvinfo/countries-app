<template>
  <main>
    <SearchInput />
    <CountryList />
  </main>
</template>
<script>
import SearchInput from '../components/ContrySearch.vue'
import CountryList from '../components/CountryList.vue'
export default {
  name: 'HomeView',
  components: {
    SearchInput,
    CountryList
  }
}
</script>
