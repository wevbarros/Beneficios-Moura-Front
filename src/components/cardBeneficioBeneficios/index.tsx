import { Button, Card, CardBody, CardHeader, Heading, Text, Stack, Skeleton, Box, Collapse } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { IBeneficio } from "../../dtos/IBeneficio";
import React from "react";

// export function CardBeneficio(IBeneficio: IBeneficio) {
//   return (
//     <Card border="1px" my="10" mx="5" borderColor="blackAlpha.400">
//       <CardHeader>
//         <Heading size="xl" fontWeight="normal">
//           {IBeneficio.nome}
//         </Heading>
//       </CardHeader>
//       <CardBody mt="-8">
//         <Text>{IBeneficio.descricao}</Text>
//           <Link href={`beneficio/${IBeneficio.id}`}>
//             <Button className={styles.BlueButton} mt="2" colorScheme={"blue"} variant="outline" rounded="3xl">Acessar</Button>
//           </Link>
//       </CardBody>
//     </Card>
//   );
// }

export function CardBeneficio(IBeneficio: IBeneficio) {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Card border={'1px'} overflow={"hidden"} rounded={'3xl'} my="10" mx="5" borderColor="blackAlpha.400">
      <Box backgroundImage={IBeneficio.urlImage}>
        <CardHeader>
          <Heading size="xl" fontWeight="normal" color={'#fff'}>
            {IBeneficio.nome}
          </Heading>
        </CardHeader>
        <CardBody mt="-8">
          <Collapse startingHeight={0} in={show}> 
            <Text color={'#fff'}>{IBeneficio.descricao}</Text>
          </Collapse>
            <Button onClick={handleToggle} className={styles.BlueButton} mt="2" colorScheme={"white"} variant="outline" rounded="3xl">Acessar</Button>
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