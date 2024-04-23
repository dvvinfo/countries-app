<template>
  <header class="header">
    <h1 class="header__title">Where in the world?</h1>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';
.header {
  background: $light-mode-elements;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  &__title {
    color: $light-mode-text;
    font-weight: 700;
  }
}
@media screen and (min-width: $mobile) {
  .header {
    padding: 30px 16px;

    &__title {
      font-size: $fz-14;
      line-height: 20px;
    }
  }
}
@media screen and (min-width: $desktop) {
  .header {
    padding: 24px 80px;
    &__title {
      font-size: 24px;
      line-height: normal;
    }
  }
}
</style>
