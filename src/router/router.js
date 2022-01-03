import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import MainApplication from "../views/MainApplication.vue";
import Dashboard from "../views/Dashboard.vue";
import AdminDashboard from "../views/AdminDashboard.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: { requiresVisitor: true },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresVisitor: true },
  },
  {
    path: "/admin",
    name: "AdminDashboard",
    component: AdminDashboard,
    meta: { requiresVisitor: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
