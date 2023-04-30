<template>
  <div
      class="services__item"
      v-for="servicesItem in basicServicesItem"
      :key="servicesItem.id"
  >
    <div class="services__item__content">
      <div class="services__item__content-img">
        <img :src="require('@/assets/images/servicesImg/' + servicesItem.img)" alt="" />
      </div>
      <div class="services__item__content__text">
        <div class="services__item__content__text-title">
          <img src="@/assets/images/svgIcon/square.svg" alt="" />
          <span>{{servicesItem.title}}</span>
        </div>
        <div class="services__item__content__text-subtitle">
          <span>{{servicesItem.subtitle}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gg-basic-services-item",
  props: {
    basicServicesItem: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.services__item {
  max-width: 437px;
  &__content {
    position: relative;
    &__text {
      padding: 69px 130px 69px 13px;
      position: relative;
      &-title {
        font-size: $title-font-size;
        line-height: $title-line-height;
        margin-bottom: 23px;
        img {
          position: absolute;
          top: 30px;
          left: 0;
        }
      }
      &-subtitle {
        font-weight: 400;
        font-size: 18px;
        line-height: 147.19%;
        color: $dark-grey-second-color;
      }
    }
  }
}
</style>