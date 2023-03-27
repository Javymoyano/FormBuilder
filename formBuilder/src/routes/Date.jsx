import { useNavigate, Link } from "react-router-dom";
import DashboardWrapper from "../components/DashboardWrapper";
import { useForm } from "react-hook-form";

export default function Date(second) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/dashboard/country");
    console.log(data);
  };
  return (
    <DashboardWrapper>
      <div>Estoy en Dashboard</div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Fecha de nacimiento</label>
            <input type="date" {...register("birth_date")} />
          </div>
          <Link to="/dashboard/mail">
            <button>Anterior</button>
          </Link>
          <input type="submit" value="Siguiente" />
        </form>
      </div>
    </DashboardWrapper>
  );
}
