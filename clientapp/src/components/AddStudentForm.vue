<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <form class="max-w-md w-full space-y-8">
      <div class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="studentCode">Student Code</label>
            <input
              id="studentCode"
              name="studentCode"
              v-model="student.studentCode"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Student Code"
            />
          </div>
          <div>
            <label for="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              v-model="student.firstName"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="First Name"
            />
          </div>
          <div>
            <label for="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              v-model="student.lastName"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label for="status">Status</label>
            <input
              id="status"
              name="status"
              v-model="student.status"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Status"
            />
          </div>
        </div>
        <div>
          <button
            @click.prevent="submitForm"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span
              class="absolute left-0 inset-y-0 flex items-center pl-3"
            ></span>
            Add Student
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Student } from "@/model/student";
import { useStudentStore } from "@/stores/studentStore";
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";

const student: Ref<Student> = ref({
  studentCode: "",
  firstName: "",
  lastName: "",
  status: "",
});
const { addStudent } = useStudentStore();
const router = useRouter();

const submitForm = () => {
  addStudent({ ...student.value });

  student.value.studentCode = "";
  student.value.firstName = "";
  student.value.lastName = "";
  student.value.status = "";
  router.push({ name: "Student" }); //Kas Incomes on name-le õige väärtus?
};
</script>
