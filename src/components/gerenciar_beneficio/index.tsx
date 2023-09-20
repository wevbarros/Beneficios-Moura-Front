import { useState } from "react";
import NavBar from "../NavBar";
import { FormCadastrarBeneficio } from "../formCadastrarBeneficio";
import { ListaGerencial } from "../listaGerencial/"
import styles from "./gerenciar_beneficio.module.scss";
import { Button, Stack } from "@chakra-ui/react";
import error from "next/error";
import { Beneficios } from "../beneficios"
import ListaEdicao from "../edit_list";


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
            <ListaEdicao />
        </div>
      </div>
    </>
  );
}
