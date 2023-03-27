import { useNavigate, Link } from "react-router-dom";
import DashboardWrapper from "../components/DashboardWrapper";
import { useForm } from "react-hook-form";
import { db } from "../firebase/firebase";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  getDocs,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { useState } from "react";

export default function Mail(second) {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "usuarios"), {
        ...user,
      });
    } catch (error) {
      console.log(error);
    }
    //setUser("");
    console.log(user);
    navigate("/dashboard/date");
  };
  return (
    <DashboardWrapper>
      <div>Estoy en Dashboard</div>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label>Correo electrónico</label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <Link to="/dashboard">
            <button>Anterior</button>
          </Link>
          <input type="submit" value="Siguiente" />
        </form>
      </div>
    </DashboardWrapper>
  );
}
