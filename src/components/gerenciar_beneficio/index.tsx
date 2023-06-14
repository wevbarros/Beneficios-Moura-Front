import NavBar from "../NavBar";
import styles from './gerenciar_beneficio.module.scss';

import { Button, Stack} from '@chakra-ui/react';




interface GerenciarProps {
  title: string;
}

export default function Gerenciar({ title }: GerenciarProps) {
  return (
    <div className={styles.gradienteAzul}>
      <NavBar />
      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <Stack spacing={4} direction='row' align='flex-start' justify='flex-start' className={styles.buttonContainer}>
          <Button bg="#0D1740" colorScheme='none' size='md' width="180px" height="45px">
            Adicionar Benefício
          </Button>
        </Stack>
       
      </div>
    </div>
  );
}


