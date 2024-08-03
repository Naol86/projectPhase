'use client';
import { addStudent } from '@/slice/studentSlice';
import { Student, StudentState } from '@/types/types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Name() {
  const name = useSelector((state: StudentState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addStudent({ id: 1, name: 'John Doe', age: 20 }));
  }, []);
  console.log(name);
  return <div>Name</div>;
}
