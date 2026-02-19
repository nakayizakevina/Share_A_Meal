import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar({ isOpen }) {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
    </div>
  );
}

export default Sidebar;