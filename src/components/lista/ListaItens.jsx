import Content from '../template/content/Content'
import { useState, useEffect } from "react";
import {db} from "../../firebaseConfig";
import {collection, getDocs, deleteDoc, doc} from "firebase/firestore";
import {Fragment} from 'react'
import {Link} from 'react-router-dom'

function ListaItens(){

    const[itens, setItens] = useState([]);
    const itensCollectionRef = collection(db, "item");

    const deleteItem = async (id) => {
        const itemDoc = doc(db, "item", id);
        await deleteDoc(itemDoc);
        document.location.reload(true);
    }

    useEffect(() => {
        const getItens = async () => {
            const data = await getDocs(itensCollectionRef);
            setItens(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getItens();
    }, []);

        return(
            <Content icon="list" title="Lista" subtitle="Bem vindo ao Controle de Estoque" breadcrumb="Lista de Itens">
                <div className="display-4">
                    Lista de Itens
                </div>
                <hr/>
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Serial Number</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Fabricante</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Nota Fiscal</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Valor Unitário</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itens.map((item) => {
                            return(
                                <Fragment>
                                <tr>
                                    <th scope="row">{item.serial_number}</th>
                                    <td>{item.modelo}</td>
                                    <td>{item.fabricante}</td>
                                    <td>{item.categoria}</td>
                                    <td>{item.cod_nf}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.valor_un}</td>
                                    <td>{item.quantidade}</td>
                                    <td><Link to={{
                                                    pathname:`/editaitem/${item.id}`
                                        }}>
                                            <button className="btn btn-primary">
                                                <i className="fa fa-edit"/>
                                            </button>
                                        </Link> 
                                        
                                            <button onClick={() => {deleteItem(item.id)}} className="btn btn-danger">
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

export default ListaItens;