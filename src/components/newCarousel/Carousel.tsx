import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import { Text, Flex, Box, Heading, Stack } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "TotalPass",
    text: "Bem-vindos ao mundo mágico do TotalPass! Aqui, cuidamos da saúde e do bem-estar dos nossos colaboradores e seus dependentes com muito carinho e dedicação.",
    src: "/images/carousel/totalpass.jpg",
    alt: "Imagem 1",
  },
  {
    id: 2,
    title: "Cesta Básica",
    text: "Prêmio mensal super especial para nossos colaboradores, agora a composição dos alimentos da cesta é feita de forma totalmente personalizada para cada unidade ou distribuição.",
    src: "/images/carousel/valerefeicao.jpg",
    alt: "Imagem 2",
  },
  {
    id: 3,
    title: "Material Escolar",
    text: "Bem-vindo(a) ao mundo encantado do Material Escolar Mágico! Todo ano, um cartão especial é preparado com muito carinho para nossos jovens aprendizes.",
    src: "/images/carousel/kitescolar.jpg",
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
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Box
              key={index}
              height={{base: "sm", md: "md", lg: "lg", xl: "xl"}}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${slide.src})`}
            >
              <Stack marginLeft={{base: "10", xl: "80"}} width={{base: "72", xl: "2xl"}}>
                <Heading fontSize={{base: "4xl", xl: "8xl"}} color={"#fff"}>{slide.title}</Heading>
                <Text fontSize={{base: "medium", xl: "xl"}} color={"#fff"}>{slide.text}</Text>
              </Stack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
