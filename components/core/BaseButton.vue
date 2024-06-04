<template>
  <div>
    <a class="base-btn _styles">
      <slot></slot>
    </a>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  width: number;
  bgColor: String;
  color: String;
  hover: String;
  span: String;
  height: number;
}>();
</script>
<style scoped lang="scss">
$background: #fafbff;
$border-radius: 5px;
.base-btn {
  cursor: pointer;
  display: flex;
  width: v-bind("props.width + 'px'");
  height: v-bind("props.height + 'px'");
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  line-height: 35px;
  text-align: center;
  font-size: 16px;
  color: v-bind("props.color");
  text-decoration: none;
  transition: all 0.35s;
  box-sizing: border-box;
  &:hover {
    color: v-bind("props.span");
    z-index: 99999;
  }
}
._styles {
  font-family: "TT Runs Trial", sans-serif;
  text-transform: uppercase;
  position: relative;
  background-color: v-bind("props.bgColor");
  color: v-bind("props.color");
  overflow: hidden;
  span {
    color: v-bind("props.span");

    position: relative;
    z-index: 9999999999;
  }
  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    background-color: v-bind("props.hover");
    transition: all 0.25s;
    z-index: 1;
  }
  &::before {
    top: 0;
    transform: translate(-100%, 0);
  }
  &::after {
    bottom: 0;
    transform: translate(100%, 0);
  }
  &:hover {
    span {
      color: var(v-bind("props.span"));
      z-index: 999999;
    }
    &::before,
    &::after {
      transform: translate(0, 0);
    }
  }
}
</style>
