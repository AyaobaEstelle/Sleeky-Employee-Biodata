import { auth } from "@/app/utils/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const SignUpAuth = (email: string, password: string) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user created");
        toast("User created successfully, you will be redirected to the login screen in 3 seconds", {
          type: "success",
          position: "top-right",
          onClose: () => {
            router.push("/login")
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return { SignUpAuth, isLoading };
};
export default useSignUp;
