import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginAuth = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredencial)  => {
        const user = userCredencial.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}
  