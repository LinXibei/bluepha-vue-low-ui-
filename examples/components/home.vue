<template>
  <div>
    This is home !!
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "Home"
})
export default class Home extends Vue {
  isComponent = true;
  created() {
    console.log("Home!!!");
  }
}
</script>