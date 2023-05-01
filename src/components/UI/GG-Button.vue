<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "gg-button",
};
</script>

<style lang="scss">
.btn {
  width: 350px;
  padding: 25px 0px;
  display: flex;
  justify-content: center;
  align-self: center;
  background: rgba(17, 17, 17, 0.6);
  border: 1px solid #c4c4c4;
  & span {
    color: $white-primary-color;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
  }
}

#yellow-button {
  background: $yellow-color;
  width: 620px;
  & span {
    color: $black-color;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
  }
}
#black-button {
  background: $black-color;
}
#white-button {
  background: none;
  span {
    color: #000;
  }
}
</style>
