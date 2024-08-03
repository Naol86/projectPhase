export interface Student {
  id: number;
  name: string;
  age: number;
}

export interface StudentAction {
  type: string;
  payload: Student;
}

export interface StudentState {
  students: Student[];
}
