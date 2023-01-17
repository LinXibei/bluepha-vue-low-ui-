## HelloWorld
Integrate information in a card container.

### Basic usage

Card includes title, content and operations.

:::demo Card is made up of `header` and `body`. `header` is optional, and its content distribution depends on a named slot.

```html
<template>
  <BlHelloWorld class="box-card">
  </BlHelloWorld>
</template>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### Simple card

The header part can be omitted.


### Shadow

You can define when to show the card shadows

:::demo The `shadow` attribute determines when the card shadows are displayed. It can be `always`, `hover` or `never`.
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| header | title of the card. Also accepts a DOM passed by `slot#header` | string| — | — |
| body-style | CSS style of body | object| — | { padding: '20px' } |
| shadow | when to show card shadows | string | always / hover / never | always |
