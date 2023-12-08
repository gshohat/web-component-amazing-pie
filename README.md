# Web Component Amazing Pie

![NPM License](https://img.shields.io/npm/l/web-component-amazing-pie)

**Lightweight** animated pie chart **< 10k** 😎 <br>
Compatible with React, Vue, Angular & other frameworks.
Add your title with a slot element.
Customizable slice size, color & description. 


## Vue usage

![amazing-pie](https://github.com/gshohat/web-component-amazing-pie/assets/91323932/f05b5ccf-62a3-455a-aa35-732b4fddfea7)


`npm i web-component-amazing-pie`

main.js
```
import AmazingPie from "web-component-amazing-pie";

customElements.define('amazing-pie', AmazingPie);
```

App.vue
```
import {onMounted} from 'vue';

onMounted(() => {
  let amazingPieElement = document.querySelector('#amazing-pie');
  amazingPieElement.options = {
    data: [
      { value: 35, description: 'Stocks', color: '#ebd0a4'},
      { value: 25, description: 'Bonds', color: '#a9d1d8'},
      { value: 30, description: 'Cash', color: '#c3d994'},
      { value: 10, description: 'Precious Metals', color: '#fae17c'},
    ],
  }
});

<template>
<amazing-pie id="amazing-pie">
    <div class="title" slot="title">
        Asset Allocation
    </div>
</amazing-pie>
</template
```

vite config:
```
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('amazing-pie')
        }
      }
    })
  ],
```


## Contact
hi@giladshohat.com 💫
