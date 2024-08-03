import { createSlice } from '@reduxjs/toolkit';
import { StudentAction } from '@/reducer/studentReducer';
import { Student } from '@/types/types';

export const studentSlice = createSlice({
  name: 'students',
  initialState: {
    students: [] as Student[],
  },
  reducers: {
    addStudent: (state, action: StudentAction) => {
      state.students.push(action.payload);
    },
  },
});

export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;
