<template>
  <div>
    {{ student.studentCode }} : {{ student.firstName }} :
    {{ student.lastName }}:
    {{ student.status }}
  </div>
</template>

<script setup lang="ts">
import { Student } from "@/model/student";
defineProps<{ student: Student }>();
</script>
