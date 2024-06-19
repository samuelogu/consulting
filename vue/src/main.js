import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Post from "./pages/Post.vue";
import NewPost from "./pages/NewPost.vue";
import moment from "moment/moment.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/posts/add', component: NewPost },
        { path: '/posts/:id', component: Post },
    ]
});

const app = createApp(App)

app.use(router);
app.config.globalProperties.$filters = {
    dateFormatter(date) {
        return moment(String(date)).format('LLL')
    }
}
app.mount('#app')
