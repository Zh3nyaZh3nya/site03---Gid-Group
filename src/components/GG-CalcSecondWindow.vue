<template>
  <div class="calc__second">
    <div class="calc__second__window">
      <div class="calc__closed">
        <div class="calc__closed-btn">
          <button @click="closedBtn"><img src="@/assets/images/svgIcon/closedCalc.svg" alt="" /></button>
        </div>
      </div>
      <div class="calc__second__window__left__sidebar">
        <div class="calc__second__window__left__sidebar-title" @click="prevWindow">
          <img src="@/assets/images/svgIcon/Arrow.svg" />
          <span>Назад к выбору стиля</span>
        </div>

        <div class="calc__second__window__left__sidebar-img">
          <img :src="require(`@/assets/images/calcImg/${getSelectItemCalc.image}`)" alt="" />
          <span>{{ getSelectItemCalc.name }}</span>
        </div>


        <div class="calc__second__window__left__sidebar-subtitle">
          <span>Введите данные о квартире, чтобы получить точную стоимость ремонта</span>
        </div>

      </div>
      <div class="calc__second__window__center__sidebar">
        <div class="calc__second__window__center__sidebar__inputs">
          <div class="calc__second__window__center__sidebar__inputs-space">

            <span>Площадь</span>
            <input
              type="number"
              placeholder="м2"
              v-model="space"
              ref="spaceInput"
            />
          </div>

          <div class="calc__second__window__center__sidebar__inputs-height">
            <span>Высота потолков</span>
            <input
              type="number"
              placeholder=" м"
              v-model="height"
              ref="heightInput"
            />
          </div>

          <div class="calc__second__window__center__sidebar__inputs-space-bathrooms">
            <span>Пол</span>
            <input
              type="number"
              placeholder=" м2"
              v-model="bathrooms"
              ref="bathroomsInput"
            />
          </div>

        </div>
        <div class="calc__second__window__center__sidebar__checkbox">
          <div class="calc__second__window__center__sidebar__checkbox__decoration-title">
            <span>Отделка стен</span>
          </div>
          <div class="calc__second__window__center__sidebar__checkbox__decoration">

            <div
              class="calc__second__window__center__sidebar__checkbox__decoration__box"
              v-for="(itemInput, index) in getSelectItemCalc.inputsDecor"
              :key="itemInput.id"
              :style="{border: '4px solid' + itemInput.color, }"
            >
              <div
                  class="calc__second__window__center__sidebar__checkbox__decoration__box-input"
              >
                <input
                    type="checkbox"
                    class="custom-checkbox"
                    v-model="selectedCheckboxDecor"
                    :value="itemInput"
                    :disabled="selectedCheckboxDecor.length > 0 && selectedCheckboxDecor.indexOf(itemInput) === -1"
                    :style="{backgroundColor: itemInput.color}"
                />
              </div>
              <span>
                {{ itemInput.nameColor }}
              </span>

            </div>

          </div>

          <div class="calc__second__window__center__sidebar__checkbox__floor-title">
            <span>Пол</span>
          </div>
          <div class="calc__second__window__center__sidebar__checkbox__floor">

            <div
                class="calc__second__window__center__sidebar__checkbox__floor__box"
                v-for="(itemInput, index) in getSelectItemCalc.inputsFloor"
                :key="itemInput.id"
                :style="{border: '4px solid' + itemInput.color, }"
            >
              <div class="calc__second__window__center__sidebar__checkbox__floor__box-input">
                <input
                    type="checkbox"
                    class="custom-checkbox"
                    v-model="selectedCheckboxFloor"
                    :value="itemInput"
                    :disabled="selectedCheckboxFloor.length > 0 && selectedCheckboxFloor.indexOf(itemInput) === -1"
                />
                <span>{{ itemInput.nameColor }}</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div class="calc__second__window__right__sidebar">
        <div class="calc__second__window__right__sidebar-title">
          <span>Остальное</span>
        </div>
        <div class="calc__second__window__right__sidebar__wrapper">
          <div
              class="calc__second__window__right__sidebar__wrapper__other"
              v-for="(otherItem, index) in getOthers"
              :key="otherItem.id"
          >
            <div class="calc__second__window__right__sidebar__wrapper__other-title">
              <span>{{otherItem.titleOthers}}</span>
            </div>
            <div
                class="calc__second__window__right__sidebar__wrapper__other__body"
                v-for="item in otherItem.bodyOthers"
                :key="item.id"
            >
              <div class="calc__second__window__right__sidebar__wrapper__other__body-img">
                <img :src="require('@/assets/images/calcImg/' + item.image)" alt="">
              </div>
              <div class="calc__second__window__right__sidebar__wrapper__other__body-title">
                <span>{{item.imageTitle}}</span>
              </div>
              <div class="calc__second__window__right__sidebar__wrapper__other__body__bottom">
                <div class="calc__second__window__right__sidebar__wrapper__other__body__button">
                  <div class="calc__second__window__right__sidebar__wrapper__other__body__button-title">
                    <span>{{ item.inputTitle }}</span>
                  </div>
                  <div
                      class="calc__second__window__right__sidebar__wrapper__other__body__button-btn"
                      v-for="(btn, index) in item.button"
                      :key="index"
                  >
                    <button
                        class="btnOther"
                        :class="{ selectedBtn: btn === selectedBtn }"
                        :style="{backgroundColor: selectedBtn}"
                        @click="activeButton(btn)">
                      <span>
                        {{ btn.nameBtn }}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="сalc-btn-price btn-calc">
      <span>Стоимость ремонта: {{ sumTotal }} руб.</span>
      <div class="calc__one__window__price-btn">
        <button
            v-show="space > 0 || height > 0 || bathrooms > 0
            || checkBox.length || selectedCheckboxFloor.length || selectedCheckboxDecor.length || Object.keys(selectedBtn).length "
            class="reset-btn"
            @click="reset"
        >
          <span>сбросить все</span>
          <img src="@/assets/images/svgIcon/Reset.svg" alt="" />
        </button>
        <GGButton id="black-button" @click="nextWindow"><span>Далее</span></GGButton>
      </div>
    </div>
  </div>
