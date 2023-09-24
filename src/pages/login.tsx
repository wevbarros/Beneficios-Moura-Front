import Link from "next/link";

import LoginCard from "../components/login/LoginCard";
import styles from "../styles/login.module.scss";

import Input from "../components/input_login/input";
import { Button, FormControl, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../auth/auth";
import Swal from 'sweetalert2';

export default function LoginPage() {
  const { login } = useAuth();
  const [matricula, setMatricula] = useState("");
  const [password, setpassWord] = useState("");

  const hancleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      email: matricula,
      password: password,
    };

    login(data.email, data.password).then((response) => {
      if (!response) {
        Swal.fire({
          icon: 'error',
          title: 'Oops... :(',
          text: 'Email ou senha incorretos!',
          timer: 5000,
          showConfirmButton: true,
        })
      }
    });
  };

  return (
    <div className={styles.gradienteAzul}>
      <div className={styles.imageContainer}>
        <img src="../../images/logo_login.png" alt="Imagem" />
      </div>
      <LoginCard title="Faça seu Login">
        <h5 className={styles.subtitle}>
          Aproveite o que só o Grupo Moura te oferece!
        </h5>
        <form className={styles.form}>
          <FormControl isRequired>
            <Input
              type="text"
              placeholder="Email"
              onChange={(e) => setMatricula(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              type="password"
              placeholder="Senha"
              onChange={(e) => setpassWord(e.target.value)}
            />
          </FormControl>
          <Link href="" className={styles.recoveryLink}>
            Recuperação de Senha
          </Link>
          <Stack
            spacing={4}
            direction="row"
            align="center"
            justify="center"
            className={styles.buttonContainer}
          >
            <Button
              rounded={"92"}
              bg="#0D1740"
              colorScheme="none"
              size="md"
              width="180px"
              height="45px"
              onClick={hancleSubmit}
            >
              Entrar
            </Button>
          </Stack>
        </form>
      </LoginCard>
    </div>
  );
}
