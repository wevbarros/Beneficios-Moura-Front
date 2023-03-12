import React, { useState, useRef, useEffect} from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react'; 
import CardBeneficio from './cardBeneficioHome';
import styles from './SideScroll.module.scss';

import { IBeneficio } from '../dtos/IBeneficio';
import { useBeneficiosController } from '../controllers/BeneficiosController';

export default function SideScroll() {
  const { beneficios } = useBeneficiosController();
  let myJSON = Object();

  myJSON = {
    "transporte" : [
      {
        "id": 6,
        "nome": "Locomoção",
        "descricao": "Está com problemas para se locomover até o seu trabalho? A nossa empresa agora conta com um super transporte disponível para os nossos funcionários, estagiários e aprendizes! Com o nosso ônibus, vocês podem contar com um transporte super prático e confortável para chegar nas unidades da cidade de Belo Jardim. Assim, vocês não precisam se preocupar tanto com o deslocamento e podem chegar ao trabalho com mais tranquilidade. E não se preocupem com os horários, pois nossa empresa conta com uma programação especial para que todos possam chegar ao trabalho no horário certo. Assim, vocês podem contar com um transporte pontual e confiável para o dia a dia.",
        "urlImage": "link"
      }
    ],
    "Alimentacao": [
      {
        "id": 1,
        "nome": "Restaurante",
        "descricao": "Vocês já sabem da novidade? Agora a nossa empresa tem um restaurante disponível para os nossos funcionários e estagiários! Com o nosso restaurante, vocês podem realizar suas refeições de forma prática e super confortável durante a jornada de trabalho. Além disso, contamos com um cardápio variado e delicioso, com opções para todos os gostos e necessidades alimentares.",
        "urlImage": "link"
      },
      {
        "id": 3,
        "nome": "Cesta Básica",
        "descricao": "E aí, pessoal! Já estão sabendo da novidade da nossa cesta básica? Além de ser um prêmio mensal super especial para nossos colaboradores, agora a composição dos alimentos da cesta é feita de forma totalmente personalizada para cada unidade ou distribuição. Quer dizer que você vai receber uma cesta básica cheia de alimentos deliciosos e selecionados especialmente para o seu local de trabalho. É ou não é uma boa vantagem? Ah, e se você está em período de experiência, não precisa se preocupar. Vai receber uma cesta básica também, só que com um pouquinho menos de itens. Mas não se preocupe, assim que o período acabar, você já pode curtir a cesta completa como todo mundo.",
        "urlImage": "link!"
      }
    ]
  }
  
    let count = 0;
    for (const i in myJSON) {
      if (count <= 1) {

        console.log("Categoria: ", i);
        
        for (const j in myJSON[i]) {
          console.log(myJSON[i][j].nome)
        }
        count == 1 ? count = 0 : count;
      }
    }
  


  return ( 
    <>
        <Flex flexDirection="column">
          <Text fontSize={{ base: "inherit", md: "3xl", lg: "3xl"}} marginLeft={{ base: "4vw", md: "4vw", lg: "1vw"}} marginTop="1" color="#fff">Categoria</Text>
            <div className={styles.sideScroll}>
              {
                beneficios.map((beneficio) => (
                  <CardBeneficio key={Number(beneficio.id)} {...beneficio} />
                ))
              }              
            </div>
        </Flex>
    </>
   ); 
}