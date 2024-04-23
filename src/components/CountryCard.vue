<template>
  <div class="card">
    <router-link :to="'/detail/' + country.alpha3Code" class="card__link">
      <div class="card__image">
        <img :src="country.flags.svg" :alt="country.name" />
      </div>

      <div class="card__body">
        <h3 class="card__title">{{ country.name }}</h3>
        <div class="info">
          <div class="info__item">
            <span class="info__title">Population: </span>
            <span class="info__value">{{ country.population }}</span>
          </div>
          <div class="info__item">
            <span class="info__title">Region: </span>
            <span class="info__value">{{ country.region }}</span>
          </div>
          <div class="info__item">
            <span class="info__title">Capital: </span>
            <span class="info__value"> {{ country.capital }}</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CountryCard',
  props: {
    country: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

.card {
  background: $light-mode-elements;

  box-shadow: 0px 0px 7px 7px rgba(0, 0, 0, 0.0294384);
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
  &__link {
    text-decoration: none;
  }

  .info__item {
    margin-bottom: 8px;
    font-size: $fz-14;
    line-height: 16px;
    color: $light-mode-text;
    :last-child {
      margin-bottom: 0;
    }
  }
}
.info__title {
  font-weight: 700;
}

@media screen and (min-width: $mobile) {
}
@media screen and (min-width: $desktop) {
}
</style>
