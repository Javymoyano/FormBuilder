import { auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(second) {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, handleUserStateChanged);
  }, []);

  function handleUserStateChanged(user) {
    if (user) {
      //todo: Si esta registrado redirigir a Dashboard
      navigate("/dashboard");
      console.log(user.displayName);
    } else {
      //todo: Si no esta registrado redirigir a choose username
      navigate("/choose-username");
      console.log("Ese usuario no esta autenticado...");
    }
  }
  async function handleOnClick() {
    const provider = new GoogleAuthProvider();
    await signInWithGoogle(provider);

    async function signInWithGoogle(provider) {
      try {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div>
      <button onClick={handleOnClick}>Login with Google</button>
    </div>
  );
}
