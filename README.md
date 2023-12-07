# Web Component Amazing Pie

![NPM License](https://img.shields.io/npm/l/web-component-amazing-pie)

**Lightweight** animated pie chart **< 10k** 😎 <br>
Compatible with React, Vue, Angular & other frameworks.
Add your title with a slot element.
Customizable slice size, color & description. 

![amazing-pie](https://private-user-images.githubusercontent.com/91323932/288644419-b5f2a4d6-85a2-45d6-8c3d-e8d9af2038a2.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE5Mjc5OTIsIm5iZiI6MTcwMTkyNzY5MiwicGF0aCI6Ii85MTMyMzkzMi8yODg2NDQ0MTktYjVmMmE0ZDYtODVhMi00NWQ2LThjM2QtZThkOWFmMjAzOGEyLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA3VDA1NDEzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThmNTgyOGMwZGUyZWRmNzRiNDc0NDQyMGYzMGYwNTdjOWE2NGQ2ZDhmNzhjYzVmOWVmMmZlYzM2MDE1NDcwZTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.fiAF-u55Zff6VSzHpSWCjGmDJYm82w0lgDeC_b-gi7w)

## Vue usage

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
