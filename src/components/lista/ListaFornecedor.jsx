import Content from '../template/content/Content'
import { useState, useEffect } from "react";
import {db} from "../../firebaseConfig";
import {collection, getDocs, deleteDoc, doc} from "firebase/firestore";
import {Fragment} from 'react'
import {Link} from 'react-router-dom'

function ListaFornecedores(){

    const[fornecedores, setFornecedores] = useState([]);
    const fornecedoresCollectionRef = collection(db, "fornecedor");

    const deleteFornecedor = async (id) => {
        const fornecedorDoc = doc(db, "fornecedor", id);
        await deleteDoc(fornecedorDoc);
        document.location.reload(true);
    }

    useEffect(() => {
        const getFornecedores = async () => {
            const data = await getDocs(fornecedoresCollectionRef);
            setFornecedores(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getFornecedores();
    }, []);
        return(
            <Content icon="list" title="Lista" subtitle="Bem vindo ao Controle de Estoque" breadcrumb="Lista de Fornecedores">
                <div className="display-4">
                    Lista de Fornecedores
                    
                </div>
                <hr/>
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">CNPJ</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Razão social</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fornecedores.map((fornecedor) => {
                            return(
                                <Fragment>
                                <tr>
                                    <th scope="row">{fornecedor.cpnj}</th>
                                    <td>{fornecedor.nome}</td>
                                    <td>{fornecedor.razao_social}</td>
                                    <td>{fornecedor.endereco}</td>
                                    <td>{fornecedor.telefone}</td>
                                    <td><Link to={{
                                                    pathname:`/editafornecedor/${fornecedor.id}`
                                        }}>
                                            <button className="btn btn-primary">
                                                <i className="fa fa-edit"/>
                                            </button>
                                        </Link> 
                                        
                                            <button onClick={() => {deleteFornecedor(fornecedor.id)}} className="btn btn-danger">
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

export default ListaFornecedores;