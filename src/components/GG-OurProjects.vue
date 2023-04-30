<template>
  <section class="projects__wrapper">
    <div class="projects__content">
      <div class="projects__content-title">
        <h2>НАШИ ПРОЕКТЫ</h2>
        <div class="title-line">
          <img src="@/assets/images/svgIcon/line.svg" alt=""/>
        </div>
      </div>
      <div class="projects__content__items">
        <gg-our-projects-item :ourProjectItem="ourProjectItems"/>
      </div>
      <div class="projects__content__button">
        <gg-button id="black-button">
          <img src="@/assets/images/svgIcon/reload.svg" alt="">
          <span>Еще проекты</span>
        </gg-button>
      </div>
    </div>
  </section>
</template>

<script>
import GgOurProjectsItem from "@/components/GG-OurProjectsItem";
import GgButton from "@/components/UI/GG-Button";
export default {
  name: "gg-our-projects",
  components: {GgButton, GgOurProjectsItem},
  data() {
    return {
      ourProjectItems: [
        {
          id: 1,
          img: "kv1.png",
          title: "Квартира на Академической",
          subtitle: "Стиль - Лофт",
          width: "130 м2"
        },
        {
          id: 2,
          img: "kv2.png",
          title: "Квартира на Рижской",
          subtitle: "Стиль - Скандинавский",
          width: "94 м2"
        },
        {
          id: 3,
          img: "kv3.png",
          title: "Квартира на Чистых прудах",
          subtitle: "Стиль  Лофт",
          width: "68 м2"
        },
        {
          id: 4,
          img: "kv4.png",
          title: "Квартира на Рижской",
          subtitle: "Стиль - Скандинавский",
          width: "94 м2"
        },        {
          id: 5,
          img: "kv5.png",
          title: "Квартира на Чистых прудах",
          subtitle: "Стиль - Лофт",
          width: "85 м2"
        },
        {
          id: 6,
          img: "kv6.png",
          title: "Квартира на Академической",
          subtitle: "В стиле Лофт",
          width: "108 м2"
        },
      ]
    }
  },
}
</script>

<style lang="scss">
.projects__wrapper {
  margin-bottom: 75px;
  .projects__content {
    &__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 56px 84px 52px 56px;
    }
    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        display: flex;
        column-gap: 20px;
        align-items: center;
      }
    }
  }
}
</style>