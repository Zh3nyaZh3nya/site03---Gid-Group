<template>
  <section class="services__wrapper">
    <div class="services__content">
      <div class="services__content-title">
        <h2>ОСНОВНЫЕ УСЛУГИ</h2>
        <div class="title-line">
          <img src="@/assets/images/svgIcon/line.svg" alt=""/>
        </div>
      </div>
      <div class="services__content__items">
        <div class="services__content__items-item">
          <gg-basic-services-item :basicServicesItem="basicServices" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GgBasicServicesItem from "@/components/GG-BasicServicesItem";
export default {
  name: "gg-basic-services",
  components: {GgBasicServicesItem},
  data() {
    return {
      basicServices: [
        {
          id: 1,
          img: "design.png",
          title: "3D-дизайн",
          subtitle: "Идейные соображения высшего порядка, а также внедрение современных методик обеспечивает актуальность глубокомысленных рассуждений.",
        },
        {
          id: 2,
          img: "repair.png",
          title: "Ремонт",
          subtitle: "Мы вынуждены отталкиваться от того, что глубокий уровень погружения допускает внедрение своевременного выполнения сверхзадачи.",
        },
        {
          id: 3,
          img: "construction.png",
          title: "Строительство",
          subtitle: "Мы вынуждены отталкиваться от того, что глубокий уровень погружения допускает внедрение своевременного выполнения сверхзадачи.",
        },
        {
          id: 4,
          img: "landscape.png",
          title: "Ландшафтный дизайн",
          subtitle: "Идейные соображения высшего порядка обеспечивает актуальность глубокомысленных рассуждений. ",
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.services__wrapper {
  margin-bottom: 49px;
  .services__content {
    &-title {
      position: relative;
    }
    &__items {
      padding: 52px 86px;
      &-item {
        display: flex;
      }
    }
  }
}
</style>