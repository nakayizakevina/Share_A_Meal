import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ toggle, open }) { 
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/"><img src="/logo.png" alt="Logo" className={styles.logoImg} /></Link>
      </div>
      <button className={styles.menuBtn} onClick={toggle}>
        {open ? "✕" : "☰"}
      </button>
      <div className={`${styles.links} ${open ? styles.active : ""}`}>
        <div className={styles.mobileLogoContainer}>
           <img src="/logo.png" alt="Logo" className={styles.logoImg} />
        </div>
        <Link to="/" onClick={toggle}>Home</Link>
        <Link to="/about" onClick={toggle}>About</Link>
        <Link to="/services" onClick={toggle}>Services</Link>
      </div>
    </nav>
  );
}

export default Navbar;