import { Box, Flex, Text } from "@chakra-ui/react";

export default function FooterChakra() {
  return (
    <Flex>
        <Box w='100%' h='24' bgGradient='linear(to-r, #af3ffb, #dc43b9)'>
        <div className="container">
          <footer>
            <Text color={"#fff"} fontWeight={"hairline"}>Moura Beneficios</Text>
          </footer>
        </div>
        </Box>
    </Flex>
  );
}

