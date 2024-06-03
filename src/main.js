import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import '@/assets/style.css';

import CanvasJSChart from '@canvasjs/vue-charts';


const app = createApp(App);

app.use(router);
app.use(store);
app.use(CanvasJSChart);
app.mount('#app');
