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
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${slide.src})`}
              opacity="0.4"
            >
              <Stack
                alignItems={{ base: "center", md: "flex-start", lg: "flex-start", xl: "flex-start" }}
                marginLeft={{ base: "10", md: "40", lg: "28", xl: "xl" }}
                width={{ base: "80", md: "xl", xl: "container.xl" }}
              >
                <Heading
                  marginLeft={{ base: "0", md: "-20", lg: "lg", xl: "xl" }}
                  fontSize={{ base: "5xl", xl: "8xl" }}
                  color={"#fff"}
                  paddingTop="0.5em"
                  fontFamily={"Poppins"}
                  fontWeight={"semibold"}
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
