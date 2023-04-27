<template>
  <div class="calc__one__window">
    <div class="calc__one__window-title">

      <span>Калькулятор ремонта</span>

    </div>

    <div class="calc__one__window__style">
      <div
        class="calc__one__window__style-img"
        v-for="(img, index) in getCalcData"
        :key="index"
      >

        <img
          :src="require('@/assets/images/calcImg/' + img.image)"
          @click="selectedImage(img)"
          @error="console.log(img.image)"
        />

        <div class="calc__one__window__style-img-name">
          {{ img.name }}
        </div>
      </div>
    </div>

    <div class="calc__one__window__price">
      <span v-if="getCost <= 0">Стоимость ремонта: 0 руб.</span>
      <span v-else>Стоимость ремонта: {{ getCost }} руб.</span>

      <GGButton id="black-button"><span>Далее</span></GGButton>
    </div>

  </div>
</template>

<script>
import GGButton from "@/components/UI/GG-Button";
import { mapGetters } from "vuex";

export default {
  name: "GG-CalcFirstWindow",
  components: {
    GGButton,
  },
  computed: {
    ...mapGetters([
      'getCalcData', 'getCost'
    ])
  },
  methods: {
    selectedImage(img) {
      this.$store.commit('UPDATE_CALC_DATA', img);
    },
  }
};
</script>

<style lang="scss">
.calc__one__window {
  //position: fixed;
  //top: 0;
  //left: 0;
  width: 100%;
  height: 100%;
  padding: 34px 103px;
  &-title {
    font-size: $subtitle-font-size;
    line-height: $title-second-line-height;
    margin-bottom: 54px;
  }
  &__style {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 100px;
    row-gap: 65px;
    &-img {
      position: relative;
      &-name {
        margin-top: 20px;
        font-weight: $font-weight-300;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
      }
    }
    &-img:before {
      content: "";
      position: absolute;
      top: 0px;
      left: -20px;
      right: -20px;
      bottom: 25px;
      border: 20px solid transparent;
      z-index: 1;
      pointer-events: none;
    }
    &-img:hover:before {
      border-color: $yellow-color;
    }
  }
}
</style>
