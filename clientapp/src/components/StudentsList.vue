<template>
  <div
    class="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300"
  >
    <div class="text-center bg-gray-50">
      <h1 class="font-bold">{{ title }}</h1>
      <ul>
        <li v-for="item in students" :key="item.studentCode">
          <Student :student="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStudentStore } from "@/stores/studentStore";
import Student from "./Student.vue";

defineProps<{ title: String }>();
const { students } = useStudentStore();
</script>
