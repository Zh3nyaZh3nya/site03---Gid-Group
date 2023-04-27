<template>
  <div class="burger__menu">
    <ul class="burger__ul">
      <li v-for="link in burger_link" :key="link.id">
        <router-link :to="link.routerLink">
          {{ link.link }}
        </router-link>
      </li>
    </ul>
    <ul class="burger__img">
      <li v-for="icon in imgIcon_link" :key="icon.id">
        <a :href="icon.link">
          <img :src="require('@/assets/images/svgIcon/' + icon.svg)" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GG-BurgerMenu.vue",
  props: {
    burger_link: {
      type: Object,
      default: () => {},
    },
    imgIcon_link: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.burger__menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(18 18 18 / 95%);
  padding-top: 150px;
  .burger__ul {
    margin-top: 30px;
    display: grid;
    & li {
      margin-bottom: 30px;
      display: inline-block;
      color: $dark-grey-primary-color;
      font-size: 40px;
      line-height: 40px;
      :hover {
        color: $white-second-color;
        display: inline-block;
        padding: 20px 75px;
        border: 1px solid $white-second-color;
      }
    }
  }
  .burger__img {
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: 80px;
    column-gap: 65px;
  }
}
</style>
