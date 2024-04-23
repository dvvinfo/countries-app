<template>
  <div class="country-detail">
    <div class="country-detail__image">
      <img src="../assets/FLAG.png" alt="" />
    </div>

    <div class="country-detail__body">
      <h3 class="country-detail__title">Germany</h3>
      <div class="country-detail__info">
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
            <span class="info__title">Sub Region: </span>
            <span class="info__value">Western Europe</span>
          </div>
          <div class="info__item">
            <span class="info__title">Capital: </span>
            <span class="info__value"> Berlin</span>
          </div>
        </div>
        <div class="info">
          <div class="info__item">
            <span class="info__title">Top Level Domain: </span>
            <span class="info__value">.be</span>
          </div>
          <div class="info__item">
            <span class="info__title">Currencies: </span>
            <span class="info__value">Euro</span>
          </div>
          <div class="info__item">
            <span class="info__title">Languages: </span>
            <span class="info__value"> Dutch, French, German</span>
          </div>
        </div>
      </div>
      <div class="country-detail__footer">
        <h3 class="country-detail__footer-title">Border Countries:</h3>
        <div class="tags">
          <div class="tag">France</div>
          <div class="tag">France</div>
          <div class="tag">France</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryDetail'
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

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
      margin-top: 68px;
      
    }
    .info {
      font-size: $fz-16;
    }
  }
}
</style>
