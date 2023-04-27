<template>
  <div class="achievements">
    <div v-for="achievement in achievementsCompany" :key="achievement.id">
      <GGCompanyAchievementsItem :achievements_item="achievement" />
    </div>
  </div>
</template>

<script>
import GGCompanyAchievementsItem from "@/components/GG-CompanyAchievementsItem";
export default {
  name: "GG-Company achievements",
  components: {
    GGCompanyAchievementsItem,
  },
  data() {
    return {
      achievementsCompany: [
        {
          id: 1,
          title: "100+",
          subtitle: "Реализованные проекты",
          info: "Работаем с любой недвижимостью – от дворцов до квартир",
        },
        {
          id: 2,
          title: "10 лет",
          subtitle: "Безупречная репутация",
          info: "Наши специалисты постоянно стажируются у лидеров строительных работ",
        },
        {
          id: 3,
          title: "3 года",
          subtitle: "Гарантии на все работы",
          info: "Мы внимательно изучаем рынок отделочных материалов и инновационной техники",
        },
        {
          id: 4,
          title: "Сроки",
          subtitle: "Процесс",
          info: "Нужно лучшее – закажи это у лучших!",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.achievements {
  background: $white-second-color;
  display: flex;
  column-gap: 80px;
  padding: 38px 108px 20px 108px;
  margin-bottom: 92px;
}
</style>
