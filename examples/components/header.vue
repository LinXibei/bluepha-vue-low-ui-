<template>
  <div class="header">
    <div class="logo-container">
      <img src="../assets/logo-base.png" />
      <h1>Bluepha UI</h1>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class MainHeader extends Vue {
  isComponent = true;
}
</script>
<style lang="postcss" scoped>
.header{
  height: 80px;
  background-color: #fff;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 100;
  position: relative;
  border-bottom: 1px solid #eee;
}
.logo-container{
  position: relative;
  display: flex;
  & img{
    height: 60px;
    padding-top: 10px;
  }
  & h1{
    color: #147bd1;
    position: absolute;
    left: 120px;
    top: 2px;
    font-size: 40px;
    margin: 0;
  }
}
</style>