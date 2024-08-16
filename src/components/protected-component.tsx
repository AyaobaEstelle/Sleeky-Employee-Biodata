import { auth } from "@/app/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ReactNode, useLayoutEffect } from "react";

const ProtectedComponent = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;

        // ...
      } else {
        router.replace("/login");

        // User is signed out
        // ...
      }
    });
  }, []);

  return <div>{children}</div>;
};

export default ProtectedComponent;
