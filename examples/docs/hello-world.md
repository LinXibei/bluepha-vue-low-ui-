## HelloWorld


### 基础用法

:::demo HelloWorld是一个测试组件. `header`.

```html
<template>
  <BlHelloWorld class="box-card">
  </BlHelloWorld>
</template>
<script>
  export default {
    data() {
      return {
        title: "Hello Bluepha",
      }
    }
  }
</script>

```
:::

### Simple card

这是一个测试组件

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| header | title of the card. Also accepts a DOM passed by `slot#header` | string| — | — |
| body-style | CSS style of body | object| — | { padding: '20px' } |
| shadow | when to show card shadows | string | always / hover / never | always |
