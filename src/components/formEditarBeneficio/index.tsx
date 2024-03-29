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
  Center,
  Flex,
} from "@chakra-ui/react";
import { CardBeneficio } from "../cardBeneficioHome";
import styles from "./styles.module.scss";
import { api } from "../../services/api";
import { AxiosResponse } from "axios";
import { color } from "framer-motion";
import { IBeneficio } from "../../dtos/IBeneficio";
import Swal from 'sweetalert2';
import { useAuth } from "../../auth/auth";

export function FormEditarBeneficio(beneficio: IBeneficio) {
  const [nome, setNome] = useState(beneficio.nome);
  const [descricao, setDescricao] = useState(beneficio.descricao);
  const [imagem, setImagem] = useState(null);
  const [previewImage, setPreviewImage] = useState(beneficio.urlImage);
  const [categoria, setCategoria] = useState(beneficio.categoria);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { token } = useAuth();

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
    formData.append("categoria", String(categoria));
    formData.append("descricao", String(descricao));
    if (imagem) {
      formData.append("imagem", imagem);
    }

    try {
      const response: AxiosResponse = await api.put(
        `/beneficios/${beneficio.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);
      onClose();
      Swal.fire({
        icon: "success",
        title: "Benefício editado com sucesso!",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
      alert("Erro ao editar benefício!");
      onClose();
    }
  };

    const categoryPlaceholder = (categoria: string) => {
    if (categoria === "1") {
      return "Lado a Lado";
    } else if (categoria === "2") {
      return "Ficar Bem";
    } else if (categoria === "3") {
      return "Economizar";
    } else if (categoria === "4") {
      return "Ficar Saudável";
    }
  }

  return (
    <>
      <button onClick={onOpen}>
        <img src="../../images/icons/editar.png" alt="" width={28} />
      </button>
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
          height={{ base: "80vh", md: "auto", lg: "80vh", xl: "80vh" }}
          width={{ base: "60vw", md: "60vw", lg: "60vw", xl: "60vw" }}
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

                  <FormControl mt={4}>
                    <Select
                      onChange={handleCategoryChange}
                      bgColor={"white"}
                      color={"gray"}
                      rounded={"32"}
                      placeholder={categoryPlaceholder(String(categoria))}
                    >
                      <option value="1">Lado a Lado</option>
                      <option value="2">Ficar Bem</option>
                      <option value="3">Economizar</option>
                      <option value="4">Ficar Saudável</option>
                    </Select>
                  </FormControl>

                  <FormControl mt={4}>
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
                      <FormLabel textAlign={"center"}>
                        Pré-Visualização
                      </FormLabel>
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
                        backgroundColor: "#182A74",
                      },
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.35)",
                    }}
                    borderRadius={"30px"}
                    isLoading={isLoading}
                    type="submit"
                  >
                    Salvar Alterações
                  </Button>
                </div>
                <div className={styles.paravoceform}>
                  <img
                    src="../../images/paravoce-form.png"
                    alt=""
                    width={"400em"}
                  />
                </div>
              </div>
            </form>
          </ModalBody>

          <ModalFooter
            width={"100%"}
            display={"flex"}
            justifyContent={"space-around"}
            position={"absolute"}
            bottom={0}
          >
            <Button
              colorScheme="blue"
              onClick={onClose}
              backgroundColor={"#AD1111"}
              sx={{
                _hover: {
                  backgroundColor: "#182A74",
                },
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.35)",
              }}
              borderRadius={"30px"}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
