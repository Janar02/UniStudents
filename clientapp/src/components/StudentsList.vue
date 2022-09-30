<template>
  <div class="text-center bg-gray-50 text-dark-300">
    <h1 class="font-bold">{{ title }}</h1>
    <ul>
      <li v-for="item in localStudentList" :key="item.studentCode">
        <Student :student="item" />
      </li>
      <!--
          The <ul> HTML element represents an
          unordered list of items, typically 
          rendered as a bulleted list.
      -->
    </ul>
  </div>
</template>

<script setup lang="ts">
import Student from "./Student.vue";
defineProps<{ title: String }>();

const localStudentList = [
  {
    studentCode: "123451IABB",
    firstName: "Mari",
    lastName: "Maasikas",
    status: "aktiivne",
  },
  {
    studentCode: "123452IABB",
    firstName: "Kaarel",
    lastName: "Kaalikas",
    status: "mitteaktiivne",
  },
  {
    studentCode: "123453IABB",
    firstName: "Veera",
    lastName: "Vaarikas",
    status: "aktiivne",
  },
];
</script>
