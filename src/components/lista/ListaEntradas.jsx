import Content from '../template/content/Content'
import { useState, useEffect } from "react";
import {db} from "../../firebaseConfig";
import {collection, getDocs, deleteDoc, doc} from "firebase/firestore";
import {Fragment} from 'react'
import {Link} from 'react-router-dom'

function ListaEntradas(){

    const[entradas, setEntradas] = useState([]);
    const entradasCollectionRef = collection(db, "entrada");

    const deleteEntrada = async (id) => {
        const entradaDoc = doc(db, "entrada", id);
        await deleteDoc(entradaDoc);
        document.location.reload(true);
    }

    useEffect(() => {
        const getEntradas = async () => {
            const data = await getDocs(entradasCollectionRef);
            console.log(data);
            setEntradas(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getEntradas();
    }, []);
        return(
            <Content icon="list" title="Lista" subtitle="Bem vindo ao Controle de Estoque" breadcrumb="Listar Notas Fiscais">
                <div className="display-4">
                    Lista de Notas Fiscais
                    
                </div>
                <hr/>
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Numero NF</th>
                        <th scope="col">Comprador</th>
                        <th scope="col">Custo Total</th>
                        <th scope="col">Fornecedor</th>
                        <th scope="col">Quantidade Itens</th>
                        <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entradas.map((entrada) => {
                            return(
                                <Fragment>
                                <tr>
                                    <th scope="row">{entrada.cod_nf}</th>
                                    <td>{entrada.comprador}</td>
                                    <td>{entrada.custo_total}</td>
                                    <td>{entrada.fornecedor}</td>
                                    <td>{entrada.quantidade}</td>
                                    <td><Link to={{
                                                    pathname:`/editaentrada/${entrada.id}`
                                        }}>
                                            <button className="btn btn-primary">
                                                <i className="fa fa-edit"/>
                                            </button>
                                        </Link> 
                                        
                                            <button onClick={() => {deleteEntrada(entrada.id)}} className="btn btn-danger">
                                                <i className="fa fa-trash" />
                                            </button>
                                    </td>
                                </tr>
                                </Fragment>
                            );
                        })}        
                    </tbody>
                </table>
            </Content>
        )
}

export default ListaEntradas;