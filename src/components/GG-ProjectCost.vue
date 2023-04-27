<template>
  <div class="project__cost">
    <div class="project__cost__info">

      <div class="project__cost__info-title">
        <h2>СТОИМОСТЬ ПРОЕКТА</h2>
        <img src="@/assets/images/svgIcon/line.svg" alt="" />
      </div>

      <div class="project__cost__info__body">
        <div class="project__cost__info__body__right">
          <div class="project__cost__info__body__right-title">
            <span>Узнайте стоимость дизайн-проекта, ответив на 3 вопроса</span>
          </div>

          <div class="project__cost__info__body__right-subtitle">
            <span>Пройдите короткий тест, узнайте цену, получите консультацию побудущему проекту</span>
          </div>

          <div class="project__cost__info__body__right-btn">
            <GGButton id="black-button"><span>Узнать стоимость</span></GGButton>
          </div>

        </div>
        <div class="project__cost__info__body__left">

          <div class="project__cost__info__body__left-img">
            <img src="@/assets/images/mainImg/ImageCalc.png" alt="" />
          </div>

          <div class="project__cost__info__body__left__bonuses">

            <div class="project__cost__info__body__left__bonuses-title">
              <span>Бонусы:</span>
            </div>

            <div
              class="project__cost__info__body__left__bonuses-bonus"
              v-for="bonus in projectBonuses"
              :key="bonus.id"
            >
              <img :src="require('@/assets/images/svgIcon/' + bonus.img)" />
              <span>{{ bonus.bonus }}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GGButton from "@/components/UI/GG-Button";
export default {
  name: "GG-ProjectCost",
  components: {
    GGButton,
  },
  data() {
    return {
      projectBonuses: [
        {
          id: 1,
          img: "square.svg",
          bonus: "чек листы на 5 ошибок в строительстве",
        },
        {
          id: 2,
          img: "square.svg",
          bonus: "5 трендов 2021 года на дизайн интерьеров",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.project__cost {
  position: relative;
  &__info {
    &-title {
      margin-bottom: 80px;
      h2 {
        margin-bottom: 20px;
      }
      img {
        position: absolute;
        left: -12px;
      }
    }
    &__body {
      max-width: 1600px;
      width: 100%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 50px;
      &__right {
        &-title {
          font-weight: $font-weight-400;
          font-size: $title-font-size;
          line-height: $title-line-height;
          margin-bottom: 48px;
        }
        &-subtitle {
          font-size: $subtitle-font-size;
          line-height: $subtitle-line-height;
          margin-bottom: 155px;
          span {
            font-weight: $font-weight-300;
          }
        }
      }
      &__left {
        &__bonuses {
          margin-top: 34px;
          padding-left: 77px;
          &-title {
            font-size: $subtitle-font-size;
            line-height: 147.19%;
          }
          &-bonus {
            max-width: 500px;
            img {
              display: inline-block;
            }
            span {
              font-weight: $font-weight-300;
              font-size: $subtitle-font-size;
              line-height: 147.19%;
              padding-left: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
