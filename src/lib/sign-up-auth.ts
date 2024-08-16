import { auth } from "@/app/utils/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


const useSignUp = ()=>{
   const SignUpAuth = (email: string, password: string) => {
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user created");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return {SignUpAuth}
}
export default useSignUp
