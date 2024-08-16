import {
  deleteDoc,
  deleteField,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/app/utils/firebase";
import { useState } from "react";
import { Employee } from "../utils/types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useDeleteEmployee = (params?: any) => {
  const [employee, setEmployee] = useState<Employee>();
  const [isLoading, setIsLoading] = useState(true);
  const [isDeletingEmployee, setIsDeletingEmployee] = useState(false);

  const router = useRouter();

  const fetchEmployee = async () => {
    const docRef = doc(db, "employees", `${params}`);
    const docSnap = await getDoc(docRef);
    console.log(docRef, "employee docRef");
    let employee = {} as Employee;

    if (docSnap.exists()) {
      console.log("employee exists");
      setEmployee(docSnap.data() as Employee);
    }
    console.log(employee);
    setIsLoading(false);
  };

  const deleteEmployee = async () => {
    try {
      setIsDeletingEmployee(true);
      const docRef = doc(db, "employees", `${params}`);
      await deleteDoc(docRef);

      console.log("employee deleted");
      toast("Employee Deleted Successfully", {
        type: "success",
        position: "top-right",
        autoClose: 2000,
        onClose: () => {
          router.push("/employee/home-page");
        },
      });
    } catch (error) {}

    setIsDeletingEmployee(false);
  };

  return {
    fetchEmployee,
    deleteEmployee,
    employee,
    isLoading,
    isDeletingEmployee,
    setIsDeletingEmployee,
  };
};
export default useDeleteEmployee;
