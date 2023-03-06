import {
  Card,
  CardBody,
  Text,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function CardCategoria({nome, urlImage} : {nome: String, urlImage: String}) {
  return (
      <Card className={styles.cardCategoria}>
        <Image src="https://www.eusemfronteiras.com.br/wp-content/uploads/2017/04/54033405_m-810x540.jpg" width={{ base: "29vw", md: "50vw", lg: "30vw" }} height={{ base: "19vh", md: "20vh", lg: "25vh" }} overflow={"hidden"} alt="Card image" rounded={"18"}></Image>
        <Text>Titulo</Text>
      </Card>
  )
}