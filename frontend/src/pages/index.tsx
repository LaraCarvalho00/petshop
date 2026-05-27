import {
  Alert,
  AlertIcon,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Image
} from "@chakra-ui/react";
import { BestPetshopForm } from "../components/best-petshop-form.component";
import axios from "axios";
import { CalculateRequest, CalculateResponse } from "../types/api";
import { useState } from "react";

export const IndexPage = () => {
  const [result, setResult] = useState<CalculateResponse | null>(null);

  const calculate = async (data: CalculateRequest) => {
    // TODO(code-review): adicionar loading e tratamento de erro daria feedback ao usuario durante falhas na API.
    const { bigDogs, smallDogs, date } = data;
    const res = await axios.post<CalculateResponse>(
      // TODO(code-review): validar VITE_BACKEND_URL ou fornecer fallback local evita chamadas para undefined/calculate-petshop.
      `${import.meta.env.VITE_BACKEND_URL}/calculate-petshop`,
      {
        bigDogs,
        smallDogs,
        date: new Date(date).toISOString().substring(0, 10),
      } as CalculateRequest
    );

    setResult(res.data);
  };

  return (
    <Container justifyContent="center" maxW="container.xl">
      <Flex gap={4} flexDir="column" height={"100vh"} justify="center">
      <Image
  src="/pet.png"
  alt="dog"
  width="300"
  height="300"
  mx="auto" 
  maxHeight="300px"
/>
        <Heading>Canil do Sr. Eduardo</Heading>
        <Text fontSize="2xl" mb={10}>
          {/* TODO(code-review): corrigir encoding dos textos para UTF-8 melhora a apresentacao da interface. */}
          Utilize o formulário abaixo para descobrir qual o melhor petshop para
          levar os dogs :)
        </Text>
        <BestPetshopForm onSubmit={calculate} />
        {result && (
          <Stack spacing={3} mt={10}>
            <Alert status="success">
              <AlertIcon /> O melhor petshop para levar os dogs é o{" "}
              {result.petshop.name}, custando R$
              {(result.totalPrice / 100).toFixed(2)}
            </Alert>
          </Stack>
        )}
      </Flex>
    </Container>
  );
};
