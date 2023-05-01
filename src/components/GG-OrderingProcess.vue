<template>
  <section class="process__wrapper">
    <div class="process__content">
      <div class="process__content-title">
        <h2>6 ЭТАПОВ ОТ ЗАЯВКИ ДО <br /> СДАЧИ ГОТОВОГО ОБЪЕКТА</h2>
        <div class="title-line">
          <img src="@/assets/images/svgIcon/line.svg" alt=""/>
        </div>
      </div>
      <div class="process__content__items">
        <gg-ordering-process-item :orderingProcessItem="orderingProcessItems" />
        <div class="process__content__items-button">
          <gg-button id="white-button"><span>Начать</span><img src="@/assets/images/svgIcon/arrow2.svg" alt=""> </gg-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GgOrderingProcessItem from "@/components/GG-OrderingProcessItem";
import GgButton from "@/components/UI/GG-Button";
export default {
  name: "gg-ordering-process",
  components: {GgButton, GgOrderingProcessItem},
  data() {
    return {
      orderingProcessItems: [
        {
          id: 1,
          img: "mail.svg",
          title: "Заявка",
          subtitle: "Оставляйте заявку на сайте и получите 2 варианта планировки квартиры БЕСПЛАТНО",
          imgInput: "checkbox.svg",
          input: "Оставить заявку",
        },
        {
          id: 2,
          img: "design.svg",
          title: "Заявка",
          subtitle: "Собираете на сайте стиль из четырех готовых решений с возможностью редактирования",
          imgInput: "checkbox.svg",
          input: "Выбрать дизайн",
        },
        {
          id: 3,
          img: "calc.svg",
          title: "Дизайн",
          subtitle: "Расчитываете финальную стоимость ремонта с помощью онлайн-калькулятора",
          imgInput: "checkbox.svg",
          input: "Посчитать",
        },
        {
          id: 4,
          img: "contract.svg",
          title: "Расчет",
          subtitle: "Собираете на сайте стиль из четырех готовых решений с возможностью редактирования",
          imgInput: "checkbox.svg",
          input: "Оставить заявку",
        },
        {
          id: 5,
          img: "repair.svg",
          title: "Договор",
          subtitle: "Собираете на сайте стиль из четырех готовых решений с возможностью редактирования",
          imgInput: "checkbox.svg",
          input: "Оставить заявку",
        },
        {
          id: 6,
          img: "changeObject.svg",
          title: "Ремонт",
          subtitle: "Расчитываете финальную стоимость ремонта с помощью онлайн-калькулятора",
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.process__wrapper{
  .process__content {
    &-title {
      position: relative;
    }
    &__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 82px;
      padding: 101px 175px;
      &-button {
        button {
          display: flex;
          align-items: center;
          column-gap: 20px;
        }
      }
    }
  }
}
</style>