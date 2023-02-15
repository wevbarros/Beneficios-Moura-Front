import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

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
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://listenx.com.br/blog/wp-content/uploads/2020/01/original-81f15d95efad8c272364a18694ef916d-1200x675.jpeg",
    },
    {
      title: "Vale refeição",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://listenx.com.br/blog/wp-content/uploads/2020/01/original-81f15d95efad8c272364a18694ef916d-1200x675.jpeg",
    },
    {
      title: "Cesta Básica",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://www.selecoes.com.br/media/_versions/legacy/0/8/314d6c06a732cd4667940157590a62532e3b1930_widexl.jpg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"60vh"}
      width={"full"}
      overflow={"hidden"}
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
        <BiLeftArrowAlt size="40px" />
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
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
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
                right={{ base: "3xl", md: "4xl", lg: "76%" }}
                transform="translate(0, -50%)"
              >
                <Heading
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  color="#fff"
                  alignSelf={{ base: "center", md: "baseline", lg: "baseline" }}
                >
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "2xl", lg: "lg" }} color="#fff">
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
