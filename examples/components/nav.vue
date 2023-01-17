<template>
  <div class="side-nav">
    <ul>
      <li
        class="nav-item"
        v-for="(item, key) in data"
        :key="key">
        <a v-if="!item.path && !item.href" @click="expandMenu">{{item.name}}</a>
        <a v-if="item.href" :href="item.href" target="_blank">{{item.name}}</a>
        <router-link
          v-if="item.path"
          active-class="active"
          :to="item.path"
          exact
          v-text="item.title || item.name">
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { NavJson } from "../nav";
interface ListInter {
    path: string;
    title: string;
    name: string;
    description: string;
}
@Component
export default class MainNav extends Vue {
  count = 4;
  data: ListInter[] = [];
  created() {
    const list: ListInter[] = NavJson["list"];
    this.data.splice(0, this.data.length, ...list);
  }
}
</script>
<style lang="postcss" scoped>
.side-nav {
  width: 240px;
  box-sizing: border-box;
  padding-right: 30px;
  transition: opacity .3s;
  & .is-fade{
    transition: opacity 3s;
  }
}
.nav-dropdown-list {
  width: 120px;
  margin-top: -8px;
  & li {
    font-size: 14px;
  }
}
</style>