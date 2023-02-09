<template>
  <div class="side-nav">
    <ul>
      <li
        class="nav-item"
        v-for="(item, key) in data"
        :key="key">
        <a v-if="!item.path" @click="expandMenu">{{item.name}}</a>
        <router-link
          v-if="item.path"
          active-class="active"
          :to="item.path"
          exact
          v-text="item.title || item.name">
        </router-link>
        <ul class="pure-menu-list sub-nav" v-if="item.list">
          <li
            class="nav-item"
            v-for="(navItem, key) in item.list"
            :key="key">
            <router-link
              class=""
              active-class="active"
              :to="navItem.path"
              exact
              v-text="navItem.title || navItem.name">
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { NavJson } from "../nav";
interface ListInter {
    path?: string;
    title?: string;
    name: string;
    description?: string;
}
@Component
export default class MainNav extends Vue {
  count = 4;
  data: ListInter[] = [];
  created() {
    for (const item of NavJson) {
      this.data.push({ ...item });
    }
  }
  expandMenu(event: any) {
    let target = event.currentTarget;
    if (!target.nextElementSibling || target.nextElementSibling.tagName !== "UL") return;
    this.hideAllMenu();
    event.currentTarget.nextElementSibling.style.height = "auto";
  }
  hideAllMenu() {
    [].forEach.call(this.$el.querySelectorAll(".pure-menu-list"), (ul: any) => {
      ul["style"]["height"] = "0";
    });
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