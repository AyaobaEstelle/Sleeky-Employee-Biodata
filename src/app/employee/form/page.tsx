import { formConfig } from '@/app/utils/form-config'
import EmployeeForm from '@/components/employee-form'
import React from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/app/utils/firebase'

export default function EmployeeFormPage() {

  const addEmployee = async (formData: FormData) => {
    "use server"
    // formConfig.map(it =>  it.name)
    // for each name in formConfig get value from formData and add it to a new object

    const data: Record<string, any> = {}
    formConfig.forEach((it) => {
      const key = it.name
      const value = formData.get(key)
      data[key] = value
    })

    await addDoc(collection(db, 'employees'), data)
  }

  return (
    <EmployeeForm
      addEmployee={addEmployee}
    />
  )
}


