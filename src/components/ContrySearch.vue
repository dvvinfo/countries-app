<template>
  <div class="search">
    <SearchInput class="search__icon" />
    <input
      v-model="searchQuery"
      type="text"
      class="search__input"
      placeholder="Search for a country..."
    />
  </div>
</template>

<script>
import SearchInput from './icons/SearchIcon.vue'
export default {
  name: 'ContrySearch',
  components: {
    SearchInput
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  watch: {
    searchQuery(newValue) {
      this.$emit('update-search', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';
.search {
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: $light-mode-elements;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  &__input {
    width: 100%;
    border: none;
    &:focus {
      outline: none;
    }
  }
}

@media screen and (min-width: $mobile) {
  .search {
    padding: 16px 32px;
    &__icon {
      width: 16px;
      height: 16px;
      fill: #b2b2b2;
    }
    &__input {
        font-size: 12px;
        line-height: 20px;
      &::placeholder {
        color: #c4c4c4;
      }
    }
  }
}
@media screen and (min-width: $desktop) {
  .search {
    max-width: 480px;
    padding: 19px 32px;
    &__icon {
      width: 18px;
      height: 18px;
      fill: $light-mode-input;
    }
    &__input {
        font-size: $fz-14;
        line-height: 20px;
      &::placeholder {
        color: $light-mode-input;
      }
    }
  }
}
</style>
