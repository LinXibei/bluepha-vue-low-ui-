<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <MainHeader />
    <div class="main-cnt">
      <MainNav />
      <router-view class="main-container"></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import MainNav from "./components/nav.vue";
import MainHeader from "./components/header.vue";

@Component({
  components: {
    MainNav,
    MainHeader
  }
})
export default class App extends Vue {
  isComponent = true;
  count = 4;
  created() {
    console.log("hello world1");
  }
}
</script>
<style lang="postcss" scoped>
#app{
  width: 1140px;
  padding: 0;
  margin: 0 auto;
  & .main-cnt{
    display: flex;
  }
  & .main-container{
    width: 100%;
    height: calc(100% - 80px);
    overflow-y: auto;
    &>table{
      order-collapse: collapse;
      width: 100%;
      background-color: #fff;
      font-size: 14px;
      margin-bottom: 45px;
      line-height: 1.5em;
    }
  }
}
</style>
<style lang="postcss">
.main-container{
  width: 100%;
  height: calc(100% - 80px);
  overflow-y: auto;
  &>table{
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 2;
    & th {
      text-align: left;
      white-space: nowrap;
      color: #909399;
      font-weight: 400
    }
    & td {
      color: #606266
    }
    & td,& th {
      border-bottom: 1px solid #dcdfe6;
      padding: 15px;
      max-width: 250px
    }
  }
}
</style>
