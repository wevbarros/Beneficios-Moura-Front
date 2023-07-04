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
    title: "Bem-Vindo!",
    text: " Este é o “Moura pra Você” - um espaço dedicado ao seu bem-estar. Vamos compartilhar os benefícios oferecidos pela Moura aos seus colaboradores e seus familiares, em sinergia com a nossa história e com o nosso jeito de ser, em que fortalecer vínculos garante um futuro melhor.",
    src: "../../images/carousel/background1.jpg",
    alt: "Imagem aleatória",
  },
  {
    id: 2,
    title: "TotalPass",
    text: " Aqui você será direcionado para um aplicativo voltado para a sua saúde e bem-estar, bem como dos seus dependentes.",
    src: "https://beneficiosmourastorage.blob.core.windows.net/content-beneficios-moura/totalpasscover.jpg",
    alt: "Uma mulher treinando na academia",
  },
  {
    id: 3,
    title: "Cesta Básica",
    text: "Prêmio mensal disponível para funcionários conforme resultados de sua respectiva Unidade.",
    src: "https://beneficiosmourastorage.blob.core.windows.net/content-beneficios-moura/bolsaalimentacao.jpg",
    alt: "Uma mesa posta para o almoço",
  },
  {
    id: 4,
    title: "Material Escolar",
    text: "Acreditamos que a educação é um grande agente de transformação, por isso, todos os anos, incentivamos os estudos dos filhos dos nossos colaboradores.",
    src: "https://beneficiosmourastorage.blob.core.windows.net/content-beneficios-moura/kitescolar.jpg",
    alt: "Itens esolares",
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
                marginLeft={{ base: "5", md: "10", lg: "12", xl: "5vw" }}
                marginRight={{ base: "5", md: "10", lg: "12", xl: "5vw" }}
                width={{ base: "", md: "xl", lg: "containet.lg", xl: "container.xl" }}
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
                  fontSize={{ base: "2vh", lg: "3.5vh", md: "3.5vh", xl: "3vh" }}
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
