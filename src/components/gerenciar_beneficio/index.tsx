import React, { useState } from "react";
import NavBar from "../NavBar";
import { FormCadastrarBeneficio } from "../formCadastrarBeneficio";
import styles from "./gerenciar_beneficio.module.scss";
import { CardBeneficio } from "../cardBeneficioHome";
import { Flex, Heading, Stack, Text, Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import error from "next/error";
import TabelaBeneficios from "../tabelaBeneficios";
import { IBeneficio } from "../../dtos/IBeneficio";
import { useBeneficiosController } from "../../controllers/BeneficiosController";

interface GerenciarProps {
  title: string;
}

export default function Gerenciar({ title }: GerenciarProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { beneficios } = useBeneficiosController();

  const editarBeneficio = (Beneficio: IBeneficio) => {
    console.log(Beneficio);
  };

  const removerBeneficio = (Beneficio: IBeneficio) => {
    console.log(Beneficio);
  };

  return (
    <>
      <div className={styles.gradienteAzul}>
        <NavBar />

        <TabelaBeneficios
          beneficios={beneficios}
          onEditar={editarBeneficio}
          onRemover={removerBeneficio}
        />
      </div>
    </>
  );
}