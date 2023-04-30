<template>
  <div class="calc__one__window">
    <div class="calc__one__window-title">
      <span>Калькулятор ремонта</span>
    </div>
    <div class="calc__closed">
      <div class="calc__closed-btn">
        <button @click="closedBtn"><img src="@/assets/images/svgIcon/closedCalc.svg" alt="" /></button>
      </div>
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
    <div class="error" v-show="this.error">
      <span>Выберите квартиру</span>
    </div>
    <div class="сalc-btn-price btn-calc">
      <span v-if="getCost <= 0">Стоимость ремонта: 0 руб.</span>
      <span v-else>Стоимость ремонта: {{ getCost }} руб.</span>

      <GGButton id="black-button" @click="nextWindow"><span>Далее</span></GGButton>
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
  data() {
    return {
      secondWindow: "second",
      error: false,
    }
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
    nextWindow() {
      if(this.getCost === 0) {
        this.error = true;
      } else {
        this.$emit("nextWindow", this.secondWindow)
      }
    },
    closedBtn() {
      this.$emit("closedCalc")
    }
  }
};
</script>

<style lang="scss">
.calc__one__window {
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: $white-fourth-color;
  z-index: $z-index-popup;
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
    row-gap: 35px;
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
