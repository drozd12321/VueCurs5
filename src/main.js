import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import alertplugin from "./plugin/alertplugin";
const app = createApp(App);
app.use(alertplugin);
app.mount("#app");
