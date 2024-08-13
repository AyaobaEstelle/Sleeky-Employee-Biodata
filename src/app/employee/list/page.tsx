import EmployeeTable from '@/components/employee-table'
import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/app/utils/firebase';
import { Employee } from '@/app/utils/types';

export default async function EmployeeListPage() {

  const querySnapshot = await getDocs(collection(db, "employees"));
  const data: Employee[] = []

  querySnapshot.forEach((doc) => {
    const employee = {
      id: doc.id,
      ...doc.data(),
    }
    data.push(employee as Employee);
  });

  return (
    <EmployeeTable data={data} />
  )
}
