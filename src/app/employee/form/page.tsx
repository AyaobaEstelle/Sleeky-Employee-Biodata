import EmployeeForm from '@/components/employee-form'
import React from 'react'
import { formConfig } from '@/components/employee-form'

export default function EmployeeFormPage() {

  const addEmployee = async ( formData: FormData) => {
    "use server"
   const name = formData.get("firstName")
    console.log(`inside addEmployee ${name}` )
 }
 
  return (
    <EmployeeForm 
    addEmployee={addEmployee}
    />
  )
}


