import { doc, getDoc, setDoc } from "firebase/firestore";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Employee } from "../utils/types";
import { db } from "../utils/firebase";
import { useEffect, useState } from "react";
import { formConfig } from "../utils/form-config";
import { toast } from "react-toastify";

const useEditEmployeeDetails = () => {
  const params = useParams();
  const router = useRouter();
  const [employeeId, setEmployee] = useState<Employee>();
  const { control, register, handleSubmit, setValue } = useForm({});
  const [isLoadingEmployeeData, setIsLoadingEmployeeData] = useState(true);
  const [isUpdatingDetails, setIsUpdatingDetails] = useState(false);

  const fetchEmployee = async () => {
    const docRef = doc(db, "employees", `${params?.employeeId}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const employee = docSnap.data();
      console.log("employee exists");

      formConfig.map((form_value) => {
        setValue(`${form_value?.name}`, employee[`${form_value?.name}`]);
      });

      setEmployee(docSnap.data() as Employee);
    } else {
      console.log("employee does not exist");
    }
    setIsLoadingEmployeeData(false);
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  const onSubmit = handleSubmit((data) => {
    setIsUpdatingDetails(true);

    setDoc(
      doc(db, "employees", `${params.employeeId}`),
      {
        ...data,
      },
      { merge: true }
    )
      .then(() => {
        toast("Employee updated successfully", {
          onClose() {
            router.push("/employee/home-page");
          },
        });
      })
      .catch(() => {})
      .finally(() => {
        setIsUpdatingDetails(false);
      });
  });

  return { register, onSubmit, isLoadingEmployeeData, isUpdatingDetails };
};

export default useEditEmployeeDetails;
