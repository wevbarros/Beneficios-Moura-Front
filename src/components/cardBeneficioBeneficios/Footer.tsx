import { Box, Flex, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex>
        <Box w='100%' h='24' bgGradient='linear(to-r, #1066f2, #3f8df2)'>
        <div className="container">
          <footer>
            <Text color={"#fff"} fontWeight={"hairline"}>Footer</Text>
          </footer>
        </div>
        </Box>
    </Flex>
  );
}

