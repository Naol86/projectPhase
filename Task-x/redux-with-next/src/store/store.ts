// import { studentReducer } from '@/reducer/studentReducer';
import { configureStore, Reducer, UnknownAction } from '@reduxjs/toolkit';
import { StudentState, StudentAction } from '@/types/types';
import studentReducer from '@/slice/studentSlice';

const store = configureStore({
  reducer: {
    student: studentReducer as Reducer<StudentState, StudentAction | UnknownAction>,
  },
});

export default store;
