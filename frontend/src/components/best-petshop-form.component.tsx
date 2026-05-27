import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { CalculateRequest } from "../types/api";

type Props = {
  onSubmit: (data: CalculateRequest) => void;
};

export const BestPetshopForm: FunctionComponent<Props> = ({ onSubmit }) => {
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [bigDogs, setBigDogs] = useState(0);
  const [smallDogs, setSmallDogs] = useState(0);

  // TODO(code-review): validar que ao menos um cachorro foi informado antes do submit evita chamadas sem sentido ao backend.
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleBigDogsChange = (_: string, value: number) => {
    // TODO(code-review): normalizar NaN quando o campo numerico ficar vazio evita enviar dados invalidos.
    setBigDogs(value);
  };

  const handleSmallDogsChange = (_: string, value: number) => {
    setSmallDogs(value);
  };

  const handleSubmit = () => {
    // TODO(code-review): bloquear envio com zero cachorros evita chamadas sem sentido ao backend.
    onSubmit({
      bigDogs,
      smallDogs,
      date: date,
    });
  };

  return (
    <>
      {/* TODO(code-review): usar um form com onSubmit melhoraria acessibilidade e permitiria envio pelo Enter. */}
      <Box
        as={Flex}
        align="center"
        flexDir={{
          base: "column",
          lg: "row",
        }}
        gap={4}
      >
        <FormControl>
          <FormLabel>Data</FormLabel>
          <Input
            size="md"
            type="date"
            value={date}
            onChange={handleDateChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Cachorros Grandes</FormLabel>
          <NumberInput value={bigDogs} onChange={handleBigDogsChange} min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Cachorros Pequenos</FormLabel>
          <NumberInput
            value={smallDogs}
            onChange={handleSmallDogsChange}
            min={0}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </Box>
      <Box as={Flex} width="full" justify="end">
        <Button colorScheme="blue" onClick={handleSubmit}>
          Calcular
        </Button>
      </Box>
    </>
  );
};