</template>

<script>
import GGButton from "@/components/UI/GG-Button";
import {mapGetters, mapActions} from "vuex";
export default {
  name: "gg-calc-second-window",
  components: {
    GGButton
  },
  data() {
    return {
      space: "",
      height: "",
      bathrooms: "",
      checkBox: [],
      selectedCheckboxDecor: [],
      selectedCheckboxFloor: [],
      selectedBtn: [],
    };
  },
  methods: {
    updatePlaceholder() {
      const placeholderSquare = `0 ${this.space} м2`;
      const placeholderBathrooms = `0 ${this.bathrooms} м2`;
      const placeholderHeight = `0 ${this.height} м`;
      this.$refs.spaceInput.placeholder = placeholderSquare;
      this.$refs.heightInput.placeholder = placeholderHeight;
      this.$refs.bathroomsInput.placeholder = placeholderBathrooms;
    },
    activeButton(btn) {
      this.selectedBtn = btn;
    },
    nextWindow() {
      this.$emit("nextWindow", "third")
    },
    prevWindow() {
      this.selectedCheckboxDecor = [];
      this.selectedCheckboxFloor = [];
      this.spaceInput = 0;
      this.heightInput = 0;
      this.bathroomsInput = 0;
      this.selectedBtn = [];
      this.$emit("prevWindow", "first")
    },
    reset() {
      const placeholderSquare = `0 ${this.space = ""} м2`;
      const placeholderBathrooms = `0 ${this.bathrooms = ""} м2`;
      const placeholderHeight = `0 ${this.height = ""} м`;
      this.$refs.spaceInput.placeholder = placeholderSquare;
      this.$refs.heightInput.placeholder = placeholderHeight;
      this.$refs.bathroomsInput.placeholder = placeholderBathrooms;
      this.selectedCheckboxDecor = [];
      this.selectedCheckboxFloor = [];
      this.heightInput = 0;
      this.bathroomsInput = 0;
      this.selectedBtn = [];
    },
    closedBtn() {
      this.$emit("closedCalc")
    }
  },
  mounted() {
    this.updatePlaceholder();
  },
  computed: {
    ...mapGetters([
      'getSelectItemCalc',
      'getCost',
      'getOthers',
    ]),
    sumCheckBox() {
      const checkBoxDoor = this.selectedCheckboxDecor.reduce((obj, value) =>  value.price, 0);
      const checkBoxFloor = this.selectedCheckboxFloor.reduce((obj, value) =>  value.price, 0);
      return checkBoxDoor + checkBoxFloor;
    },
    sumInput() {
      const spaceInput = this.space * 200;
      const heightInput = this.height * 300;
      const bathroomsInput = this.bathrooms * 150;
      return spaceInput + heightInput + bathroomsInput;
    },
    sumBtn() {
      if(Object.keys(this.selectedBtn).length > 0) {
        const btn = this.selectedBtn.price;
        return btn * 5;
      } else {
        return 0;
      }
    },
    sumTotal() {
      const sumTotal = this.getCost + this.sumCheckBox + this.sumInput + this.sumBtn;
      return sumTotal;
    },
  },
};
</script>

