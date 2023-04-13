import React from "react";
import Form from "../components/images/forma.png";
import styles from "../components/styles/landing.module.css";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className={styles.body}>
      <div className={styles.cont}>
        <div className={styles.cont1}>
          <h1>Tu Formulario</h1>

          <p>
            Completa nuestro formulario para saber más sobre ti y personalizar
            nuestra oferta a tus necesidades. ¡Gracias por confiar en nosotros!
          </p>

          <button onClick={() => navigate("/dashboard")} className={styles.btn}>
            Ingresar
          </button>
        </div>

        <img className={styles.cont2} src={Form} alt="" />
      </div>
    </div>
  );
}
