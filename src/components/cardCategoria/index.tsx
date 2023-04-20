import {
  Card,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function CardCategoria({nome, urlImage, id} : {nome: String, urlImage: string, id: String}) {
  return (
    <Link href={`/beneficios?cat=${nome}&id=${id}`}>
      <Card className={styles.cardCategoria}  bg="#182A74" borderRadius="lg" boxShadow="md" overflow="hidden">
          <Image width="450" height="450" src={urlImage} alt="Categoria" borderRadius="lg"/>
          <Text  background={ "#182A74"}  color={"white"} align={"center"} p={"2"}>{nome}</Text>
      </Card>
    </Link>
  )
}