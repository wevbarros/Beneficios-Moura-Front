import { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Image,
  Select,
  Textarea,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { CardBeneficio } from "../cardBeneficioHome";
import styles from "./styles.module.scss";
import { api } from "../../services/api";
import { AxiosResponse } from "axios";

export function FormCadastrarBeneficio(){
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [categoria, setCategoria] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState<"inside" | "outside">(
    "inside"
  );

  const handleNameChange = (e: any) => {
    setNome(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescricao(e.target.value);
  };

  const handleCategoryChange = (e: any) => {
    setCategoria(e.target.value);
  };

  const handleImageChange = (e: any) => {
    if(e.target.files[0]) {
      setImagem(e.target.files[0]);
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("categoria", categoria);
    formData.append("descricao", descricao);
    if (imagem) {
      formData.append("imagem", imagem);
    }

    try {
      const response: AxiosResponse = await api.post("/cadastrarBeneficio", formData);
      console.log(response);
      alert("Benefício cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Erro ao cadastrar benefício!");
    }
  };

  return (
    <>
      <Button
        bg="#0D1740"
        colorScheme="none"
        size="md"
        width="180px"
        height="45px"
        onClick={onOpen}
      >
        Adicionar Benefício
      </Button>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={{ base: "xl", md: "xl", lg: "xl", xl: "xxl" }}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent
          height={{ base: "100vh", md: "auto", lg: "100vh", xl: "100vh" }}
          width={{ xl: "40vw" }}
          textColor={"#fff"}
          border={"none"}
          padding={"0"}
          className={styles.gradienteAzul}
        >
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired isInvalid={!!error}>
                <Input
                  bgColor={"white"}
                  color={"black"}
                  rounded={"32"}
                  type="text"
                  value={nome}
                  name="nome"
                  placeholder="Nome do Benefício"
                  onChange={handleNameChange}
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                <Select
                  onChange={handleCategoryChange}
                  bgColor={"white"}
                  color={"gray"}
                  rounded={"32"}
                  placeholder="Selecione a categoria"
                >
                  <option value="1">Alimentação</option>
                  <option value="2">Educação</option>
                  <option value="3">Saúde</option>
                  <option value="4">Transporte</option>
                </Select>
              </FormControl>

              <FormControl mt={4} isRequired>
                <Input
                  className={styles.inputFile}
                  bgColor={"white"}
                  color={"black"}
                  rounded={"32"}
                  type="file"
                  onChange={handleImageChange}
                  name="imagem"
                  accept="image/*"
                  placeholder="Insira a imagem"
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                <Textarea
                  value={descricao}
                  bgColor={"white"}
                  color={"black"}
                  name="descricao"
                  placeholder="Descricao"
                  height={"44"}
                  onChange={handleDescriptionChange}
                />
              </FormControl>

              {previewImage && (
                <Box mt={4}>
                  <FormLabel>Pré-visualização</FormLabel>
                  <CardBeneficio
                    id={NaN}
                    categoria={String()}
                    descricao={descricao}
                    nome={nome}
                    urlImage={previewImage}
                  />
                </Box>
              )}

              {error && (
                <Box mt={4} color="red.500">
                  <FormErrorMessage>{error}</FormErrorMessage>
                </Box>
              )}

              <Button
                mt={4}
                colorScheme="teal"
                isLoading={isLoading}
                type="submit"
              >
                Enviar
              </Button>
            </form>
          </ModalBody>
          <ModalFooter justifyContent={"center"}>
            <Button colorScheme="blue" ml={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};