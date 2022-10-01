import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import StudentVue from "@/Views/StudentView.vue";
import AddStudentVue from "@/Views/AddStudentView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Student",
    component: StudentVue,
    props: { title: "University Students" },
  },
  {
    path: "/newstudent",
    name: "Add Student",
    component: AddStudentVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
