import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import alertplugin from "./plugin/alertplugin";
const ru = {
  app: {
    title: "Как работают плагины",
    changeBtn: "Переключить язык",
  },
};
const en = {
  app: {
    title: "How plugin VUE",
    changeBtn: "Toggle LANG",
  },
};
const app = createApp(App);
app.use(alertplugin, { ru, en });
app.mount("#app");
