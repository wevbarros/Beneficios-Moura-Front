import { useState, ChangeEvent, FormEvent } from 'react';
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
} from '@chakra-ui/react';
import { CardBeneficio } from '../cardBeneficioHome';
import styles from './styles.module.scss';
import { api } from '../../services/api';

const CardForm = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [categoria, setCategoria] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleNameChange = (e:any) => {
    setNome(e.target.value);
  };

  const handleDescriptionChange = (e:any) => {
    setDescricao(e.target.value);
  };

  const handleCategoryChange = (e:any) => {
    setCategoria(e.target.value);
  }

  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    setImagem(file);
    setPreviewImage(URL.createObjectURL(file));
  };  

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('categoria', categoria);
    formData.append('descricao', descricao);
    if (imagem) {
      formData.append('imagem', imagem);
    }

    setTimeout(() => {
      api.post('/cadastrarBeneficio', formData)
        .then((response:any) => {
          console.log(response.data);
        })
        .catch((error:any) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
      
      console.log('Dados enviados:', formData);
      setIsLoading(false);
    }, 2000);

    setNome('');
    setDescricao('');
    setImagem(null);
    setPreviewImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired isInvalid={!!error}>
        <Input bgColor={'white'} color={"black"} rounded={'32'} type="text" value={nome} name="nome" placeholder='Nome do Benefício' onChange={handleNameChange} />
      </FormControl>

      <FormControl mt={4} isRequired>
        <Select onChange={handleCategoryChange} bgColor={'white'} color={'gray'}  rounded={'32'} placeholder='Selecione a categoria'>
          <option value="1">Alimentação</option>  
          <option value="2">Educação</option>
          <option value="3">Saúde</option>
          <option value="4">Transporte</option>
        </Select>
      </FormControl>

      <FormControl mt={4} isRequired>
        <Input className={styles.inputFile} bgColor={'white'} color={"black"} rounded={'32'} type="file" onChange={handleImageChange} name="imagem" accept="image/*" placeholder='Insira a imagem' />
      </FormControl>

      <FormControl mt={4} isRequired>
        <Textarea
            value={descricao}
            bgColor={'white'}
            color={"black"}
            name="descricao"
            placeholder="Descricao"
            height={'44'}
            onChange={handleDescriptionChange}
          />
      </FormControl>

      {previewImage && (
        <Box mt={4}>
          <FormLabel>Pré-visualização</FormLabel>
          <CardBeneficio id={-1} categoria={"1"} descricao={descricao} nome={nome} urlImage={previewImage}/>
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
