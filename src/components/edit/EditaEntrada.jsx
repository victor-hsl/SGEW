import { useState, useEffect, match } from "react";
import React, {Component, Props, ReactDOM} from 'react';
import {db} from "../../firebaseConfig";
import {collection, getDoc, updateDoc, doc, getDocs} from "firebase/firestore";
import Content from '../template/content/Content'


function EditaEntrada({match}) {
  const [current, setCurrent] = useState([]);
  
  const [newComprador, setNewComprador] = useState("");
  const [newCustoTotal, setNewCustoTotal] = useState("");
  const [newQuantidade, setNewQuantidade] = useState("");
  const [newFornecedor, setNewFornecedor] = useState("");
  useEffect(() => {
    const getCurrent = async () => {
      const docRef = doc(db, "entrada", match.params.id);
      const docSnap = await getDoc(docRef);
      setCurrent(docSnap.data());
    }
    getCurrent();

  }, []);

  
  
  const updateEntrada = async (id) => {
    const entradaDoc = doc(db, "entrada", id);
    const updatedEntrada = {cod_nf:current.cod_nf, comprador:newComprador,custo_total:newCustoTotal, fornecedor:newFornecedor, quantidade:newQuantidade};
    await updateDoc(entradaDoc, updatedEntrada);
    };
  
          return(
            <Content icon="truck" title="Edita Entrada" subtitle="Bem vindo ao Controle de Estoque" breadcrumb="Editar NF">
              <form>
                <div className="form-row d-flex col-md-6 justify-content-between mb-md-2">
                  <div class="col-md-6">
                  <label for="comprador">Comprador</label>
                    <input type="text"
                            className="form-control"
                            id="comprador"
                            required
                            name="comprador" 
                            defaultValue={current.comprador}
                            onChange = {(e) => {setNewComprador(e.target.value)}}
                    />
                  </div>
                  <div class="col-md-5">
                  <label for="fornecedor">Fornecedor</label>
                    <input type="text"
                            className="form-control"
                            id="fornecedor"
                            required
                            name="fornecedor"
                            defaultValue={current.fornecedor}
                            onChange = {(e) => {setNewFornecedor(e.target.value)}}
                    />
                  </div>
                </div>
                <div className="form-row d-flex col-md-6 justify-content-between mb-md-2">
                  <div className="col-md-3">
                    <label for="custo_total">Custo Total</label>
                    <div className="input-group">
                  <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroupPrepend">R$</span>
                    </div>
                    <input type="text"
                            className="form-control"
                            id="custo_total"
                            required
                            name="custo_total" 
                            defaultValue={current.custo_total}
                            onChange={(e) => {setNewCustoTotal(e.target.value)}}
                    />
                    </div>
                  </div>
                  <div class="col-md-2">
                    <label for="quantidade">Quantidade</label>
                    <input type="text"
                            type="text"
                            className="form-control"
                            id="quantidade"
                            required
                            name="quantidade"
                            defaultValue={current.quantidade}
                            onChange={(e) => {setNewQuantidade(e.target.value)}}
                    />
                  </div>
                  <div class="col-md-4">
                  <label for="cod_nf">Numero NF </label>
                    <input type="text"
                            className="form-control"
                            id="cod_nf"
                            required
                            name="cod_nf"
                            value= {current.cod_nf}
                            disabled
                    />
                    
                  </div>
                </div>
                <div className="form-row">
                <button onClick={() => updateEntrada(match.params.id)} className="btn btn-primary">
                      Editar
                </button>
                </div>
              </form>
              </Content>
          )      
}

export default EditaEntrada;