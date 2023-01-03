<template>
  <header>
    <img alt="Vue logo" class="logo" src="./logo.svg" width="125" height="125" />
    {{count + 3}}
    <div class="wrapper">
      <BlHelloWorld msg="You did it!" />
    </div>
  </header>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  count = 4;
  created() {
    console.log("hello world1");
  }
}
</script>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
