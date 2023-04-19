import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import LogIn from './components/LogIn.vue'

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: '/',
  },
  {
    name: "SignUp",
    component: SignUp,
    path: '/sign-up',
  },
  {
    name: "LogIn",
    component: LogIn,
    path: '/sign-in',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
