import DashboardWrapper from "../components/DashboardWrapper";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
import styles from "../components/styles/dashboard.module.css";
import Izq from "../components/images/flechablancaizq.png";
import Der from "../components/images/flechablancader.png";
import Enviar from "../components/images/enviar.png";

export default function Dashboard(second) {
  const [pasoActual, setPasoActual] = useState(1);
  const navigate = useNavigate();

  const [clickCheckbox, setClickCheckbox] = useState(false);

  function handleCheckboxChange() {
    setClickCheckbox(!clickCheckbox);
  }
  const [datosFormulario, setDatosFormulario] = useState({
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "",
    terms_and_conditions: false,
  });
  console.log(datosFormulario);
  console.log(clickCheckbox);

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setDatosFormulario((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  }
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  function handleNext() {
    setPasoActual((prevPasoActual) => prevPasoActual + 1);
  }

  function handleBack() {
    setPasoActual((prevPasoActual) => prevPasoActual - 1);
  }

  function handleSubmit() {
    const dbRef = firebase.database().ref("formulario");
    dbRef.push(datosFormulario);
    alert("Los datos del formulario han sido guardados.");
  }

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: value });
  // };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "formulario"), {
        ...datosFormulario,
      });
    } catch (error) {
      console.log(error);
    }
    alert("Los Datos fueron ingresados satisfactoriamente");
    navigate("/login");
    //setUser("");
    console.log(datosFormulario);
    console.log(clickCheckbox);
  };
  return (
    <DashboardWrapper>
      <div className={styles.container}>
        {pasoActual === 1 && (
          <div>
            <label>Nombre completo</label>
            <input
              type="text"
              name="full_name"
              value={datosFormulario.nombre}
              onChange={handleInputChange}
            />
            <button onClick={handleNext}>
              <img src={Der} alt="" />
            </button>
          </div>
        )}
        {pasoActual === 2 && (
          <div>
            <label>Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={datosFormulario.email}
              onChange={handleInputChange}
            />
            <button onClick={handleBack}>
              <img src={Izq} alt="atras" />
            </button>
            <button onClick={handleNext}>
              <img src={Der} alt="" />
            </button>
          </div>
        )}
        {pasoActual === 3 && (
          <div>
            <label>Fecha de nacimiento</label>
            <input
              type="date"
              name="birth_date"
              value={datosFormulario.telefono}
              onChange={handleInputChange}
            />
            <button onClick={handleBack}>
              <img src={Izq} alt="atras" />
            </button>
            <button onClick={handleNext}>
              <img src={Der} alt="" />
            </button>
          </div>
        )}
        {pasoActual === 4 && (
          <div>
            <label>¿Cuál es tu país de origen?</label>
            <select
              placeholder="Elija un País"
              name="country_of_origin"
              onChange={handleInputChange}
            >
              // <option>Selecciona un País</option>
              // <option value={datosFormulario.argentina}>Argentina</option>
              // <option value={datosFormulario.brasil}>Brasil</option>
              // <option value={datosFormulario.chile}>Chile</option>
              // <option value={datosFormulario.colombia}>Colombia</option>
              // <option value={datosFormulario.méxico}>México</option>
              // <option value={datosFormulario.perú}>Perú</option>
              // <option value={datosFormulario.uruguay}>Uruguay</option>
              // <option value={datosFormulario.venezuela}>Venezuela</option>
              //
            </select>
            {/* <input
              type="date"
              name="birth_date"
              value={datosFormulario.telefono}
              onChange={handleInputChange}
            /> */}
            <button onClick={handleBack}>
              <img src={Izq} alt="atras" />
            </button>
            <button onClick={handleNext}>
              <img src={Der} alt="" />
            </button>
          </div>
        )}
        {pasoActual === 5 && (
          <div>
            <label>¿Acepta los términos y condiciones?</label>

            <input
              type="checkbox"
              name="terms_and_conditions"
              checked={datosFormulario.terms_and_conditions}
              onChange={handleInputChange}
            />
            <button onClick={handleBack}>
              <img src={Izq} alt="atras" />
            </button>
            <button onClick={onSubmit} type="submit">
              <img src={Enviar} alt="" />
            </button>
          </div>
        )}
      </div>

      {/* <div>Estoy en Dashboard</div>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label>Nombre completo</label>
            <input
              onChange={handleInputChange}
              value={user.full_name}
              type="text"
              name="full_name"
              placeholder="Ingresa tu nombre completo"
            />
          </div>

          <input type="submit" value="Siguiente" />
        </form>
      </div> */}
    </DashboardWrapper>
  );
}
