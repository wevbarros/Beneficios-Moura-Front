import { Flex } from "@chakra-ui/react";
import CardCategoria from "../CardCategoria";
import styles from './styles.module.scss';

export function Categorias() {
  return (
    <Flex className={styles.containerCategorias}>
      <Flex className={styles.listaCategorias}>
        <CardCategoria nome={"Alimentação"} urlImage={""}/>
        <CardCategoria nome={"Alimentação"} urlImage={""}/>
        <CardCategoria nome={"Alimentação"} urlImage={""}/>
        <CardCategoria nome={"Alimentação"} urlImage={""}/>
        <CardCategoria nome={"Alimentação"} urlImage={""}/>
      </Flex>
      <Flex className={styles.listaCategorias}>
        <CardCategoria nome={"Alimentação"} urlImage={""}/>
        <CardCategoria nome={"Alimentação"} urlImage={""}/>
        <CardCategoria nome={"Alimentação"} urlImage={""}/>
        <CardCategoria nome={"Alimentação"} urlImage={""}/>
        <CardCategoria nome={"Alimentação"} urlImage={""}/>
      </Flex>
  </Flex>
  )
}