"use client"

import { formConfig } from "@/app/utils/form-config";
import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface EmployeeFormProps {
  addEmployee: (formData: FormData) => Promise<void>
}


const EmployeeForm = ({ addEmployee }: EmployeeFormProps) => {
  const employee = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    emergencyContact: "",
    bankName: "",
    bankAccountNumber: "",
    accountName: "",
    nokName: "",
    nokNumber: "",
    nokRelationship: "",
    role: "",
    startDate: "",
    birthday: "",
    educationLevel: "",
  };

  const formRef = useRef<HTMLFormElement | null>(null)
  const { toast } = useToast()

  return (
    <div className=" font-serif">
      <form ref={formRef}
        action={async (formData: FormData) => {
          await addEmployee(formData)
          formRef.current?.reset()
          toast({
            title: "Successful",
            description: "The Employee data has been added",
          })
        }} className="max-w-xl mx-auto p-6 rounded shadow-md">
        <h1 className=" flex justify-center text-4xl font-bold mb-7 uppercase">
          Sleeky Programmers
        </h1>
        <h2 className="text-3xl font-bold mb-6">Employee Biodata</h2>
        <div className="grid gap-4 mb-4">
          {formConfig.map(({ label, type, name }) => (
            <div key={name} className="flex flex-col text-gray-700">
              <label
                htmlFor={name}
                className="mb-3 font-semibold text-gray-700"
              >
                {label}
              </label>
              <input
                type={type}
                id={name}
                name={name}
                className="p-2 border rounded"
                required
              />
            </div>
          ))}
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};


function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending}>
      {pending ?
        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null
      }

      {pending ? 'Saving' : 'Save'}
    </Button>
  )
}


export default EmployeeForm;
