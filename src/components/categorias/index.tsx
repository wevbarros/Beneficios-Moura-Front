import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import CardCategoria from "../cardCategoria/index";
import styles from './styles.module.scss';
import Link from "next/link";
import 'animate.css';

export function Categorias() {
  return (
    <>
      <div className={`${styles.categorias}`}>
        <Link href={`/beneficios?&id=${1}`} className={`${styles.estarLado} animate__animated animate__fadeInLeftBig`}>
          <img className={`${styles.imgparavoce}`} src="./images/logo_lado_a_lado.png" alt="Logo do programa" />
        </Link>
        <div className={`${styles.ficarBem} animate__animated animate__fadeInRightBig`}>
          <img className={`${styles.imgparavoce}`} src="./images/logo_ficar_bem.png" alt="Logo do programa" />
        </div>
        <div className={`${styles.economizar} animate__animated animate__fadeInLeftBig`}>
          <img className={`${styles.imgparavoce}`} src="./images/logo_economizar.png" alt="Logo do programa" />
        </div>
        <div className={`${styles.ficarSaudavel} animate__animated animate__fadeInRightBig`}>
          <img className={`${styles.imgparavoce}`} src="./images/logo_ficar_saudavel.png" alt="Logo do programa" />
        </div>
      </div>
    </>
  )
}
