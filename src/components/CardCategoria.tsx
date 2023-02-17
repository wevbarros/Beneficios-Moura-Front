import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import styles from "./CardCategoria.module.css";
import imagem from "../public/images/alface.jpg";

export default function CardCategoria({
  title,
  category,
}: {
  title: String;
  category: String;
}) {
  return (
    <Card
      border="2px"
      rounded={"18"}
      borderColor="#fff"
      my={{ base: "2", md: "5", lg: "5" }}
      mx={{ base: "1", md: "5", lg: "5" }}
      width={{ base: "29vw", md: "50vw", lg: "20vw" }}
      height={{ base: "19vh", md: "20vh", lg: "20vh" }}
      className={styles.card}
    >
      <Image
        src='https://www.terradecultivo.com.br/wp-content/uploads/2022/07/blog_tdc_alface-1024x1024.jpg'
        width={{ base: "29vw", md: "50vw", lg: "20vw" }}
        height={{ base: "19vh", md: "20vh", lg: "20vh" }}
        overflow={"hidden"}
        alt='Dan Abramov'
        rounded={"18"}
        >
      </Image>
    </Card>
  );
}

//opacity vermelho: 0.5