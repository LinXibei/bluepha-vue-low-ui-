<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    This is footer!!
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class MainFooter extends Vue {
  isComponent = true;
  created() {
    console.log("hello world1");
  }
}
</script>