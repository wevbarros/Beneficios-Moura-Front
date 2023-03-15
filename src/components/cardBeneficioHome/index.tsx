import { Card, Text, Flex, Skeleton, Stack } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

import { IBeneficio } from "../../dtos/IBeneficio";

export function CardBeneficio(IBeneficio: IBeneficio) {
  return (
    <Card
      border="2px"
      rounded={"18"}
      borderColor="#fff"
      my={{ base: "2", md: "5", lg: "", xl: "5" }}
      mx={{ base: "1", md: "5", lg: "", xl: "5" }}
      width={{ base: "29vw", md: "35vw", lg: "", xl: "23vw" }}
      height={{ base: "19vh", md: "20vh", lg: "", xl: "22vh" }}
      opacity={0.5}
      className={styles.card}
    >
      <Image
        src={
          "https://images.freeimages.com/images/large-previews/d41/bear-combat-2-1332988.jpg"
        }
        width={"300"}
        height={"250"}
        alt={String(IBeneficio.nome)}
        className={styles.image}
      ></Image>
      <Flex
        position={"absolute"}
        color="#fff"
        width={{ base: "29vw", md: "35vw", lg: "", xl: "23vw" }}
        height={{ base: "19vh", md: "20vh", lg: "", xl: "22vh" }}
        justifyContent="center"
        alignItems="center"
      >
        <Link href={`/beneficio/${IBeneficio.id}`}>
          <Text
            whiteSpace={"normal"}
            textAlign={"center"}
            fontSize={{ base: "initial", md: "4xl", lg: "", xl: "50" }}
          >
            {IBeneficio.nome}
          </Text>
        </Link>
      </Flex>
    </Card>
  );
}

export function CardSkeleton() {
  return (
    <Card
      border="2px"
      rounded={"18"}
      borderColor="#fff"
      my={{ base: "2", md: "5", lg: "", xl: "5" }}
      mx={{ base: "1", md: "5", lg: "", xl: "5" }}
      width={{ base: "29vw", md: "35vw", lg: "", xl: "23vw" }}
      height={{ base: "19vh", md: "20vh", lg: "", xl: "22vh" }}
      opacity={0.5}
      bgColor={"gray.100"}
      justifyContent={'center'}
      flexGrow={0}
      flexShrink={0}
      flexBasis={'auto'}
    >
      <Stack alignItems={'center'} >
        <Skeleton
          height="5"
          width="60%"
          startColor="gray.200"
          endColor="gray.400"
        />
        <Skeleton
          height="5"
          width="70%"
          startColor="gray.200"
          endColor="gray.400"
        />
      </Stack>
    </Card>
  );
}
