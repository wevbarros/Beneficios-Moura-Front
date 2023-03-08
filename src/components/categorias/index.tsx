import { Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import CardCategoria from "../cardCategoria/index";
import styles from './styles.module.scss';

export function Categorias() {
  return (
    <>
<Flex
  display="flex"
  flexDirection="column"
  alignItems="center"
  justifyContent="center"
  width="full"
  height="full"
>
  <Grid
    alignItems=""
    marginTop="10"
    templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }}
    gap={4}
  >
    <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
      <CardCategoria nome="Alimentação" urlImage="" />
    </GridItem>
    <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
      <CardCategoria nome="Saude" urlImage="" />
    </GridItem>
    <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
      <CardCategoria nome="Bem estar" urlImage="" />
    </GridItem>
    <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
      <CardCategoria nome="Auto" urlImage="" />
    </GridItem>
    <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
      <CardCategoria nome="Educação" urlImage="" />
    </GridItem>
    <GridItem my={{ md: "6", lg: "10" }} px={{md: "10" , lg: "24"}}>
      <CardCategoria nome="Alimentação" urlImage="" />
    </GridItem>
  </Grid>
</Flex>


    </>
  )
}