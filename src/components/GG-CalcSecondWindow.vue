<template>
  <div class="calc__second__window">
    <div class="calc__second__window__left__sidebar">
      <div class="calc__second__window__left__sidebar-title">
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
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "GG-CalcSecondWindow",
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
    }
  },
  mounted() {
    this.updatePlaceholder();
  },
  computed: {
    ...mapGetters([
      'getSelectItemCalc',
      'getCost',
      'getOthers'
    ])
  },
  watch: {
    space() {
      this.updatePlaceholder();
    },
  },
};
</script>

<style lang="scss">
.calc__second__window {
  display: grid;
  grid-template-columns: 600px 500px 430px;
  gap: 50px;
  width: 100%;
  height: 100%;
  padding: 34px 103px;
  &__left__sidebar {
    &-title {
      display: flex;
      align-items: center;
      span {
        font-size: $subtitle-font-size;
        line-height: $title-second-line-height;
      }
    }
    &-subtitle {
      font-weight: $font-weight-500;
      font-size: $subtitle-second-font-size;
      line-height: $subtitle-second-line-height;
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
</style>
