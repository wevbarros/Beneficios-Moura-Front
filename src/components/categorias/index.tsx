import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import CardCategoria from "../cardCategoria/index";
import styles from './styles.module.scss';
import Link from "next/link";

export function Categorias() {
  return (
    <div className={styles.backGround}>
      <Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          marginTop={"10"}
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={4}
        >
          <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
            <CardCategoria nome="Alimentação" urlImage="" />
          </GridItem>
          <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
            <CardCategoria nome="Mobilidade e Moradia" urlImage="" />
          </GridItem>
          <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
            <CardCategoria nome="Saúde e Seguros" urlImage="" />
          </GridItem>
          <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
            <CardCategoria nome="Educação" urlImage="" />
          </GridItem>
          <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
            <CardCategoria nome="Estilo de Vida" urlImage="" />
          </GridItem>
          <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
            <CardCategoria nome="Benefícios Corporativos" urlImage="" />
          </GridItem>
        </Grid>
        <Text display={{base: "flex", md: "none", lg: "none"}} marginTop={"10"}>
          <Link  href="/">
            <AiOutlineHome size={32}  color="#fff" />
          </Link>
        </Text>
      </Flex>
    </div>
  )
}
