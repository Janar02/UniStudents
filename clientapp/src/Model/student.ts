export interface Student {
  studentCode: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  sex: string;
  status: string;
}

export interface State {
  students: Student[];
}
