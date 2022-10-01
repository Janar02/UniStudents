export interface Student {
  studentCode: string;
  firstName: string;
  lastName: string;
  sex: string;
  status: string;
}

export interface State {
  students: Student[];
}
