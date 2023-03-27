import { Link, useNavigate } from "react-router-dom";
import styles from "../components/styles/navbar.module.css";

export default function DashboardWrapper({ children }) {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.form}>COMPLETA TU FORMULARIO</div>

        <Link className={styles.link} to="/signout">
          Signout
        </Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
