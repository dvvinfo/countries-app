<template>
  <div class="breadcrumbs">
    <button class="breadcrumbs__button">
      <RouterLink class="breadcrumbs__link" to="/"><BackIcon /> <span>Back</span></RouterLink>
    </button>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import BackIcon from './icons/BackIcon.vue'
export default {
  name: 'AppBreadcrumbs',
  components: {
    RouterLink,
    BackIcon
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

.breadcrumbs {
  &__button {
    padding: 5px 24px;
    border: none;
    background: transparent;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
    border-radius: 2px;
  }
  &__link {
    text-decoration: none;
    color: $light-mode-text;
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

@media screen and (min-width: $desktop) {
  .breadcrumbs {
    &__button {
      box-shadow: none;
    }
  }
}
</style>
