<template>
  <div
      class="process__item"
      v-for="processItem in orderingProcessItem"
      :key="processItem.id"
  >
    <div class="process__item__content">
      <div class="process__item__content-id">
        <span>0{{processItem.id}}</span>
      </div>
      <div class="process__item__content__body">
        <div class="process__item__content__body-img">
          <img :src="require('@/assets/images/svgIcon/' + processItem.img)" alt="" />
        </div>
        <div class="process__item__content__body-title">
          <span>{{processItem.title}}</span>
        </div>
        <div class="process__item__content__body-subtitle">
          <span>{{processItem.subtitle}}</span>
        </div>
        <div class="process__item__content__body-link" v-if="processItem.imgInput">
          <img :src="require('@/assets/images/svgIcon/' + processItem.imgInput)" alt="" />
          <button>{{processItem.input}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gg-ordering-process-item",
  props: {
    orderingProcessItem: {
      type: Object,
      default: () => {},
    },
  }
}
</script>

<style lang="scss">
.process__item {
  max-width: 450px;
  &__content {
    display: flex;
    column-gap: 45px;
    &-id {
      font-weight: 500;
      font-size: 64px;
      line-height: 145.69%;
      margin-top: 70px;
    }
    &__body {
      &-img {
        margin-bottom: 28px;
      }
      &-title {
        background: $yellow-color;
        display: inline-block;
        padding: 7px 44px 7px 12px;
        margin-bottom: 19px;
        span {
          font-weight: 700;
          font-size: 32px;
          line-height: 38px;
        }
      }
      &-subtitle {
        font-weight: 400;
        font-size: 26px;
        line-height: 147.69%;
        color: $dark-grey-second-color;
        margin-bottom: 25px;
      }
      &-link {
        display: flex;
        align-items: center;
        column-gap: 6px;
        button {
          font-size: 14px;
          line-height: 147.69%;
          text-decoration-line: underline;
        }
        img {
          background: $yellow-color;
          padding: 7px 5px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>