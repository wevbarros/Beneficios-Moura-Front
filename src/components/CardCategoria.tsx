import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import styles from "./CardCategoria.module.css";

export default function CardCategoria({
  title,
  category,
}: {
  title: String;
  category: String;
}) {
  return (
    <Card
      border="1px"
      my={{ base: "2", md: "5", lg: "5" }}
      mx={{ base: "1", md: "5", lg: "5" }}
      width={{ base: "50vw", md: "50vw", lg: "20vw" }}
      height={{ base: "17vh", md: "20vh", lg: "20vh" }}
      borderColor="blackAlpha.400"
    >
      <CardHeader>
        <Heading size="sm" fontWeight="normal">
          {title}
        </Heading>
      </CardHeader>
    </Card>
  );
}
