<template>
  <header class="header">
    <div class="header__top">
      <div class="header__top__burger">

        <button class="burger" @click="visibleBurgerMenu">
          <span></span>

          <GGBurgerMenu
            :burger_link="burgerLinks"
            :imgIcon_link="imgIcon"
            v-show="visibleBurger"
          />

        </button>

      </div>
      <div class="header__top__logo">

        <img src="@/assets/images/headerImg/logo.svg" />

      </div>
      <div class="header__top__phone">

        <button @click="openPopupPhone">

          <img src="@/assets/images/headerImg/phone.svg" alt="" />

        </button>

        <GGPopupPhone
          v-show="visiblePopup"
          @closePopupPhone="closePopupPhone"
          @toClosePopupPhone="toClosePopupPhone"
        >
        </GGPopupPhone>

      </div>
    </div>
    <div class="header__main">
      <div class="header__main-title">
        <span>Лучшее для лучших</span>
      </div>
      <div class="header__main-button">

        <GGButton><span>Проекты</span></GGButton>

        <GGButton><span>Рассчитать стоимость</span></GGButton>

      </div>
    </div>
  </header>
</template>

<script>
import GGButton from "@/components/UI/GG-Button";
import GGPopupPhone from "@/components/UI/GG-PopupPhone";
import GGBurgerMenu from "@/components/UI/GG-BurgerMenu";
export default {
  name: "gg-header",
  components: {
    GGButton,
    GGPopupPhone,
    GGBurgerMenu,
  },
  data() {
    return {
      visiblePopup: false,
      visibleBurger: false,
      burgerLinks: [
        {
          id: 1,
          link: "Главная",
          routerLink: "/",
        },
        {
          id: 2,
          link: "3D-Дизайн",
          routerLink: "/",
        },
        {
          id: 3,
          link: "Ремонт",
          routerLink: "/",
        },
        {
          id: 4,
          link: "Строительство",
          routerLink: "/",
        },
        {
          id: 5,
          link: "Проекты",
          routerLink: "/",
        },
        {
          id: 6,
          link: "Ландшафтный дизайн",
          routerLink: "/",
        },
      ],
      imgIcon: [
        {
          id: "Telegram",
          link: "https://t.me/youR_eld3R_sist3R",
          svg: "telegram.svg",
        },
        {
          id: "Instagram",
          link: "https://www.instagram.com/vi_che_konch/",
          svg: "Instagram.svg",
        },
        {
          id: "Facebook",
          link: "https://instagram.com/evg3niy_s0s0viashv1l1?igshid=ZDdkNTZiNTM=",
          svg: "Fasebook.svg",
        },
        {
          id: "YouTube",
          link: "https://www.youtube.com/channel/UCH8rVLbvwU0Ii3rhR9KG_GA",
          svg: "YouTube.svg",
        },
        {
          id: "TikTok",
          link: "#",
          svg: "TikTok.svg",
        },
        {
          id: "whatsap",
          link: "#",
          svg: "whatsap.svg",
        },
      ],
    };
  },
  methods: {
    openPopupPhone() {
      this.visiblePopup = true;
    },
    closePopupPhone() {
      this.visiblePopup = false;
    },
    toClosePopupPhone() {
      this.visiblePopup = false;
    },
    visibleBurgerMenu() {
      this.visibleBurger = !this.visibleBurger;
    },
  },
};
</script>

<style lang="scss">
header {
  background: url("@/assets/images/headerImg/backgroundImageHeader.jpg")
    no-repeat;
  background-size: cover;
  .header {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    &__top {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 25px 125px;
      background: rgba(0, 0, 0, 0.4);
      margin-bottom: 310px;
      &__burger {
        .burger {
          display: block;
          position: relative;
          width: 30px;
          height: 20px;
          & button {
            cursor-pointer: none;
          }
          & span {
            background-color: $white-primary-color;
            height: 2px;
            width: 50%;
            top: 9px;
            position: absolute;
            left: 0;
            z-index: $z-index-header;
          }
        }
        .burger:before,
        .burger:after {
          z-index: $z-index-header;
          content: "";
          display: block;
          background-color: $white-primary-color;
          width: 100%;
          height: 2px;
          position: absolute;
        }
        .burger:before {
          top: 0px;
        }
        .burger:after {
          bottom: 0px;
        }
      }
      &__logo {
        z-index: $z-index-header;
        position: absolute;
        left: 45%;
        bottom: -5px;
      }
      &__phone {
        z-index: $z-index-header;
      }
    }
    &__main {
      justify-content: center;
      display: grid;
      &-title {
        color: $white-second-color;
        font-weight: 300;
        font-size: 80px;
        line-height: 94px;
        margin-bottom: 190px;
      }
      &-button {
        display: flex;
        column-gap: 50px;
        margin-bottom: 214px;
        .btn:hover {
          background: rgba(77, 71, 71, 0.6);
        }
      }
    }
  }
}
</style>
