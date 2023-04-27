<template>
  <div class="popup__phone__wrapper" ref="popup__phone__wrapper">
    <div class="popup__phone__body">
      <div class="popup__phone__body-icon">

        <button @click="toClosePopupPhone">
          <i class="material-icons">close</i>
        </button>

      </div>
      <div class="popup__phone__body-title">

        <span>Обратный звонок</span>

      </div>
      <form action="#" @submit="checkForm">
        <div class="popup__phone__body-form">

          <span v-show="error" class="input-failed">Введите имя</span>
          <input type="text" placeholder="Ваше имя" v-model="name" />

          <span v-show="error" class="input-failed">Введите номер</span>
          <input type="number" placeholder="Номер телефона" v-model="phone" />

          <GGButton id="yellow-button">
            <span>Позвонить мне</span>
          </GGButton>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
import GGButton from "@/components/UI/GG-Button";
export default {
  name: "gg-phone-popup",
  components: {
    GGButton,
  },
  data() {
    return {
      name: "",
      phone: "",
      error: false,
    };
  },
  methods: {
    checkForm(event) {
      if (this.name === "" || this.phone === "") {
        this.error = true;
      } else {
        this.name = "";
        this.phone = "";
        this.$emit("closePopupPhone");
      }
      event.preventDefault();
    },
    toClosePopupPhone() {
      this.$emit("toClosePopupPhone");
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", (item) => {
      if (item.target === vm.$refs["popup__phone__wrapper"]) {
        vm.toClosePopupPhone();
      }
    });
  },
};
</script>

<style lang="scss">
.popup__phone__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(46, 46, 46, 0.6);
  z-index: $z-index-popup;
  .popup__phone__body {
    position: relative;
    max-width: 1092px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    padding: 127px 230px;
    background: rgba(255, 255, 255, 0.95);
    &-icon {
      position: absolute;
      top: 45px;
      right: 45px;
    }
    &-title {
      text-align: center;
      font-weight: 400;
      font-size: 28px;
      line-height: 33px;
      margin-bottom: 45px;
    }
    &-form {
      display: grid;
      input {
        margin-bottom: 20px;
        border: 2px solid $black-color;
        padding: 26px 0 26px 35px;
      }
      span {
        color: $red-color;
        margin-bottom: 10px;
        padding-left: 35px;
      }
    }
  }
}
</style>
