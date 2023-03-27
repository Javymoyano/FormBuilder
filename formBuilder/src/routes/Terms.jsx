import { useNavigate, Link } from "react-router-dom";
import DashboardWrapper from "../components/DashboardWrapper";
import { useForm } from "react-hook-form";

export default function Terms(second) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <DashboardWrapper>
      <div>Estoy en Terms</div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>¿Acepta los términos y condiciones?</label>
            <input type="checkbox" {...register("terms_and_conditions")} />
          </div>
          <Link to="/dashboard/country">
            <button>Anterior</button>
          </Link>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </DashboardWrapper>
  );
}
