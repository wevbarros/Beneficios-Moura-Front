import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Grid,
} from "@chakra-ui/react";
import { IBeneficio } from "../../dtos/IBeneficio";
import { FormCadastrarBeneficio } from "../formCadastrarBeneficio";

interface TabelaBeneficiosProps {
  beneficios: IBeneficio[];
  onEditar: (Beneficio: IBeneficio) => void;
  onRemover: (Beneficio: IBeneficio) => void;
}

const BeneficiosPorPagina = 8;

const TabelaBeneficios: React.FC<TabelaBeneficiosProps> = ({
  beneficios,
  onEditar,
  onRemover,
}) => {
  const [paginaAtual, setPaginaAtual] = useState(1);

  const indiceInicial = (paginaAtual - 1) * BeneficiosPorPagina;
  const beneficiosDaPagina = beneficios.slice(
    indiceInicial,
    indiceInicial + BeneficiosPorPagina
  );

  const totalPages = Math.ceil(beneficios.length / BeneficiosPorPagina);

  const handleChangePagina = (pagina: number) => {
    setPaginaAtual(pagina);
  };

  const getCategoryLetter = (categoria: Number) => {
    switch (categoria) {
      case 1:
        return "Para Você Estar Lado a Lado";
      case 2:
        return "Para Você Ficar Bem";
      case 3:
        return "Para Você Economizar";
      case 4:
        return "Para Você Ficar Saudável";
      default:
        return "N/A";
    }
  };

  return (
    <Flex direction="column" alignItems="center" padding={"52"}>
      <Box bg="#fff" borderRadius="lg" overflowX="auto" p={4} width={"80vw"}>
        <Grid marginLeft={"5"} marginTop={"5"} templateColumns="repeat(3, 1fr)">
          <FormCadastrarBeneficio />
          <Heading size="lg" marginBottom="2" justifySelf={"center"}>
            Gerenciar Beneficios
          </Heading>
        </Grid>
        <Box
          bgColor={""}
          padding={"0"}
          margin={"5"}
          rounded={"10"}
          marginTop={"10"}
        >
          <Table variant="simple" colorScheme="white">
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Categoria</Th>
                <Th>Descrição</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {beneficiosDaPagina.map((beneficio) => (
                <Tr key={Number(beneficio.id)}>
                  <Td>{beneficio.nome}</Td>
                  <Td>{getCategoryLetter(Number(beneficio.categoria))}</Td>
                  <Td>{beneficio.descricao}</Td>
                  <Td>
                    <Button
                      colorScheme="teal"
                      onClick={() => onEditar(beneficio)}
                    >
                      Editar
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => onRemover(beneficio)}
                    >
                      Remover
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Flex bgColor={"white"} justifyContent={"center"} marginTop={"1vh"}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Button
              key={index}
              onClick={() => handleChangePagina(index + 1)}
              colorScheme={paginaAtual === index + 1 ? "teal" : "gray"}
              margin={1}
            >
              {index + 1}
            </Button>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default TabelaBeneficios;
