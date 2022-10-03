import { Student } from "@/model/student";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useStudentStore = defineStore("studentStore", () => {
  const students = ref<Student[]>([
    {
      studentCode: "123451IABB",
      firstName: "Mari",
      lastName: "Maasikas",
      dateOfBirth: new Date("2002, 10, 4"),
      sex: "Female",
      status: "aktiivne",
    },
    {
      studentCode: "123452IABB",
      firstName: "Kaarel",
      lastName: "Kaalikas",
      dateOfBirth: new Date("2001, 10, 4"),
      sex: "Male",
      status: "mitteaktiivne",
    },
    {
      studentCode: "123453IABB",
      firstName: "Veera",
      lastName: "Vaarikas",
      dateOfBirth: new Date("2000, 10, 4"),
      sex: "Female",
      status: "aktiivne",
    },
  ]);

  const addStudent = (student: Student) => {
    students.value.push(student);
  };

  return { students, addStudent };
});
