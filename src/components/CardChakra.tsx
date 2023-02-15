import { Button, Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./CardChakra.module.css";

export default function CardChakra({ id, title, description }: { id: Number; title: String; description: String }) {
  return (
    <Card border="1px" my="5" mx="5" width="20vw" height="10vhs" borderColor="blackAlpha.400">
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

// como criar uma fake api com