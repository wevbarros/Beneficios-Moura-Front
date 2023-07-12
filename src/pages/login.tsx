import Link from 'next/link'

import LoginCard from '../components/login/LoginCard'
import styles from '../styles/login.module.scss'

import Input from '../components/input_login/input'
import { Button, Stack } from '@chakra-ui/react'
import React, { ChangeEvent, useState } from 'react';

import axios from 'axios'

export default function LoginPage() {
    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    const axios = require('axios');

    interface FormState {
        [key: string]: string;
      }
        const [formState, setFormState] = useState<FormState>({});
      
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
          const { name, value } = event.target;
          setFormState((prevState) => ({ ...prevState, [name]: value }));
        };


    let config = {

        method: 'post',

        maxBodyLength: Infinity,

        url: 'https://gc.moura.com.br/auth',

        headers: {

            'Authorization': 'Basic ZGV2LXRlc3RlQGdydXBvbW91cmEuY29tOmwjdTBOYzloR00lQjA2TDg=',
            'user': {user},
            'pass': {pass}

        }

    };
    axios.request(config)

        .then((response:any) => {

            console.log(JSON.stringify(response.data));

        })

        .catch((error:any) => {

            console.log(error);

        });

    return (
        <div className={styles.gradienteAzul}>
            <div className={styles.imageContainer}>
                {/* Adicione aqui o elemento da imagem */}
                <img src="../../images/logo_login.png" alt="Imagem" />
            </div>
            <LoginCard title='Faça seu Login'>
                <h5 className={styles.subtitle}>Aproveite o que só o Grupo Moura te oferece!</h5>
                <form className={styles.form}>
                    <Input type="text" placeholder="Matrícula" value={user} name='user' onChange={handleChange} />
                    <Input type="password" placeholder="Senha" value={pass} name='pass' onChange={handleChange}/>
                    <Link href='' className={styles.recoveryLink}>Recuperação de Senha</Link>
                    <Stack spacing={4} direction='row' align='center' justify='center' className={styles.buttonContainer}>
                        <Button rounded={"92"} bg="#0D1740" colorScheme='none' size='md' width="180px" height="45px">
                            Entrar
                        </Button>
                    </Stack>
                </form>
            </LoginCard>
        </div>
    )
}

