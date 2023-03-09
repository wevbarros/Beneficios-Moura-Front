import {
  Card,
  Text,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function CardCategoria({
  title,
  category,
  url,
}: {
  title: String;
  category: String;
  url: string;
}) {

  return (
      <Card
        border="2px"
        rounded={"18"}
        borderColor="#fff"
        my={{ base: "2", md: "5", lg: "5"}}
        mx={{ base: "1", md: "5", lg: "5" }}
        width={{ base: "29vw", md: "35vw", lg: "23vw" }}
        height={{ base: "19vh", md: "20vh", lg: "22vh" }}
        opacity={0.5}
        className={styles.card}
      >
        <Image
          src={url}
          width={"300"}
          height={"250"}
          alt={String(title)}
          className={styles.image}
        ></Image>
        <Flex
          position={"absolute"}
          color="#fff"
          width={{ base: "29vw", md: "35vw", lg: "23vw" }}
          height={{ base: "19vh", md: "20vh", lg: "22vh" }}
          justifyContent="center"
          alignItems="center"
        >  
          <Link href={`#`}>
            <Text whiteSpace={"normal"} textAlign={"center"} fontSize={{ base: "large", md: "4xl", lg: "50" }}>
              {title}
            </Text>
          </Link>
        </Flex>
      </Card>
  );
}