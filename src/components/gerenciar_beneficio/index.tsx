import { useState } from "react";
import NavBar from "../NavBar";
import { FormCadastrarBeneficio } from "../formCadastrarBeneficio";
import styles from "./gerenciar_beneficio.module.scss";
import { CardBeneficio } from "../cardBeneficioHome";
import { Button, Stack } from "@chakra-ui/react";
import error from "next/error";

interface GerenciarProps {
  title: string;
}

export default function Gerenciar({ title }: GerenciarProps) {
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
            <FormCadastrarBeneficio />
          </Stack>
        </div>
      </div>
    </>
  );
}
