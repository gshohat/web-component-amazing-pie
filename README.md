# Web Component Amazing Pie

![NPM License](https://img.shields.io/npm/l/web-component-amazing-pie)

**Lightweight** animated pie chart **< 10k** 😎 <br>
Compatible with React, Vue, Angular & other frameworks.
Add your title with a slot element.
Customizable slice size, color & description. 

![amazing-pie](https://private-user-images.githubusercontent.com/91323932/288364182-ca32409a-fe0d-4a50-acbb-adb7ec70f196.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE4NTY1NTcsIm5iZiI6MTcwMTg1NjI1NywicGF0aCI6Ii85MTMyMzkzMi8yODgzNjQxODItY2EzMjQwOWEtZmUwZC00YTUwLWFjYmItYWRiN2VjNzBmMTk2LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA2VDA5NTA1N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMyZjU2MzJhYTI5NzQ2ZGNhYWZiYjY5MmU3MzU3NmJhMmY0MWM4MWM1ZjNmOWIzZWFiYTljOTA3MjUxODkyYjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.y5wt-Dz_xKsM0OGGqfa9yS5DQveboZX5dJk4JJDFOGk)

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
