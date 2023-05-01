<template>
  <GGHeader />
  <div class="mainPages">
    <gg-company-achievements />
    <gg-project-cost />
    <gg-basic-services />
    <gg-our-projects />
    <gg-ordering-process />
  </div>
</template>

<script>
import GGHeader from "@/components/UI/GG-Header";
import GgCompanyAchievements from "@/components/GG-CompanyAchievements";
import GgProjectCost from "@/components/GG-ProjectCost";
import GgBasicServices from "@/components/GG-BasicServices";
import GgOurProjects from "@/components/GG-OurProjects";
import GgOrderingProcess from "@/components/GG-OrderingProcess";
export default {
  components: {
    GgOrderingProcess,
    GgProjectCost,
    GgCompanyAchievements,
    GgOurProjects,
    GgBasicServices,
    GGHeader,
  },
};
</script>

<style lang="scss">
.mainPages {
  max-width: 1840px;
  width: 100%;
  margin: 0 auto;
}
.title-line {
  position: absolute;
  left: -20px;
}
</style>
