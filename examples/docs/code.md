## 快速上手
将介绍如何在项目中使用Bluepha UI


### 引入Bluepha UI
可以整个引入Bluepha UI，或者按需引入不分组件。

#### 完整引入
在main.ts中使用：

```javascript
import Vue from 'vue';
import BlUI from 'bluepha-vue-low-ui';
import App from './App.vue';

Vue.use(BlUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
以上代码便完成了 Bluepha UI 的引入。

#### 按需引入
在main.ts中使用：

```javascript
import Vue from 'vue';
import { HelloWorld } from 'bluepha-vue-low-ui';
import App from './App.vue';

Vue.use(HelloWorld);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

