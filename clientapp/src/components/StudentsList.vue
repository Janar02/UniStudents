<template>
  <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
    <div class="text-center bg-gray-50">
      <h1 class="font-bold">{{ title }}</h1>
      <DataTable :value="students">
        <Column field="studentCode" header="Student Code" />
        <Column field="firstName" header="First Name" />
        <Column field="lastName" header="Student Code" />
        <Column field="status" header="Status" />
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStudentStore } from "@/stores/studentStore";

defineProps<{ title: String }>();
const { students } = useStudentStore();
</script>
