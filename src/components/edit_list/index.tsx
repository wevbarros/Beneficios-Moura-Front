'use client'
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";


export default function ListaEdicao() {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://apibeneficiosmoura.azurewebsites.net/beneficios')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    function deleteBeneficio(id) {
        const urlApi = 'https://apibeneficiosmoura.azurewebsites.net/beneficios';
        axios
            .delete(`${urlApi}/${id}`)
            .then(() => {
                alert("Benefício Removido");

                const beneficios = data.filter(beneficio => beneficio.id !== id);
                setData(beneficios)
            })
            .catch(error => {
                console.error('Erro ao deletar o benefício:', error);
            });

    }

    return (
        <main className={`${styles.listaEdit}`}>
            {data ? (
                <ul>
                    {data.map((item) => (
                        <li className={`${styles.listaItens}`}>
                            <img className={`${styles.imgLista}`} src={item.urlImage} alt=""  />
                            <div className={`${styles.tituloBeneficio}`}> {item.nome} </div>
                            <p className={`${styles.categorias}`}>
                                {(() => {
                                    switch (item.categoria) {
                                        case 1: return "Estar Lado a Lado";
                                        case 2: return "Ficar Bem";
                                        case 3: return "Economizar";
                                        case 4: return "Ficar Saudável";
                                        default: return "Para Você";
                                    }
                                })()}
                            </p>

                            <div className={`${styles.botoes}`}>
                                <button>
                                    <img src="../../images/icons/editar.png" alt="" width={28} />
                                </button>
                                <p className={`${styles.trace}`}> | </p>
                                <button key={item.id} onClick={() => deleteBeneficio(item.id)}>
                                    <img src="../../images/icons/excluir.png" alt="" width={28} />
                                </button>
                            </div>

                        </li>
                    ))}
                </ul>
            ) : (
                <p>Carregando Dados</p>
            )
            }

        </main>
    )
}