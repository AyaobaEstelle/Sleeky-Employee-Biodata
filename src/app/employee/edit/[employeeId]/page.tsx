"use client";

import { formConfig } from "@/app/utils/form-config";
import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import useEditEmployeeDetails from "@/app/hooks/useEditEmployeeDetails";

interface EmployeeFormProps {
  addEmployee: (formData: FormData) => Promise<void>;
}

const EditEmployeeForm = ({ addEmployee }: EmployeeFormProps) => {
  const { register, onSubmit, isLoadingEmployeeData, isUpdatingDetails } =
    useEditEmployeeDetails();
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

  const formRef = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();

  if (isLoadingEmployeeData) {
    return <Loader2 className="h-4 w-4 animate-spin" />;
  }

  return (
    <div className="">
      <form ref={formRef} onSubmit={onSubmit} className="max-w-xl mx-auto p-6">
        <h1 className=" flex justify-center text-4xl font-bold mb-7 uppercase">
          Sleeky Programmers
        </h1>
        <h2 className="text-3xl font-bold mb-6"> Edit Employee Data</h2>
        <div className="grid gap-4 mb-4">
          {formConfig.map(({ label, type, name }) => (
            <div key={name} className="flex flex-col text-gray-700">
              <label
                htmlFor={name}
                className="mb-3 font-semibold text-gray-700">
                {label}
              </label>
              <input
                type={type}
                id={name}
                disabled={isUpdatingDetails}
                {...register(`${name}`)}
                className="p-2 border rounded"
              />
            </div>
          ))}
        </div>
        {/* <SubmitButton /> */}
        <Button disabled={isUpdatingDetails}>Update Details</Button>
      </form>
    </div>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}

      {pending ? "Saving" : "Save"}
    </Button>
  );
}

export default EditEmployeeForm;