<style lang="scss">
.calc__second {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: $white-fourth-color;
  z-index: $z-index-popup;
}
.calc__second__window {
  display: grid;
  grid-template-columns: 600px 500px 430px;
  gap: 50px;
  width: 100%;
  max-height: 100%;
  padding: 34px 103px;
  &__left__sidebar {
    position: relative;
    &-title {
      display: flex;
      position: absolute;
      top: -10px;
      align-items: center;
      column-gap: 30px;
      cursor: pointer;
      span {
        font-size: $subtitle-font-size;
        line-height: $title-second-line-height;
      }
    }
    &-img {
      text-align: center;
      margin-bottom: 45px;
      img {
        margin-top: 40px;
        width: 655px;
        width: 100%;
        height: 450px;
      }
      span {
        font-weight: $font-weight-300;
        font-size: 17px;
        line-height: 21px;
      }
    }
    &-subtitle {
      span{
        font-weight: $font-weight-500;
        font-size: $subtitle-second-font-size - 1px;
        line-height: $subtitle-second-line-height;
      }
    }
  }
  &__center__sidebar__inputs {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 500px;
    span {
      color: $dark-grey-second-color;
      font-weight: $font-weight-300;
      font-size: $subtitle-second-font-size;
      line-height: $subtitle-second-line-height;
      bottom: 20px;
    }
    input {
      padding: 16px 0 16px 30px;
      width: 100%;
      border: 1px solid $white-third-color;
      margin-top: 10px;
      margin-bottom: 25px;
    }
  }
  &__center__sidebar__checkbox {
    max-width: 500px;
    &__decoration {
      border: 1px solid $white-third-color;
      max-height: 150px;
      overflow-y: scroll;
      padding: 10px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 25px;
      &-title {
        font-weight: $font-weight-300;
        font-size: $subtitle-second-font-size;
        line-height: $subtitle-second-line-height;
        margin-bottom: 10px;
      }
      &__box {
        display: flex;
        align-items: center;
        max-width: 230px;
        &-input {
          height: 50px;
        }
        span {
          margin-left: 15px;
        }
      }
    }
    &__floor {
      border: 1px solid $white-third-color;
      max-height: 150px;
      overflow-y: scroll;
      padding: 10px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      &-title {
        font-weight: $font-weight-300;
        font-size: $subtitle-second-font-size;
        line-height: $subtitle-second-line-height;
        margin-bottom: 10px;
      }
      &__box {
        max-width: 230px;
        &-input {
          height: 50px;
          display: flex;
          align-items: center;
        }
        span {
          font-size: 15px;
          line-height: 20px;
          margin-left: 10px;
        }
      }
    }
  }
  &__right__sidebar {
    &-title {
      margin-bottom: 10px;
      span {
        font-weight: $font-weight-300;
        font-size: $subtitle-second-font-size;
        line-height: $subtitle-second-line-height;
      }
    }
    &__wrapper {
      max-height: 730px;
      overflow-y: scroll;
      border: 1px solid $white-third-color;
      padding: 15px;
      &__other {
        margin-bottom: 20px;
        &-title {
          margin-bottom: 10px;
          span {
            font-weight: $font-weight-300;
            font-size: 18px;
            line-height: 21px;
          }
        }
        &__body {
          border: 1px solid $white-third-color;
          padding: 10px;
          margin-bottom: 10px;
          &__bottom {
            display: flex;
            justify-content: space-between;
          }
          &-img {
            margin-bottom: 10px;
          }
          &-title {
            margin-bottom: 10px;
            span {
              font-weight: $font-weight-500;
              font-size: 14px;
              line-height: 16px;
              letter-spacing: 1px;
            }
          }
          &__button {
            display: flex;
            align-items: center;
            column-gap: 12px;
            &-title {
              font-weight: $font-weight-300;
              font-size: 14px;
              line-height: 16px;
            }
            &-btn {
              text-align: center;
              button {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50px;
                height: 30px;
              }
              span {
                font-weight: 300;
                font-size: 14px;
                line-height: 16px;
              }
            }
          }
        }
      }
    }
  }
  .btnOther.selectedBtn {
    background: #BDBDBD;
  }
}
.сalc-btn-price {
  padding: 0 103px;
  .calc__one__window__price-btn {
    display: flex;
    column-gap: 80px;
    .reset-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 20px;
    }
  }
}
</style>
