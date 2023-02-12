import { FaBuffer } from "react-icons/fa";
import Link from 'next/link'
import styles from "./NavBar.module.css";
import Script from "next/script";

export default function NavBar() {
  return (
    <nav className={`navbar navbar-dark navbar-expand-md py-3 ${styles.navBar}`}>
    <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <span className="d-flex justify-content-center align-items-center bs-icon-sm bs-icon-rounded bs-icon-primary me-2 bs-icon">
          <FaBuffer />
        </span>
        <span>benefícios</span>
      </a>
      <button className={`navbar-toggler ${styles.semBorda}`} data-bs-toggle="collapse" data-bs-target="#navcol-5">
        <span className="visually-hidden">Toggle navigation</span>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navcol-5" className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto px-2">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Restaurantes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Moda
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Conveniência
            </a>
          </li>
          <li className="nav-item">
             <Link className="nav-link" href="/beneficios">Benefícios</Link>
          </li>
        </ul>
        <a className="btn btn-outline-light md-2 rounded-5 px-4" role="button" href="#">
          Login
        </a>
      </div>
    </div>
  </nav>
  );
}

// de um margin left com o bootstrap
