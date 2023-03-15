import { Button, Card, CardBody, CardHeader, Heading, Text, Stack, Skeleton } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { IBeneficio } from "../../dtos/IBeneficio";

export function CardBeneficio(IBeneficio: IBeneficio) {
  return (
    <Card border="1px" my="10" mx="5" borderColor="blackAlpha.400">
      <CardHeader>
        <Heading size="xl" fontWeight="normal">
          {IBeneficio.nome}
        </Heading>
      </CardHeader>
      <CardBody mt="-8">
        <Text>{IBeneficio.descricao}</Text>
          <Link href={`beneficio/${IBeneficio.id}`}>
            <Button className={styles.BlueButton} mt="2" colorScheme={"blue"} variant="outline" rounded="3xl">Acessar</Button>
          </Link>
      </CardBody>
    </Card>
  );
}

export function CardSkeleton() {
  return (
    <Card border="1px" my="10" mx="5" height={'52'} borderColor="blackAlpha.100">
      <Stack marginLeft={{base: "10", md: "10", lg: "10"}} marginTop="5" marginBottom="5">
        <Skeleton height="30px" width="60%" startColor='gray.200' endColor='gray.400' />
        <Skeleton height="20px" width="70%" startColor='gray.200' endColor='gray.400' />
        <Skeleton height="20px" width="70%" startColor='gray.200' endColor='gray.400' />
        <Button rounded="full" width="28" />
      </Stack>
    </Card>
  );
}