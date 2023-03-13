import { CardBeneficio, CardSkeleton } from "../cardBeneficioBeneficios";
import { Footer } from "../cardBeneficioBeneficios/Footer";
import { useBeneficiosController } from "../../controllers/BeneficiosController";
import { useRouter } from "next/router";
import { Text } from "@chakra-ui/react";

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
      <div className={`${styles.backGround}`}>
        <div className="container min-vh-100 py-5">
          {router.query.cat ? (
            <Text marginLeft={"5"} fontWeight={"thin"} color={"#fff"}>
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
      </div>
      <Footer />
    </>
  );
}
