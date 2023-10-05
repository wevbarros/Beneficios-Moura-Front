import { Button, Card, CardBody, CardHeader, Heading, Text, Stack, Skeleton, Box, Collapse, Flex } from "@chakra-ui/react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import styles from "./styles.module.scss";
import { IBeneficio } from "../../dtos/IBeneficio";
import { useState } from "react";

export function ListaGerencial(IBeneficio: IBeneficio) {
  const [show, setShow] = useState(false);
  const [isChevronUp, setIsChevronUp] = useState(false);
  const handleToggle = () => setShow(!show);
  const chevronIcon = isChevronUp ? <HiChevronUp className={styles.alignCenter} /> : <HiChevronDown className={styles.alignCenter} />;

  return (
    <Card border={'1px'} overflow={"hidden"} rounded={'3xl'} my="10" mx="5" bgColor={'#007DCE'} borderColor={'#fff'}>
      <Box bgRepeat={'no-repeat'} backgroundSize={'cover'} >
        <CardHeader>
          <Heading size="xl" fontWeight="normal" color={'#fff'} textAlign={'center'}>
            {IBeneficio.nome}
          </Heading>
        </CardHeader>
        <CardBody mt="-8" >
          <Collapse startingHeight={0} in={show}> 
            <Text color={'#fff'} textAlign={'justify'}>{IBeneficio.descricao}</Text>
          </Collapse>
            <Button  onClick={() => {
              handleToggle();
              setIsChevronUp(!isChevronUp);
            }} 
            className={styles.BlueButton} mt="2" colorScheme={"white"} variant="outline" rounded="3xl" display={'block'}>
              {chevronIcon}
            </Button>
        </CardBody>
      </Box>
    </Card>
  );
}


export function CardSkeleton() {
  return (
    <Card border="1px" my="10" mx="5" height={'52'} borderColor="blackAlpha.100">
      <Stack marginLeft={{base: "10", md: "10", lg: "10"}} marginTop="5" marginBottom="5">
        <Skeleton height="30px" width="60%" startColor='gray.200' endColor='gray.400' />
        <Skeleton height="20px" width="70%" startColor='gray.200' endColor='gray.400' />
        <Skeleton height="20px" width="70%" startColor='gray.200' endColor='gray.400' />
        <Button rounded="full" width="28" />
      </Stack>
    </Card>
  );
}