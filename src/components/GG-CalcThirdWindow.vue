<template>
  <div class="calc__third">
    <div class="calc__third__window">
      <div class="calc__third__window-title" @click="prevWindow">
        <img src="@/assets/images/svgIcon/Arrow.svg" />
        <span>Назад к параметрам</span>
      </div>
      <div class="calc__closed">
        <div class="calc__closed-btn">
          <button @click="closedBtn"><img src="@/assets/images/svgIcon/closedCalc.svg" alt="" /></button>
        </div>
      </div>
      <div class="calc__third__window__wrapper-title">
        <span>Дополнительные опции</span>
      </div>
      <div class="calc__third__window__column">
        <div class="calc__third__window__wrapper">
          <div class="calc__third__window__wrapper__options">
            <div
                class="calc__third__window__wrapper__options__option"
                v-for="option in getAdditionalOption"
                :key="option.id"
            >
              <div class="calc__third__window__wrapper__options__option-checkbox">
                <input
                    type="checkbox"
                    class="custom-checkbox"
                    v-model="selectedInput"
                    :value="option.priceOption"
                >
                <span>{{ option.nameOption }}</span>
              </div>
              <div class="calc__third__window__wrapper__options__option-price">
                <span>{{ option.priceOption }} руб</span>
              </div>
            </div>
          </div>
        </div>
        <div class="calc__third__window__message">
          <span>Тёплый пол на кухне, дополнительный санузел, шторы на окна и другие опции вы сможете выбрать у нас в офисе</span>
        </div>
      </div>
    </div>
    <div class="сalc-btn-price btn-calc">
      <span>Стоимость ремонта: {{ totalSum }} руб.</span>
      <div class="calc__one__window__price-btn">
        <button
            v-show="selectedInput.length"
            class="reset-btn"
            @click="resetInput"
        >
          <span>сбросить все</span>
          <img src="@/assets/images/svgIcon/Reset.svg" alt="" />
        </button>
        <GGButton id="black-button"><span>Оставить заявку</span></GGButton>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import GGButton from "@/components/UI/GG-Button";
export default {
  name: "GG-CalcThirdWindow",
  components: {
    GGButton
  },
  data() {
    return {
      selectedInput: [],
    }
  },
  methods: {
    prevWindow() {
      this.selectedInput = [];
      this.$emit("prevWindow", "second");
    },
    resetInput() {
      this.selectedInput = [];
    },
    closedBtn() {
      this.$emit("closedCalc")
    }
  },
  computed: {
    ...mapGetters([
        'getAdditionalOption',
        "getCost"
    ]),
    totalSum() {
      const a = this.selectedInput.reduce((obj, value) => obj + value, 0);
      return a + this.getCost;
    }
  }
}
</script>

<style lang="scss">
.calc__third {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: $white-fourth-color;
  z-index: $z-index-popup;
}
.calc__third__window {
  padding: 34px 103px;
  &-title {
    display: flex;
    column-gap: 30px;
    margin-bottom: 55px;
    cursor: pointer;
    span {
      font-size: $subtitle-font-size;
      line-height: $title-second-line-height;
    }
  }
  &__column {
    display: grid;
    grid-template-columns: 1024px 512px;
    column-gap: 100px;
  }
  &__wrapper {
    &-title {
      margin-bottom: 10px;
      span {
        font-weight: $font-weight-300;
        font-size: $subtitle-second-font-size;
        line-height: $subtitle-second-line-height;
      }
    }
    &__options {
      border: 1px solid $white-third-color;
      max-height: 495px;
      overflow-y: scroll;
      padding: 10px;
      &__option {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        &-checkbox {
          display: flex;
          align-items: center;
          column-gap: 15px;
          span {
            font-weight: $font-weight-300;
            font-size: 18px;
            line-height: 21px;
          }
        }
        &-price {
          span {
            font-weight: $font-weight-500;
            font-size: 18px;
            line-height: 21px;
          }
        }
      }
    }
  }
  &__message {
    span {
      font-weight: $font-weight-300;
      font-size: $subtitle-second-font-size;
      line-height: $title-second-line-height;
    }
  }
}
</style>