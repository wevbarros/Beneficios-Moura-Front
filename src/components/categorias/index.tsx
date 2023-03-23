import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import CardCategoria from "../cardCategoria/index";
import styles from './styles.module.scss';
import Link from "next/link";

export function Categorias() {
  return (
    <>
      <title>Categorias - Benefícios Moura</title>
      <div className={styles.container}>
        <Flex
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            marginTop={"0"}
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={4}
          >
            <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
              <CardCategoria nome="Alimentação" id={'1'} urlImage="/images/categorias/alimentacao.webp" />
            </GridItem>
            <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
              <CardCategoria nome="Mobilidade e Moradia" id={'2'} urlImage="/images/categorias/mobilidade_moradia.webp" />
            </GridItem>
            <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
              <CardCategoria nome="Saúde e Seguros" id={'3'} urlImage="/images/categorias/saude_seguros.webp" />
            </GridItem>
            <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
              <CardCategoria nome="Educação" id={'4'} urlImage="/images/categorias/educacao.webp" />
            </GridItem>
            <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
              <CardCategoria nome="Estilo de Vida" id={'5'} urlImage="/images/categorias/estilo_vida.webp" />
            </GridItem>
            <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
              <CardCategoria nome="Benefícios Corporativos" id={'6'} urlImage="/images/categorias/corporativos.webp" />
            </GridItem>
          </Grid>
          <Text display={{base: "flex", md: "none", lg: "none"}} marginTop={"10"}>
            <Link  href="/">
              <AiOutlineHome size={32}  color="#fff" />
            </Link>
          </Text>
        </Flex>
      </div>
    </>
  )
}
