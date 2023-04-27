<template>
  <div>
    <GGCalcOneWindow/>
    <GGCalcSecondWindow v-if="Object.keys(getSelectItemCalc).length"/>
  </div>
</template>

<script>
import GGCalcOneWindow from "@/components/GG-CalcFirstWindow";
import GGCalcSecondWindow from "@/components/GG-CalcSecondWindow";
import {mapGetters} from "vuex";
export default {
  name: "GG-Calc",
  components: {
    GGCalcOneWindow,
    GGCalcSecondWindow,
  },
  computed:{
    ...mapGetters([
        "getSelectItemCalc"
    ])

  }
};
</script>

<style lang="scss">
.calc__one__window__price {
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  font-size: $subtitle-font-size;
  line-height: $title-second-line-height;
}
</style>
