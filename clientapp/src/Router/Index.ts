import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import IncomeVue from "@/components/StudentsList.vue";
import AddIncomeVue from "@/components/AddStudentForm.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Student",
    component: IncomeVue,
    props: { title: "Student" },
  },
  {
    path: "/newstudent",
    name: "Add Student",
    component: AddIncomeVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
