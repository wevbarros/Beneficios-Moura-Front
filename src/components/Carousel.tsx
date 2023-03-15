import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

import Image from "next/image";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "TotalPass",
      text: "Bem-vindos ao mundo mágico do TotalPass! Aqui, cuidamos da saúde e do bem-estar dos nossos colaboradores e seus dependentes com muito carinho e dedicação.",
      image:
        '/images/carousel/totalpass.jpg',
    },
    {
      title: "Cesta Básica",
      text: "Prêmio mensal super especial para nossos colaboradores, agora a composição dos alimentos da cesta é feita de forma totalmente personalizada para cada unidade ou distribuição.",
      image:
      '/images/carousel/valerefeicao.jpg',
    },
    {
      title: "Material Escolar",
      text: "Bem-vindo(a) ao mundo encantado do Material Escolar Mágico! Todo ano, um cartão especial é preparado com muito carinho para nossos jovens aprendizes.",
      image:
      '/images/carousel/kitescolar.jpg',
    },
  ];

  return (
    <Box
      position={"relative"}
      height={{ base: "60vh", md: "65vh", lg: "60vh" }}
      width={"full"}
      overflowY={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" color="#fff" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" color="#fff" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"2xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
         >
            {/* This is the block you need to change, to customize the caption */}
            <Container
              size="container.lg"
              height="600px"
              position="relative"
              marginTop="-44"
            >
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                right={{ base: "3xl", md: "4xl", lg: "30%", xl: "76%" }}
                transform="translate(0, -50%)"
              >
                <Heading
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "7xl" }}
                  color={{ base: "#fff", md: "#fff", lg: "", xl: "#fff" }}
                  alignSelf={{ base: "center", md: "baseline", lg: "", xl: "baseline" }}
                  width={{ base: "full", md: "full", lg: "", xl: "5xl" }}
                  marginTop={{ base: "16", md: "0", lg: "", xl: "0" }}
                >
                  {card.title}
                </Heading>
                  <Text fontSize={{ base: "xl", md: "md", lg: "xl", xl: "lg" }} color="#fff">
                    {card.text}
                  </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

//do a horizontal infinite scroll
