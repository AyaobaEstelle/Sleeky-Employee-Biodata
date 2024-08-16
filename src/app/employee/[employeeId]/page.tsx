"use client";
import ProtectedComponent from "@/components/protected-component";
import Link from "next/link";
import {
  deleteDoc,
  deleteField,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/app/utils/firebase";
import { Employee } from "@/app/utils/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import useDeleteEmployee from "@/app/hooks/useDeleteEmployee";
import { useEffect } from "react";

const EmployeeDetailsPage = ({
  params,
}: {
  params: { employeeId: string };
}) => {
  console.log(params);
  const {
    employee,
    deleteEmployee,
    fetchEmployee,
    isLoading,
    isDeletingEmployee,
  } = useDeleteEmployee(params.employeeId);

  useEffect(() => {
    fetchEmployee();
  }, []);

  if (isLoading) {
    return <>Loading Data</>;
  }
  if (!employee || JSON.stringify(employee) === "{}") {
    return <div>Employee Details cannot be found</div>;
  }
  console.log(employee, "employeeemployeeemployee");

  return (
    <ProtectedComponent>
      <div className="mx-auto p-6">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>
                <p>My Employee: {params.employeeId}</p>
              </CardTitle>
              <CardDescription>Employee Details</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div>
              <p>{`${employee?.firstName} ${employee?.lastName}`}</p>
              <p>{employee?.email}</p>
              <p>{employee?.adress}</p>
              <p>{employee?.phone}</p>
              <p>{employee?.emergencyContact}</p>
              <p>{employee?.bankName}</p>
              <p>{employee?.bankAccountNumber}</p>
              <p>{employee?.accountName}</p>
              <p>{employee?.nokName}</p>
              <p>{employee?.nokNumber}</p>
              <p>{employee?.nokRelationship}</p>
              <p>{employee?.role}</p>
              <p>{employee?.startDate}</p>
              <p>{employee?.dob}</p>
              <p>{employee?.educationLevel}</p>
            </div>
            <div className="flex gap-4 py-6">
              <Link href={`/employee/edit/${params.employeeId}`}>
                <Button>Edit</Button>
              </Link>
              <Button
                disabled={isDeletingEmployee}
                onClick={() => deleteEmployee()}>
                {isDeletingEmployee ? "Deleting" : "Delete"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ProtectedComponent>
  );
};

export default EmployeeDetailsPage;
