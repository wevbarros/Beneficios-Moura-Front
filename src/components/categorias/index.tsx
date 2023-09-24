import styles from './styles.module.scss';
import Link from "next/link";
import 'animate.css';
import NavBar from '../navbar/NavBar';


export function Categorias() {
  return (
    <>
      <NavBar />
      <div className={`${styles.categorias}`}>
        <Link href={`/beneficios?cat=Estar lado a lado&id=1`} className={`${styles.estarLado} animate__animated animate__fadeInLeftBig`}>
          <img className={`${styles.imgparavoce}`} src="./images/logo_lado_a_lado.png" alt="Logo do programa" />
        </Link>
        <Link href={`/beneficios?cat=Pra você ficar bem&id=2`} className={`${styles.ficarBem} animate__animated animate__fadeInRightBig`}>
          <img className={`${styles.imgparavoce}`} src="./images/logo_ficar_bem.png" alt="Logo do programa" />
        </Link>
        <Link href={`/beneficios?cat=Pra você economizar&id=3`} className={`${styles.economizar} animate__animated animate__fadeInLeftBig`}>
          <img className={`${styles.imgparavoce}`} src="./images/logo_economizar.png" alt="Logo do programa" />
        </Link>
        <Link href={`/beneficios?cat=Pra você ficar saudavel&id=4`} className={`${styles.ficarSaudavel} animate__animated animate__fadeInRightBig`}>
          <img className={`${styles.imgparavoce}`} src="./images/logo_ficar_saudavel.png" alt="Logo do programa" />
        </Link>
      </div>
    </>
  )
}
