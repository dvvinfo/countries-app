<template>
  <div class="loader" v-if="loading">
    <AppLoader />
  </div>
  <div v-else class="country-detail">
    <div class="country-detail__image">
      <img :src="country.flags.svg" :alt="country.name" />
    </div>

    <div class="country-detail__body">
      <h3 class="country-detail__title">{{ country.name }}</h3>
      <div class="country-detail__info">
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
            <span class="info__title">Sub Region: </span>
            <span class="info__value">{{ country.subregion }}</span>
          </div>
          <div class="info__item">
            <span class="info__title">Capital: </span>
            <span class="info__value"> {{ country.capital }}</span>
          </div>
        </div>
        <div class="info">
          <div class="info__item">
            <span class="info__title">Top Level Domain: </span>
            <span class="info__value">{{ country.topLevelDomain[0] }}</span>
          </div>
          <div class="info__item">
            <span class="info__title">Currencies: </span>
            <span class="info__value">{{ country.currencies[0].name }}</span>
          </div>
          <div class="info__item">
            <span class="info__title">Languages: </span>
            <span class="info__value">
              <span v-for="lang in country.languages" :key="lang.name">{{ lang.name }}</span></span
            >
          </div>
        </div>
      </div>
      <div class="country-detail__footer" v-if="country.borders">
        <h3 class="country-detail__footer-title">Border Countries:</h3>
        <div class="tags">
          <div class="tag" v-for="(border, index) in country.borders" :key="index">
            {{ border }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLoader from './AppLoader.vue'
export default {
  name: 'CountryDetail',
  components: {
    AppLoader
  },

  data() {
    return {
      loading: true,
      country: null
    }
  },
  created() {
    const countryCode = this.$route.params.alpha3Code
    this.loadCountryData(countryCode)
  },
  methods: {
    async loadCountryData(countryCode) {
      try {
        const response = await fetch('/data.json')
        const data = await response.json()
        // Поиск данных о стране по countryCode
        this.country = data.find((country) => country.alpha3Code === countryCode)
        this.loading = false
      } catch (error) {
        console.error('Error loading country data:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';
.loader {
  display: flex;
  justify-content: center;
}
.country-detail {
  display: flex;
  align-items: center;
  &__image {
    max-width: 560px;
    height: 401px;
    width: 100%;
    img {
      max-width: 100%;
      height: 100%;
    }
  }
  &__title {
    color: $light-mode-text;
    font-weight: 700;
    line-height: normal;
  }
  &__info {
    display: flex;
  }
  &__footer {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: $fz-16;
    line-height: 24px;
  }
  &__footer-title {
    color: $light-mode-text;
    font-weight: 700;
    flex-shrink: 0;
  }
  .info {
    color: $light-mode-text;
    line-height: 32px;
    display: flex;
    flex-direction: column;
    &__title {
      color: $light-mode-text;
      font-weight: 700;
    }
  }
}

.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  font-size: $fz-14;
  .tag {
    min-width: 96px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0px 0px 4px 1px #0000001b;
    border-radius: 2px;
  }
}

@media screen and (min-width: $mobile) {
  .country-detail {
    padding-top: 64px;
    flex-direction: column;
    gap: 44px;
    &__image {
      max-width: 320px;
      height: auto;
      width: 100%;
      img {
        max-width: 100%;
        height: 100%;
      }
    }
    &__title {
      font-size: 22px;
    }
    &__info {
      margin-top: 16px;
      flex-direction: column;
      gap: 32px;
    }
    &__footer {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 34px;
    }
    .info {
      font-size: $fz-14;
    }
  }
}
@media screen and (min-width: $desktop) {
  .country-detail {
    padding-top: 80px;
    flex-direction: row;
    gap: 120px;
    &__image {
      max-width: 560px;
      height: 401px;
      width: 100%;
      img {
        max-width: 100%;
        height: 100%;
      }
    }
    &__title {
      font-size: 32px;
    }
    &__info {
      margin-top: 23px;
      flex-direction: row;
      justify-content: space-between;
      gap: 140px;
    }
    &__footer {
      flex-direction: row;
      align-items: center;
      margin-top: 68px;
    }
    .info {
      font-size: $fz-16;
    }
  }
}
</style>
