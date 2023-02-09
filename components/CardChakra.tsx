import { Button, Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import styles from "./CardChakra.module.css";

export default function CardChakra({ title, description }: { title: String; description: String }) {
  return (
    <Card border="1px" my="10" borderColor="blackAlpha.400">
      <CardHeader>
        <Heading size="sm" fontWeight="normal">
          {title}
        </Heading>
      </CardHeader>
      <CardBody mt="-8">
        <Text>{description}</Text>
        <Button className={styles.cardButton} mt="2" colorScheme={"pink"} variant="outline" rounded="3xl">
          <Text fontWeight="normal">Acessar</Text>
        </Button>
      </CardBody>
    </Card>
  );
}

// como criar uma fake api com