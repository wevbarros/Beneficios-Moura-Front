import { Box, Flex, Text } from "@chakra-ui/react";

export default function FooterChakra() {
  return (
    <Flex>
        <Box w='100%' h='24' bgGradient='linear(to-r, #1066f2, #3f8df2)'>
        <div className="container">
          <footer>
            <Text color={"#fff"} fontWeight={"hairline"}>Moura Beneficios</Text>
          </footer>
        </div>
        </Box>
    </Flex>
  );
}

