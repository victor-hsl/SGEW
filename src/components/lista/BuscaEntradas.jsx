import { useState, useEffect } from 'react';
import Content from '../template/content/Content'
import {db} from "../../firebaseConfig";
import {collection, getDocs, orderBy} from "firebase/firestore";
import AutoCompleteEntradas from '../autocomplete/AutoCompleteEntradas';
import { render } from '@testing-library/react';
import {Link} from 'react-router-dom'

function BuscaEntradas(){
    const [busca, setBusca] = useState("");
    const[entradas, setEntradas] = useState([]);
    const[resultados, setResultados] = useState([]);
    const entradasCollectionRef = collection(db, "entrada");
    const [opcao, setOpcao] = useState("cod_nf");

    useEffect(() => {
        const getEntradas = async () => {
            const data = await getDocs(entradasCollectionRef);
            console.log(data);
            setEntradas(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getEntradas();
    }, []);

    var comprador_suggest = [];
    var nf_suggest = [];
    var custo_suggest = [];
    var fornecedor_suggest = [];
    entradas.map((entrada) => {
        comprador_suggest.push(entrada.comprador);
        nf_suggest.push(entrada.cod_nf);
        custo_suggest.push(entrada.custo_total);
        fornecedor_suggest.push(entrada.fornecedor);
    });
    var sugests = [];
    if (opcao === "cod_nf"){
        sugests = nf_suggest;
    }
    if (opcao === "comprador"){
        sugests = comprador_suggest;
    }
    if(opcao === "custo_total"){
        sugests = custo_suggest;
    }
    if(opcao === "fornecedor"){
        sugests = fornecedor_suggest;
    }

    const geraTabela = (e) => {
        entradas.map((entrada) => {
            if(opcao === "cod_nf"){
                if(entrada.cod_nf === document.getElementById("busca").value){
                    return(
                        <tr>
                            <th scope="row">{entrada.cod_nf}</th>
                            <td>{entrada.comprador}</td>
                            <td>{entrada.custo_total}</td>
                            <td>{entrada.fornecedor}</td>
                            <td>{entrada.quantidade}</td>
                            <td><Link to={{
                                            pathname:`/editaentrada/${entrada.id}`,
                                            state: { entrada },
                                            }}><button className="btn btn-primary">
                                    <i className="fa fa-edit"/>
                                </button></Link> <button className="btn btn-danger">
                                                <i className="fa fa-trash" />
                                            </button>
                            </td>
                        </tr>
                    );
                }
            }
            if(opcao === "comprador"){    
                if(entrada.comprador === document.getElementById("busca").value){
                    return(
                        <tr>
                            <th scope="row">{entrada.cod_nf}</th>
                            <td>{entrada.comprador}</td>
                            <td>{entrada.custo_total}</td>
                            <td>{entrada.fornecedor}</td>
                            <td>{entrada.quantidade}</td>
                            <td><Link to={{
                                            pathname:`/editaentrada/${entrada.id}`,
                                            state: { entrada },
                                            }}><button className="btn btn-primary">
                                    <i className="fa fa-edit"/>
                                </button></Link> <button className="btn btn-danger">
                                                <i className="fa fa-trash" />
                                            </button>
                            </td>
                        </tr>
                    );
                }
            }
            if(opcao === "custo_total"){
               if(entrada.custo_total === document.getElementById("busca").value){
                return(
                    <tr>
                        <th scope="row">{entrada.cod_nf}</th>
                        <td>{entrada.comprador}</td>
                        <td>{entrada.custo_total}</td>
                        <td>{entrada.fornecedor}</td>
                        <td>{entrada.quantidade}</td>
                        <td><Link to={{
                                        pathname:`/editaentrada/${entrada.id}`,
                                        state: { entrada },
                                        }}><button className="btn btn-primary">
                                <i className="fa fa-edit"/>
                            </button></Link> <button className="btn btn-danger">
                                            <i className="fa fa-trash" />
                                        </button>
                        </td>
                    </tr>
                );
                }
            }
            if(opcao === "fornecedor")    
                if(entrada.fornecedor === document.getElementById("busca").value){
                    return(
                        <tr>
                            <th scope="row">{entrada.cod_nf}</th>
                            <td>{entrada.comprador}</td>
                            <td>{entrada.custo_total}</td>
                            <td>{entrada.fornecedor}</td>
                            <td>{entrada.quantidade}</td>
                            <td><Link to={{
                                            pathname:`/editaentrada/${entrada.id}`,
                                            state: { entrada },
                                            }}><button className="btn btn-primary">
                                    <i className="fa fa-edit"/>
                                </button></Link> <button className="btn btn-danger">
                                                <i className="fa fa-trash" />
                                            </button>
                            </td>
                        </tr>
                    );
                }
        })
    };

    return (
        <Content icon="search" title="Busca" subtitle="Bem vindo ao Controle de Estoque" breadcrumb="Buscar Nota Fiscal">
            <div className="display-4">
                Busca de Notas Fiscais
            </div>
            <hr/>
            <form>
                <div className="form-row d-flex col-md-5 justify-content-between mb-md-2">
                    <div className="form-group col-md-1">
                        <label for="opcao"><h2>Por</h2> </label>
                    </div>
                    <div className="form-group col-md-3">
                        <select className="form-control" id="opcao" defaultValue="cod_nf" onChange={(e) => {setOpcao(e.target.value)}}>
                        <option value="cod_nf">Nota Fiscal</option>
                        <option value="comprador">Comprador</option>
                        <option value="custo_total">Custo Total</option>
                        <option value="fornecedor">Fornecedor</option>
                        </select>
                    </div>
                    <div className="form-group col-md-1">
                        <h2>:</h2>
                    </div>
                    <div className="form-group col-md-5">    
                        <AutoCompleteEntradas suggestions = {sugests}/>
                    </div>
                    <div className="form-group col-md-1">
                        <button className="btn btn-secondary" onClick={geraTabela}>
                            <i className="fa fa-search"/>
                        </button>
                    </div>
                </div>
            </form>
        </Content>
    )
}

export default BuscaEntradas;