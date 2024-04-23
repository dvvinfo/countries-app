<template>
  <div class="card">
    <div class="card__image">
      <img src="../assets/1280px-Flag_of_Germany.svg.png" alt="" />
    </div>

    <div class="card__body">
      <h3 class="card__title">Germany</h3>
      <div class="info">
        <div class="info__item">
          <span class="info__title">Population: </span>
          <span class="info__value">81,770,900</span>
        </div>
        <div class="info__item">
          <span class="info__title">Region: </span>
          <span class="info__value">Europe</span>
        </div>
        <div class="info__item">
          <span class="info__title">Capital: </span>
          <span class="info__value"> Berlin</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

.card {
  background: $light-mode-elements;

  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;
  &__image {
    width: 100%;
    height: 160px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__body {
    padding: 24px 24px 46px 24px;
  }
  &__title {
    color: $light-mode-text;
    font-size: 18px;
    line-height: 26px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .info__item {
    margin-bottom: 8px;
    font-size: $fz-14;
    line-height: 16px;
    color: $light-mode-text;
    :last-child {
      margin-bottom: 0;
    }
    &__title {
      font-weight: 700;
    }
  }
}

@media screen and (min-width: $mobile) {
}
@media screen and (min-width: $desktop) {
}
</style>
