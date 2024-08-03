interface Student {
  id: number;
  name: string;
  age: number;
}

interface StudentState {
  students: Student[];
}

export interface StudentAction {
  type: string;
  payload: Student;
}

const initialState: StudentState = {
  students: [],
};
