import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDocument } from "../firebase/firebase";
import { db } from "../firebase/firebase";
import { collection } from "firebase/firestore";
import styles from "../components/styles/responses.module.css";

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
      <div className={styles.modal}>
        <div className={styles.modal_overlay}>
          <h1>Thanks for your time...</h1>
          <div className={styles.modal_content}>
            <div>
              <p>User: javymoyano80@gmail.com </p>
              <h3>Here are your answer</h3>
              <p>Name: Javier Moyano</p>
              <p>Birthdate: 11/03/1980</p>
              <p>Country: Argentina </p>
            </div>
          </div>
        </div>

        {/* <h1>Thanks for your time...</h1>
      <p>User:  Javier Moyano {responses.email}</p>
      <h3>Here are your answer</h3>
      <p>Name: {responses.full_name}</p>
      <p>Birthdate: {responses.birth_date}</p>
      <p>Country: {responses.country_of_origin}</p> */}
      </div>
      <div>
        <button className={styles.back} onClick={() => navigate("/dashboard")}>
          Volver a Inicio
        </button>
      </div>
    </div>
  );
}
