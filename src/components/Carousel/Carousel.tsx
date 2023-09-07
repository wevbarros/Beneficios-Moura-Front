import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import { Text, Box, Heading, Stack, Flex } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import "animate.css";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Bem-Vindo!",
    text: "O Moura pra Você é um espaço dedicado ao seu bem-estar. Vamos compartilhar os benefícios oferecidos pela Moura aos seus colaboradores e seus familiares, em sinergia com a nossa história e com o nosso jeito de ser, em que fortalecer vínculos garante um futuro melhor.",
    src: "../../../images/carousel/blue.jpg",
    alt: "Background Azul",
  },
];

export function Carousel() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className={styles.carousel}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Box
            backgroundImage={`url(${slide.src})`}
            backgroundSize="cover"
            backgroundPosition="center"
            height="100%"
            display="flex"
            justifyContent={{ base: "center", md: "center" }}
            alignItems="flex-start"
            flexDirection="column"
            padding="20px"
          >
            <Flex
              direction="column"
              align={{ base: "justify"}}
              width={{ base: "100%", md: "70%" }}
              mx={{ base: "auto", md: "2vw"}}
            >
              <Heading
                className="animate__animated animate__fadeInDown"
                fontSize={{
                  base: "6vh",
                  md: "xxx-large",
                  xl: "8xl",
                }}
                color={"#fff"}
                paddingTop="0.5em"
                fontFamily={"Poppins"}
                fontWeight={"semibold"}
                marginTop={{
                  base: "12",
                  md: "12",
                  lg: "5vh",
                  xl: "5vh",
                }}
              >
                {slide.title}
              </Heading>
              <Text
                className="animate__animated animate__fadeInLeftBig"
                fontSize={{
                  base: "medium",
                  lg: "x-large",
                  md: "x-large",
                  xl: "3.6vh",
                }}
                fontWeight={"light"}
                color={"#fff"}
              >
                {slide.text}
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
