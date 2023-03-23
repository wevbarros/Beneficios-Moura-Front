import {
  Card,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function CardCategoria({nome, urlImage, id} : {nome: String, urlImage: String, id: String}) {
  return (
    <Link href={`/beneficios?cat=${nome}&id=${id}`}>
      <Card className={styles.cardCategoria}>
          <Image width="200" height="200" src={urlImage} alt="Categoria"/>
          <Text color={"white"} align={"center"}>{nome}</Text>
      </Card>
    </Link>
  )
}