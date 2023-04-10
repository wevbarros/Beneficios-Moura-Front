import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import { Text, Box, Heading, Stack } from "@chakra-ui/react";
import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "TotalPass",
    text: "A TotalPass é o Benefício que dá Foco Total para a Saúde Física e Mental. Comece Hoje!",
    src: "https://beneficiosmourastorage.blob.core.windows.net/content-beneficios-moura/totalpasscover.jpg",
    alt: "Imagem 1",
  },
  {
    id: 2,
    title: "Cesta Básica",
    text: "Cesta basica todos os meses para você e sua família. Aproveite e faça parte da família Mágica",
    src: "https://beneficiosmourastorage.blob.core.windows.net/content-beneficios-moura/bolsaalimentacao.jpg",
    alt: "Imagem 2",
  },
  {
    id: 3,
    title: "Material Escolar",
    text: "Material escolar para seus filhos. Aproveite e faça parte da família Mágica",
    src: "https://beneficiosmourastorage.blob.core.windows.net/content-beneficios-moura/kitescolar.jpg",
    alt: "Imagem 3",
  },
];

export function Carousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        className={styles.bgCarousel}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Box
              key={index}
              height={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
              position="relative"
            >
              <div
                className={styles.bgCarousel}
                style={{
                  backgroundImage: `url(${slide.src})`,
                  opacity: "0.4",
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Stack
                alignItems={{
                  base: "flex-start",
                  md: "flex-start",
                  lg: "flex-start",
                  xl: "flex-start",
                }}
                marginLeft={{ base: "5", md: "10", lg: "12", xl: "10vw" }}
                width={{ base: "", md: "xl", xl: "container.xl" }}
                opacity="0.9"
              >
                <Heading
                  fontSize={{ base: "5.4vh", md: "xxx-large", xl: "8xl" }}
                  color={"#fff"}
                  paddingTop="0.5em"
                  fontFamily={"Poppins"}
                  fontWeight={"semibold"}
                  marginTop={{ base: "12", md: "12", lg: "5vh", xl: "5vh" }}
                >
                  {slide.title}
                </Heading>
                <Text
                  fontSize={{ base: "x-large", md: "x-large", xl: "50" }}
                  fontWeight={"light"}
                  color={"#fff"}
                >
                  {slide.text}
                </Text>
              </Stack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

/*
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import { Text, Box, Heading, Stack } from "@chakra-ui/react";
import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "TotalPass",
    text: "A TotalPass é o Benefício que dá Foco Total para a Saúde Física e Mental. Comece Hoje!",
    src: "https://beneficiosmourastorage.blob.core.windows.net/content-beneficios-moura/totalpasscover.jpg",
    alt: "Imagem 1",
  },
  {
    id: 2,
    title: "Cesta Básica",
    text: "Cesta basica todos os meses para você e sua família. Aproveite e faça parte da família Mágica",
    src: "https://beneficiosmourastorage.blob.core.windows.net/content-beneficios-moura/bolsaalimentacao.jpg",
    alt: "Imagem 2",
  },
  {
    id: 3,
    title: "Material Escolar",
    text: "Material escolar para seus filhos. Aproveite e faça parte da família Mágica",
    src: "https://beneficiosmourastorage.blob.core.windows.net/content-beneficios-moura/kitescolar.jpg",
    alt: "Imagem 3",
  },
];

export function Carousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        className={styles.bgCarousel}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Box
              key={index}
              height={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
              position="relative"
            >
              <div
                className={styles.bgCarousel}
                style={{
                  backgroundImage: `url(${slide.src})`,
                  opacity: "0.4",
                  height: "62vh",
                  width: "100vw",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Stack
                alignItems={{
                  base: "center",
                  md: "flex-start",
                  lg: "flex-start",
                  xl: "flex-start",
                }}
                marginLeft={{ base: "10", md: "40", lg: "80", xl: "xl" }}
                width={{ base: "80", md: "xl", xl: "container.xl" }}
                opacity="0.9"
              >
                <Heading
                  fontSize={{ base: "5xl", xl: "8xl" }}
                  color={"#fff"}
                  paddingTop="0.5em"
                  fontFamily={"Poppins"}
                  fontWeight={"semibold"}
                  marginTop={{ base: "base", md: "md", lg: "lg", xl: "xl" }}
                >
                  {slide.title}
                </Heading>
                <Text
                  fontSize={{ base: "x-large", xl: "40" }}
                  fontWeight={"light"}
                  color={"#fff"}
                >
                  {slide.text}
                </Text>
              </Stack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
*/
