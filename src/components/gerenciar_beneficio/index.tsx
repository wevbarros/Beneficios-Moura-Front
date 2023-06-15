import { useState } from "react";
import NavBar from "../NavBar";
import FormBeneficio from "../formBeneficio";
import styles from "./gerenciar_beneficio.module.scss";
import { CardBeneficio } from "../cardBeneficioHome";
import {
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { Button, Stack } from "@chakra-ui/react";

interface GerenciarProps {
  title: string;
}

export default function Gerenciar({ title }: GerenciarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState<"inside" | "outside">(
    "inside"
  );

  return (
    <>
      <div className={styles.gradienteAzul}>
        <NavBar />
        <div className={styles.card}>
          <h1 className={styles.title}>{title}</h1>
          <Stack
            spacing={4}
            direction="row"
            align="flex-start"
            justify="flex-start"
            className={styles.buttonContainer}
          >
            <Button
              bg="#0D1740"
              colorScheme="none"
              size="md"
              width="180px"
              height="45px"
              onClick={onOpen}
            >
              Adicionar Benefício
            </Button>
          </Stack>
        </div>
      </div>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={{ base: "xl", md: "xl", lg: "xl", xl: "xxl" }}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent
          height={{ base: "100vh", md: "auto", lg: "100vh", xl: "100vh" }}
          width={{ xl: "40vw" }}
          textColor={"#fff"}
          border={"none"}
          padding={"0"}
          className={styles.gradienteModal}
        >
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormBeneficio />
          </ModalBody>
          <ModalFooter justifyContent={"center"}>
            <Button colorScheme="blue" ml={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
