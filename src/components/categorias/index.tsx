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
        <div className={`${styles.estarLado} animate__animated animate__fadeInLeftBig`}>
          <img className={`${styles.imgparavoce}`} src="./images/paravoce-branco2.png" alt="Logo do programa" />
          <div className={`${styles.boxText}`}>
            <h4 className={`${styles.fonte}`}>Estar Lado a Lado</h4>
          </div>
        </div>
        <div className={`${styles.ficarBem} animate__animated animate__fadeInRightBig`}>
          <img className={`${styles.imgparavoce}`} src="./images/paravoce-branco2.png" alt="Logo do programa" />
          <div className={`${styles.boxText}`}>
            <h4 className={`${styles.fonte}`}>Ficar Bem</h4>
          </div>
        </div>
        <div className={`${styles.economizar} animate__animated animate__fadeInLeftBig`}>
          <img className={`${styles.imgparavoce}`} src="./images/paravoce-branco2.png" alt="Logo do programa" />
          <div className={`${styles.boxText}`}>
            <h4 className={`${styles.fonte}`}>Economizar</h4>
          </div>
        </div>
        <div className={`${styles.ficarSaudavel} animate__animated animate__fadeInRightBig`}>
          <img className={`${styles.imgparavoce}`} src="./images/paravoce-branco2.png" alt="Logo do programa" />
          <div className={`${styles.boxText}`}>
            <h4 className={`${styles.fonte}`}>Ficar Saudável</h4>
          </div>
        </div>
      </div>
    </>
  )
}
