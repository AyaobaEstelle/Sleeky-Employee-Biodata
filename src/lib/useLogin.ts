import { auth } from "@/app/utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const useLogin = () => {
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const router = useRouter()

  const LoginAuth = (email: string, password: string) => {
    setIsLoginLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user created");
        toast("User logged in successfully,", {
          type: "success",
          position: "top-right",
          onClose: () => {
            router.push("/employee/home-page")
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error,'error here',errorMessage);

        toast(`${errorCode =='auth/invalid-credential'?'Incorrect Login Details':"An error occurred, please try again"}`, {
          type: "error",
          position: "top-right",
          
        });
      })
      .finally(() => {
        setIsLoginLoading(false);
      });
  };
  
  return { LoginAuth, isLoginLoading };
};
export default useLogin;
