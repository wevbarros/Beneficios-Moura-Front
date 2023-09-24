import { FaBuffer } from "react-icons/fa";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import Script from "next/script";
import Image from "next/image";
import "animate.css";
import { useAuth } from "../../auth/auth";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { isLogged } = useAuth();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkIsLogged = async () => {
      const usurario = await isLogged();
      usurario ? setShow(true) : setShow(false);
    };
    checkIsLogged();
  }, [isLogged]);

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg navbar-dark ${styles.navBar}`}
    >
      <div
        className={`container animate__animated animate__fadeInDown ${styles.navbarContainer}`}
      >
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <img id="Logo" src="/images/para-voce.png" alt="Logo Moura" />
        </Link>
        <div className="spacer"></div>{" "}
        {/* Espaço entre a imagem e os itens da navbar */}
        <button
          className={`navbar-toggler ${styles.semBorda}`}
          data-bs-toggle="collapse"
          data-bs-target="#navcol-5"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navcol-5" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto px-2">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/categorias">
                Categorias
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/beneficios">
                Benefícios
              </Link>
            </li>
            {show && (
              <li className="nav-item">
                <Link className="nav-link" href="/gerenciar">
                  Gerenciar
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
