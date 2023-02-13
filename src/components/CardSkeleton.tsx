import { Stack, Skeleton, Button, Card } from "@chakra-ui/react";

export default function CardSkeleton() {
  return (
    <Card border="1px" my="10" borderColor="blackAlpha.100">
      <Stack marginLeft="1%" marginTop="5" marginBottom="5">
        <Skeleton height="20px" width="60%" startColor='gray.200' endColor='gray.400' />
        <Skeleton height="20px" width="70%" startColor='gray.200' endColor='gray.400' />
        <Button rounded="full" width="28" />
      </Stack>
    </Card>
  );
}
