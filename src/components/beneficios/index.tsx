import { useState } from "react";
import {
  Text,
  Flex,
  Button,
  HStack,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { CardBeneficio, CardSkeleton } from "../cardBeneficioBeneficios";
import { useBeneficiosController } from "../../controllers/BeneficiosController";
import { useRouter } from "next/router";
import "animate.css";

import styles from "./styles.module.scss";

export function Beneficios() {
  const router = useRouter();
  const { beneficios } = useBeneficiosController();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  let output;

  if (router.query.cat) {
    output = beneficios.filter(
      (beneficio) => beneficio.categoria == `${router.query.id}`
    );
  } else {
    output = beneficios;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = output.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(output.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = (event: any) => {
    setCurrentPage(Number(event.target.id));
    scrollToTop();
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const handleNextClick = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  return (
    <>
      <title>Benefícios - Benefícios Moura</title>
      <div className={`${styles.backGround}`}>
        <div className="container min-vh-100 py-5 animate__animated animate__fadeInLeftBig">
          {router.query.cat ? (
            <Text
              marginLeft={"5"}
              fontWeight={"thin"}
              color={"#fff"}
              textAlign={"start"}
            >
              Filtrando por: {router.query.cat}
            </Text>
          ) : (
            <Text
              marginLeft={"5"}
              // fontWeight={"thin"}
              fontWeight={"light"}
              fontSize={"20px"}
              color={"#fff"}
              textAlign={"center"}
            >
              Conheça Todos os Benefícios
            </Text>
          )}
          {beneficios.length > 0 ? (
            <>
              {currentItems.map((beneficio) => (
                <CardBeneficio key={Number(beneficio.id)} {...beneficio} />
              ))}
              { output.length > 6 &&
                <Flex justify="center" marginTop={6}>
                  <HStack spacing={2} flexWrap="wrap" maxWidth="100%">
                    <Button
                      disabled={currentPage === 1}
                      onClick={handlePrevClick}
                      leftIcon={<FaChevronLeft />}
                      width={{ base: "4vw", md: "4vw", lg: "1vw" }}
                    ></Button>
                    {pageNumbers.map((number) => (
                      <Button
                        key={number}
                        id={String(number)}
                        onClick={handleClick}
                        bg={currentPage === number ? "blue.500" : ""}
                        color={currentPage === number ? "white" : ""}
                      >
                        {number}
                      </Button>
                    ))}
                    <Button
                      disabled={currentPage === pageNumbers.length}
                      onClick={handleNextClick}
                      rightIcon={<FaChevronRight />}
                      width={{ base: "4vw", md: "4vw", lg: "1vw" }}
                    ></Button>
                  </HStack>
                </Flex>
              }
            </>
          ) : (
            <Flex
              display={"flex"}
              direction={"column"}
              justify="center"
              marginTop={6}
            >
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </Flex>
          )}
        </div>
      </div>
    </>
  );
}
