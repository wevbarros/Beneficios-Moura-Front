import {
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function CardCategoria({nome, urlImage} : {nome: String, urlImage: String}) {
  return (
    <Link href="/beneficios">
      <Card className={styles.cardCategoria}>
          <img src="https://www.eusemfronteiras.com.br/wp-content/uploads/2017/04/54033405_m-810x540.jpg" alt="Categoria"/>
          <Text align={"center"}>{nome}</Text>
      </Card>
    </Link>
  )
}
//what media query is md? lg? etc