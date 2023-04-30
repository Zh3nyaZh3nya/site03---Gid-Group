<template>
    <GGCalcOneWindow
        v-if="visibleCalc === true"
        @nextWindow="nextWindow"
        @closedCalc="closedCalc"
        :secondWindow="currentWindow"
    />
    <GGCalcSecondWindow
        v-else-if="currentWindow === 'second'"
        @prevWindow="prevWindow"
        @nextWindow="nextWindow"
        @closedCalc="closedCalc"
    />
    <GGCalcThirdWindow
        v-else-if="currentWindow === 'third'"
        @prevWindow="prevWindow"
        @closedCalc="closedCalc"
    />
</template>

<script>
import GGCalcOneWindow from "@/components/GG-CalcFirstWindow";
import GGCalcSecondWindow from "@/components/GG-CalcSecondWindow";
import GGCalcThirdWindow from "@/components/GG-CalcThirdWindow";
import {mapGetters} from "vuex";
export default {
  name: "gg-calc",
  components: {
    GGCalcOneWindow,
    GGCalcSecondWindow,
    GGCalcThirdWindow,
  },
  props: {
    openCalc: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      visibleCalc: this.openCalc,
      currentWindow: "",
    }
  },
  watch: {
    openCalc(newVal) {
      this.visibleCalc = newVal;
    },
  },
  methods: {
    nextWindow() {
      if(this.visibleCalc === true) {
        this.currentWindow = "second";
        this.visibleCalc = "first";
      } else if (this.currentWindow === "second") {
        this.currentWindow = "third"
      }
    },
    prevWindow() {
      if (this.currentWindow === "third") {
        this.currentWindow = "second";
      } else if (this.currentWindow === "second") {
        this.visibleCalc = true;
      }
    },
    closedCalc() {
      this.visibleCalc = false;
      this.currentWindow = "";
      this.$emit("closeCalc")
    }
  },
  computed:{
    ...mapGetters([
        "getSelectItemCalc"
    ])
  }
};
</script>

<style lang="scss">
.calc__closed {
  position: absolute;
  top: 40px;
  right: 60px;
  z-index: $z-index-popup + 1;
  &-btn {
    button{
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
}
.сalc-btn-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 34px;
  font-size: $subtitle-font-size;
  max-width: 1840px;
  width: 100%;
  line-height: $title-second-line-height;
}

</style>
