import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "virtual:windi.css";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

createApp(App).use(PrimeVue);

createApp(App).mount("#app");
