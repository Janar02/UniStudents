import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import "virtual:windi.css";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import router from "@/router";

const app = createApp(App);
app.use(createPinia());
app.use(PrimeVue);
app.use(router);
app.mount("#app");
