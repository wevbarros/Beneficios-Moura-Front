import { api } from '../services/api';
import { IBeneficio } from '../dtos/IBeneficio';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface IBeneficiosController {
  beneficios: IBeneficio[];
  getBeneficios: () => Promise<void>;
}

type BeneficiosPorCategoria = {
  [category: string]: IBeneficio[];
};

export function useBeneficiosController() {
  const { isReady } = useRouter();
  const [beneficios, setBeneficios] = useState<IBeneficio[]>([]);

  async function getBeneficios() {
    try {
      const response = await api.get('/beneficios');
      setBeneficios(response.data);      
    } catch (error) {
      console.log('useBeneficiosController: ', error);
    }
  }

  function agruparBeneficiosPorCategoria(beneficios: IBeneficio[]) {
    const beneficiosPorCategoria: BeneficiosPorCategoria = {};
  
    beneficios.forEach((beneficio) => {
      const categoria = beneficio.category;
      if (!beneficiosPorCategoria[categoria]) {
        beneficiosPorCategoria[categoria] = [];
      }
      beneficiosPorCategoria[categoria].push(beneficio);
    });
    return beneficiosPorCategoria;
  }

  useEffect(() => {
      getBeneficios();
      agruparBeneficiosPorCategoria(beneficios);
  }, []);

  return {
    beneficios,
    getBeneficios,
    agruparBeneficiosPorCategoria,
  };
}
