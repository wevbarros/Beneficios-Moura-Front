import { Box, Flex, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex>
        <Box w='100%' h='24' bgGradient='linear(to-r, #1066f2, #3f8df2)'>
        <div className="container">
          <footer>
            <Text marginLeft={'5'} color={"#fff"} fontWeight={"hairline"}>Benefícos Moura 2023 ©</Text>
          </footer>
        </div>
        </Box>
    </Flex>
  );
}

