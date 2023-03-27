import { useNavigate, Link } from "react-router-dom";
import DashboardWrapper from "../components/DashboardWrapper";
import { useForm } from "react-hook-form";

export default function Country(second) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/dashboard/terms");
    console.log(data);
  };
  return (
    <DashboardWrapper>
      <div>Estoy en Country</div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>¿Cuál es tu país de origen?</label>
            <select {...register("country_of_origin")}>
              <option value="argentina">Argentina</option>
              <option value="brasil">Brasil</option>
              <option value="chile">Chile</option>
              <option value="colombia">Colombia</option>
              <option value="méxico">México</option>
              <option value="perú">Perú</option>
              <option value="uruguay">Uruguay</option>
              <option value="venezuela">Venezuela</option>
            </select>
          </div>
          <Link to="/dashboard/date">
            <button>Anterior</button>
          </Link>
          <input type="submit" value="Siguiente" />
        </form>
      </div>
    </DashboardWrapper>
  );
}
