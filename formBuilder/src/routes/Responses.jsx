import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDocument } from "../firebase/firebase";
import { db } from "../firebase/firebase";
import { collection } from "firebase/firestore";
import styles from "../components/styles/responses.module.css";
import Back from "../components/images/flechablancaizq.png";

export default function Responses() {
  const { user } = useParams();
  const navigate = useNavigate();
  console.log(user);
  const [responses, setResponses] = useState("");
  console.log(responses);
  useEffect(() => {
    setTimeout(() => {
      (async function get() {
        let result = await getDocument(user);
        setResponses(result);
        console.log(result);
      })();
    }, 3000);
  });
  return (
    <div>
      <div>
        <div className={styles.modal}>
          {/* <h1 className={styles.title}>GRACIAS POR TU TIEMPO...</h1> */}
          <div className={styles.modal_overlay}>
            <div className={styles.modal_content}>
              <h4>User:</h4>
              <p> {responses.email} </p>
              <h3>Estos son tus datos personales</h3>

              <h4>Nombre:</h4>
              <p> {responses.full_name}</p>
              <h4>Fecha de Nacimiento:</h4>
              <p> {responses.birth_date}</p>
              <h4>Pais de Origen:</h4>
              <p> {responses.country_of_origin} </p>
            </div>
            <button
              className={styles.back}
              onClick={() => navigate("/dashboard")}
            >
              <img src={Back} alt="" />
            </button>
          </div>
        </div>

        {/* <h1>Thanks for your time...</h1>
      <p>User:  Javier Moyano {responses.email}</p>
      <h3>Here are your answer</h3>
      <p>Name: {responses.full_name}</p>
      <p>Birthdate: {responses.birth_date}</p>
      <p>Country: {responses.country_of_origin}</p> */}
      </div>
    </div>
  );
}
