<template>
  <GGHeader />
  <div class="mainPages">

    <GGCompanyAchievements />

    <GGProjectCost />

    <GGCalc />

  </div>
</template>

<script>
import GGHeader from "@/components/UI/GG-Header";
import GGCompanyAchievements from "@/components/GG-CompanyAchievements";
import GGProjectCost from "@/components/GG-ProjectCost";
import GGCalc from "@/components/GG-Calc";
export default {
  components: {
    GGHeader,
    GGCompanyAchievements,
    GGProjectCost,
    GGCalc,
  },
};
</script>

<style lang="scss">
.mainPages {
  max-width: 1840px;
  width: 100%;
  margin: 0 auto;
}
</style>
