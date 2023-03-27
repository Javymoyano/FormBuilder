import { useState } from "react";
import { useForm } from "react-hook-form";

// import firebase from "firebase/app";
// import "firebase/database";

export default function Form() {
  const [pasoActual, setPasoActual] = useState(1);
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  console.log(datosFormulario);
  function handleInputChange(event) {
    const { name, value } = event.target;
    setDatosFormulario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

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

  const {
    formState: { errors },
  } = useForm();

  return (
    <div>
      {pasoActual === 1 && (
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={datosFormulario.nombre}
            onChange={handleInputChange}
            required
          />
          {errors.nombre?.type === "required" &&
            alert("El campo Nombre es requerido")}
          <button onClick={handleNext}>Siguiente</button>
        </div>
      )}
      {pasoActual === 2 && (
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={datosFormulario.email}
            onChange={handleInputChange}
          />
          <button onClick={handleBack}>Atrás</button>
          <button onClick={handleNext}>Siguiente</button>
        </div>
      )}
      {pasoActual === 3 && (
        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={datosFormulario.telefono}
            onChange={handleInputChange}
          />
          <button onClick={handleBack}>Atrás</button>
          <button onClick={handleSubmit}>Enviar</button>
        </div>
      )}
    </div>
  );
}

// // import React from "react";
// import { useForm } from "react-hook-form";

// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   return (
//     <>
//       <h1>Formulario</h1>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Nombre completo</label>
//           <input type="text" {...register("full_name")} />
//         </div>
//         <div>
//           <label>Correo electrónico</label>
//           <input type="text" {...register("email")} />
//         </div>
//         <div>
//           <label>Fecha de nacimiento</label>
//           <input type="date" {...register("birth_date")} />
//         </div>
//         <div>
//           <label>¿Cuál es tu país de origen?</label>
//           <select {...register("country_of_origin")}>
//             <option value="argentina">Argentina</option>
//             <option value="brasil">Brasil</option>
//             <option value="chile">Chile</option>
//             <option value="colombia">Colombia</option>
//             <option value="méxico">México</option>
//             <option value="perú">Perú</option>
//             <option value="uruguay">Uruguay</option>
//             <option value="venezuela">Venezuela</option>
//           </select>
//         </div>
//         <div>
//           <label>¿Acepta los términos y condiciones?</label>
//           <input type="checkbox" {...register("terms_and_conditions")} />
//         </div>
//         <input type="submit" value="Enviar" />
//       </form>
//     </>
//   );
// };

// export default Form;
