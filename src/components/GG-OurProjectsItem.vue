<template>
  <div class="projects__items"
       v-for="projectItem in ourProjectItem"
       :key="projectItem.id"
  >
    <div class="projects__items__content">
      <div class="projects__items__content__item">
        <div class="projects__items__content__item__images">
          <div class="projects__items__content__item__images-img">
            <img :src="require('@/assets/images/projectsImg/' + projectItem.img)" alt=""/>
          </div>
        </div>
        <div class="projects__items__content__item-title">
          <span>{{projectItem.title}}</span>
        </div>
        <div class="projects__items__content__item-subtitle">
          <span>{{projectItem.subtitle}}</span>
        </div>
        <div class="projects__items__content__item-width">
          <span>{{projectItem.width}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gg-our-projects-item",
  props: {
    ourProjectItem: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {
      showButton: false
    }
  },
}
</script>

<style lang="scss">
.projects__items {
  margin-bottom: 50px;
  &__content {
    &__item {
      &__images {
        &-img {
          margin-bottom: 16px;
        }
      }
      &-title {
        margin-bottom: 13px;
        span {
          font-size: $title-second-font-size;
          line-height: 33px;
        }
      }
      &-subtitle {
        margin-bottom: 13px;
        span {
          font-weight: 300;
          font-size: $subtitle-second-font-size;
          line-height: $subtitle-second-line-height;
          color: $dark-grey-second-color;
        }
      }
      &-width {
        span {
          font-weight: 300;
          font-size: $small-font-size;
          line-height: $small-line-height;
        }
      }
    }
  }
}
</style>