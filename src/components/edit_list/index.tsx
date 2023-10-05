"use client";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useBeneficiosController } from "../../controllers/BeneficiosController";
import { IBeneficio } from "../../dtos/IBeneficio";
import { FormEditarBeneficio } from "../formEditarBeneficio";
import Swal from 'sweetalert2';

export default function ListaEdicao() {
    const [data, setData] = useState(null);
    const { beneficios } = useBeneficiosController();


    function deleteBeneficio(id: Number) {
        const urlApi = 'https://apibeneficiosmoura.azurewebsites.net/beneficios';

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Atenção',
            text: "Você realmente deseja remover este Benefício?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, quero remover',
            cancelButtonText: 'Não, manter benefício',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`${urlApi}/${id}`)
                    .then(() => {
                        const beneficios = data.filter(beneficio => beneficio.id !== id);
                        setData(beneficios)
                    })
                    .catch(error => {
                        console.error('Erro ao deletar o benefício:', error);
                    });

                swalWithBootstrapButtons.fire(
                    'Removido',
                    'O Benefício não está mais disponível.',
                    'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Ação Cancelada',
                    'O Benefício continua disponível',
                    'info'
                )
            }
        })
    }

    return (
        <main className={`animate__animated animate__fadeInLeft ${styles.listaEdit}`}>
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
