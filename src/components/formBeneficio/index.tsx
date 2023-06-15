import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Image,
} from '@chakra-ui/react';
import { CardBeneficio } from '../cardBeneficioHome';

const CardForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleNameChange = (e:any) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e:any) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Aqui você pode fazer o upload da imagem e salvar os dados no backend
    // Implemente sua lógica aqui

    // Exemplo de como mostrar os dados do card após o envio do formulário
    console.log('Nome:', name);
    console.log('Descrição:', description);
    console.log('Imagem:', previewImage);

    // Reseta o formulário
    setName('');
    setDescription('');
    setImage(null);
    setPreviewImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired isInvalid={!!error}>
        <FormLabel>Nome</FormLabel>
        <Input type="text" value={name} onChange={handleNameChange} />
      </FormControl>

      <FormControl mt={4} isRequired>
        <FormLabel>Descrição</FormLabel>
        <Input type="text" value={description} onChange={handleDescriptionChange} />
      </FormControl>

      <FormControl mt={4} isRequired>
        <FormLabel>Imagem</FormLabel>
        <Input type="file" onChange={handleImageChange} accept="image/*" />
      </FormControl>

      {previewImage && (
        <Box mt={4}>
          <FormLabel>Pré-visualização</FormLabel>
          <CardBeneficio id={1001} categoria={"1"} descricao={description} nome={name} urlImage={previewImage}/>
        </Box>
      )}

      {error && (
        <Box mt={4} color="red.500">
          <FormErrorMessage>{error}</FormErrorMessage>
        </Box>
      )}

      <Button mt={4} colorScheme="teal" isLoading={isLoading} type="submit">
        Enviar
      </Button>
    </form>
  );
};

export default CardForm;
