import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/tailwind.css";
import axios from "axios";
import moment from "moment";
import router from "./router/router";
import { SetupCalendar, Calendar, DatePicker } from "v-calendar";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

axios.defaults.baseURL = "https://api.jobboard.tedbree.com/v1/";
axios.defaults.withCredentials = false;

// createApp(App).use(router).mount("#app");
const app = createApp(App);
app.config.globalProperties.$moment = moment;
app.use(router);
app.use(SetupCalendar, {});
app.component("Calendar", Calendar);
app.component("DatePicker", DatePicker);
app.mount("#app");
