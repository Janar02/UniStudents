export interface Student {
  studentCode: string;
  firstName: string;
  lastName: string;
  status: string;
}

export interface State {
  students: Student[];
}
