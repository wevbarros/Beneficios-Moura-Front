import { CardBeneficio, CardSkeleton } from "../cardBeneficioBeneficios";
import { useBeneficiosController } from "../../controllers/BeneficiosController";
import { useRouter } from "next/router";
import { Text, Flex } from "@chakra-ui/react";
import 'animate.css';

import styles from "./styles.module.scss";

export function Beneficios() {
  const router = useRouter();
  const { beneficios } = useBeneficiosController();
  let output;

  if (router.query.cat) {
    output = beneficios.filter(
      (beneficio) => beneficio.categoria == `${router.query.id}`
    );
  } else {
    output = beneficios;
  }

  return (
    <>
      <title>Benefícios - Benefícios Moura</title>
      <Flex className={`${styles.backGround}`}>
          <div className="container min-vh-100 py-5 mt-5 pt-5">
            {router.query.cat ? (
              <Text marginTop={'5'} marginLeft={"5"} fontWeight={"thin"} color={"#fff"}>
                Filtrando por: {router.query.cat}
              </Text>
            ) : (
              <Text marginLeft={"5"} fontWeight={"thin"} color={"#fff"}>
                Listando todos os benefícios
              </Text>
            )}
            {beneficios.length > 0 ? (
              output.map((beneficio) => (
                <CardBeneficio key={Number(beneficio.id)} {...beneficio} />
              ))
            ) : (
              <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </>
            )}
          </div>
      </Flex>
    </>
  );
}
