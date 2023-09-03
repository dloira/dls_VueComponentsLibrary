import { createApp } from "vue";
import App from "./App.vue";

import dls_library from "dls_vue-components-library";
import "dls_vue-components-library/dist/style.css";

import router from "./router";
import store from "./store";
import "./style.css";

import * as filters from './filters'


const app = createApp(App);
app.use(router).use(store).use(dls_library).mount("#app");

app.config.globalProperties.$filters = filters
