import { Button, Card, CardBody, CardHeader, Heading, Text, Stack, Skeleton } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles.module.scss";

export function CardBeneficio({ id, title, description }: { id: Number; title: String; description: String }) {
  return (
    <Card border="1px" my="10" mx="5" borderColor="blackAlpha.400">
      <CardHeader>
        <Heading size="sm" fontWeight="normal">
          {title}
        </Heading>
      </CardHeader>
      <CardBody mt="-8">
        <Text>{description}</Text>
          <Link href={`beneficio/${id}`}>
            <Button className={styles.BlueButton} mt="2" colorScheme={"blue"} variant="outline" rounded="3xl">Acessar</Button>
          </Link>
      </CardBody>
    </Card>
  );
}

export function CardSkeleton() {
  return (
    <Card border="1px" my="10" borderColor="blackAlpha.100">
      <Stack marginLeft="1%" marginTop="5" marginBottom="5">
        <Skeleton height="20px" width="60%" startColor='gray.200' endColor='gray.400' />
        <Skeleton height="20px" width="70%" startColor='gray.200' endColor='gray.400' />
        <Button rounded="full" width="28" />
      </Stack>
    </Card>
  );
}