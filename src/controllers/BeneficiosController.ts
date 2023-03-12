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

  useEffect(() => {
      getBeneficios();
  }, []);

  return {
    beneficios,
    getBeneficios,
  };
}
