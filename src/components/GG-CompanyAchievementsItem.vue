<template>
  <div class="achievements__item">
    <div class="achievements__item__body">

      <div class="achievements__item__body-title">
        <span>{{ achievements_item.title }}</span>
      </div>

      <div class="achievements__item__body-subtitle">
        <img src="@/assets/images/svgIcon/square.svg" />
        <span>{{ achievements_item.subtitle }}</span>
      </div>

      <div class="achievements__item__body-info">
        <span>{{ achievements_item.info }}</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "GG-CompanyAchievementsItem",
  props: {
    achievements_item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.achievements__item {
  &__body {
    max-width: 390px;
    &-title {
      font-size: 64px;
      line-height: 75px;
      margin-bottom: 7px;
    }
    &-subtitle {
      display: flex;
      column-gap: 7px;
      font-size: 28px;
      line-height: 33px;
      margin-bottom: 16px;
      span {
        margin-top: 15px;
      }
    }
    &-info {
      font-size: 18px;
      line-height: 21px;
      span {
        font-weight: $font-weight-300;
      }
    }
  }
}
</style>
