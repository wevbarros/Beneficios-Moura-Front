"use client";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useBeneficiosController } from "../../controllers/BeneficiosController";
import { IBeneficio } from "../../dtos/IBeneficio";
import { FormEditarBeneficio } from "../formEditarBeneficio";
// import FormEditarBeneficio from "../formEditarBeneficio/index.tsx"

export default function ListaEdicao() {
    const [data, setData] = useState(null);
    const { beneficios } = useBeneficiosController();


    function deleteBeneficio(id: Number) {
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
            {beneficios ? (
                <ul>
                    {beneficios.map((beneficio: IBeneficio) => (
                        <li key={Number(beneficio.id)} className={`${styles.listaItens}`}>
                            <img
                                className={`${styles.imgLista}`}
                                src={beneficio.urlImage}
                                alt=""
                            />
                            <div className={`${styles.tituloBeneficio}`}>
                                {" "}
                                {beneficio.nome}{" "}
                            </div>
                            <p className={`${styles.categorias}`}>
                                {(() => {
                                    switch (Number(beneficio.categoria)) {
                                        case 1:
                                            return "Estar Lado a Lado";
                                        case 2:
                                            return "Ficar Bem";
                                        case 3:
                                            return "Economizar";
                                        case 4:
                                            return "Ficar Saudável";
                                        default:
                                            return "Para Você";
                                    }
                                })()}
                            </p>

                            <div className={`${styles.botoes}`}>
                                <FormEditarBeneficio {...beneficio} />
                                <p className={`${styles.trace}`}> | </p>
                                <button
                                    key={Number(beneficio.id)}
                                    onClick={() => deleteBeneficio(Number(beneficio.id))}
                                >
                                    <img src="../../images/icons/excluir.png" alt="" width={28} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Carregando Dados</p>
            )}
        </main>
    );
}
