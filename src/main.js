import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";
import { router } from './router/router';
import { initializeApp } from "firebase/app";
import VSpoiler from 'v-spoiler';
import 'v-spoiler/dist/v-spoiler.css';
import Spoiler from './components/Spoiler.vue'



const firebaseConfig = {
    apiKey: "AIzaSyCOisivOKL63UbIe32lne_Edr-3Q9KOMHo",
    authDomain: "nookure-582c9.firebaseapp.com",
    projectId: "nookure-582c9",
    storageBucket: "nookure-582c9.appspot.com",
    messagingSenderId: "682070325201",
    appId: "1:682070325201:web:cbd59ff0623a4919c392f0",
    measurementId: "G-28GQ2MMQ9B"
};
const firebaseApp = initializeApp(firebaseConfig);
const app = createApp(App)
app.use(router)
app.component('VSpoiler', VSpoiler);
app.mount('#app')
app.component('Spoiler', Spoiler);
export { firebaseApp };
