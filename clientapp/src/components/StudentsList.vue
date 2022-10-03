<template>
  <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
    <div class="text-center bg-gray-50">
      <h1 class="font-bold">{{ title }}</h1>
      <strong v-if="students.length === 0" class="text-red-600">
        No Students to display
      </strong>
      <DataTable :value="students" v-if="students.length > 0">
        <Column field="studentCode" header="Student Code" />
        <Column field="firstName" header="First Name" />
        <Column field="lastName" header="Last Name" />
        <Column field="dateOfBirth" header="Age">
          <template #body="{ data }">
            {{ calculateAge(data.dateOfBirth) }}
          </template>
        </Column>
        <Column field="sex" header="Sex" />
        <Column field="status" header="Status" />
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStudentStore } from "@/stores/studentStore";

defineProps<{ title: String }>();
const { students } = useStudentStore();

function calculateAge(DOB: Date) {
  let birthDate = new Date(DOB).getTime();
  var age = new Date(Date.now() - birthDate);
  return Math.abs(new Date(age).getFullYear() - 1970);
}
</script>
