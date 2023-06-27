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
import { color } from "framer-motion";

export function FormCadastrarBeneficio() {
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
    if (e.target.files[0]) {
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
        sx={{
          _hover: {
            backgroundColor: "#182A74"
          },
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.35)",
        }}
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
          height={{ base: "70vh", md: "auto", lg: "70vh", xl: "70vh" }}
          width={{ base: "70vw", md: "70vw", lg: "70vw", xl: "70vw" }}
          textColor={"#fff"}
          border={"none"}
          padding={"0"}
          className={styles.gradienteAzul}
        >
          <ModalHeader></ModalHeader>
          <ModalCloseButton />





          <ModalBody>
            <form onSubmit={handleSubmit} className={styles.fomrbody}>
              <div className={styles.box1}>
                <div className={styles.textoform}>
                  <FormControl isRequired isInvalid={!!error} >
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
                      placeholder="Selecione a Categoria"
                    >
                      <option value="1">Lado a Lado</option>
                      <option value="2">Ficar Bem</option>
                      <option value="3">Economizar</option>
                      <option value="4">Ficar Saudável</option>
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
                </div>

                <FormControl isRequired className={styles.descform}>
                  <Textarea
                    value={descricao}
                    bgColor={"white"}
                    color={"black"}
                    name="descricao"
                    placeholder="Descrição"
                    height={"44"}
                    onChange={handleDescriptionChange}
                  />
                </FormControl>
              </div>

              <div className={styles.box2}>
                <div className={styles.previsualizacao}>
                  {previewImage && (
                    <Box mt={2}>
                      <FormLabel textAlign={"center"} >Pré-visualização</FormLabel>
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
                    colorScheme="teal"
                    backgroundColor={"#0B1333"}
                    sx={{
                      _hover: {
                        backgroundColor: "#182A74"
                      },
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.35)",
                    }}
                    borderRadius={"30px"}
                    isLoading={isLoading}
                    type="submit"
                    width={"60%"}
                  >
                    Salvar Novo Benefício
                  </Button>
                </div>
                <div className={styles.paravoceform}>
                  <img src="../../images/paravoce-form.png" alt="" width={"350vw"} />
                </div>

              </div>
            </form>
          </ModalBody>









          <ModalFooter justifyContent={"center"}>
            <Button
              colorScheme="blue"
              ml={3}
              onClick={onClose}
              backgroundColor={"#AD1111"}
              sx={{
                _hover: {
                  backgroundColor: "#182A74"
                },
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.35)",
              }}
              borderRadius={"30px"}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal >
    </>
  );
};