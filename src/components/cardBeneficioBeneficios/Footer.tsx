import { Box, Flex, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex>
        <Box w='100%' h='8' bgColor={"#fff"}>
        <div className="container">
          <footer className="rodape">
            <Text textAlign={"center"} color={"#182a74"} fontWeight={"semibold"}>Um Projeto MouraTECH ©</Text>
          </footer>
        </div>
        </Box>
    </Flex>
  );
}

