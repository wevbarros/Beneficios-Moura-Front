import {
  Text,
  Button,
  Card,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Stack,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";

import { IBeneficio } from "../../dtos/IBeneficio";

export function CardBeneficio(IBeneficio: IBeneficio) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [urlImage, setUrlImage] = useState("");

  useEffect(() => {
    function setImage(url: string) {
      if (IBeneficio.urlImage.startsWith("https://")) {
        setUrlImage(IBeneficio.urlImage);
      } 
    }
    
    setImage(IBeneficio.urlImage);
  }, [IBeneficio.urlImage]);
  

  return (
    <>
      <Link href={""} onClick={onOpen}>
        <Card
          border="2px"
          rounded={"18"}
          borderColor="#fff"
          my={{ base: "2", md: "5", lg: "5", xl: "5" }}
          mx={{ base: "1", md: "5", lg: "5", xl: "5" }}
          width={{ base: "29vw", md: "35vw", lg: "35vw", xl: "23vw" }}
          height={{ base: "19vh", md: "32", lg: "40", xl: "22vh" }}
          opacity={0.5}
          className={styles.card}
        >
          <Image
            src={`${String(urlImage)}`}
            width={"300"}
            height={"250"}
            alt={String(IBeneficio.nome)}
            className={styles.image}
          ></Image>
          <Flex
            position={"absolute"}
            color="#fff"
            width={{ base: "full", md: "full", lg: "full", xl: "full" }}
            height={{ base: "full", md: "full", lg: "full", xl: "full" }}
            justifyContent="center"
            alignItems="center"
          >
            <Text
              whiteSpace={"normal"}
              textAlign={"center"}
              fontSize={{ base: "initial", md: "3xl", lg: "4xl", xl: "4xl" }}
            >
              {IBeneficio.nome}
            </Text>
          </Flex>
        </Card>
      </Link>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={"full"}
        scrollBehavior="outside"
      >
        <ModalOverlay />
        <ModalContent
          className={styles.modalContent}
          height={{ base: "112vh", md: "auto", lg: "100vh", xl: "100vh" }}
          width={{ base: "100vw", md: "60vw", lg: "50vw", xl: "45vw" }}
          textColor={"#fff"}
          border={"none"}
          padding={"0"}
        >
          <Image
            src={`${String(IBeneficio.urlImage)}`}
            alt={""}
            height={"640"}
            width={"960"}
          ></Image>
          <ModalHeader>{IBeneficio.nome}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              textAlign={{
                base: "start",
                md: "start",
                lg: "start",
                xl: "start",
              }}
            >
              {IBeneficio.descricao}
            </Text>
          </ModalBody>
          <ModalFooter justifyContent={"center"}>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
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
      justifyContent={"center"}
      flexGrow={0}
      flexShrink={0}
      flexBasis={"auto"}
    >
      <Stack alignItems={"center"}>
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
