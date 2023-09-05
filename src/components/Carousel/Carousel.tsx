import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import { Text, Box, Heading, Stack } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import 'animate.css';
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Bem-Vindo!",
    text: "O Moura pra Você é um espaço dedicado ao seu bem-estar. Vamos compartilhar os benefícios oferecidos pela Moura aos seus colaboradores e seus familiares, em sinergia com a nossa história e com o nosso jeito de ser, em que fortalecer vínculos garante um futuro melhor. ",
    src: "../../../images/carousel/blue.jpg",
    alt: "Background Azul",
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
                  opacity: "0.2",
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
                width={{ base: "", md: "container.md", lg: "containet.lg", xl: "container.xl" }}
                opacity="0.9"
              >
                <Heading
                  className="animate__animated animate__fadeInDown"
                  fontSize={{ base: "5.4vh", md: "xxx-large", xl: "8xl" }}
                  color={"#fff"}
                  paddingTop="0.5em"
                  fontFamily={"Poppins"}
                  fontWeight={"semibold"}
                  marginTop={{ base: "12", md: "12", lg: "5vh", xl: "5vh" }}
                >
                  {slide.title}
                </Heading>
                <Text className="animate__animated animate__fadeInLeftBig"
                  fontSize={{ base: "medium", lg: "x-large", md: "x-large", xl: "4vh" }}
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
