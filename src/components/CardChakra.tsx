import { Button, Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./CardChakra.module.css";

export default function CardChakra({ id, title, description }: { id: Number; title: String; description: String }) {
  return (
    <Card border="1px" my="10" borderColor="blackAlpha.400">
      <CardHeader>
        <Heading size="sm" fontWeight="normal">
          {title}
        </Heading>
      </CardHeader>
      <CardBody mt="-8">
        <Text>{description}</Text>
          <Link href={`beneficio/${id}`}>
            <Button className={styles.pinkButton} mt="2" colorScheme={"pink"} variant="outline" rounded="3xl">Acessar</Button>
          </Link>
      </CardBody>
    </Card>
  );
}

// como criar uma fake api com