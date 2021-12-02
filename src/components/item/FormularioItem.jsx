import { useState, useEffect } from "react";
import {db} from "../../firebaseConfig";
import {collection, getDocs, addDoc} from "firebase/firestore";
import Content from '../template/content/Content'
import Autocomplete from "../autocomplete/Autocomplete";

function CadastraItem(){
  const [newDescricao, setNewDescricao] = useState("");
  const [newFabricante, setNewFabricante] = useState("");
  const [newModelo, setNewModelo] = useState("");
  const [newSerialNumber, setNewSerialNumber] = useState("");
  const [newValorUn, setNewValorUn] = useState("");
  const [newQuantidade, setNewQuantidade] = useState("");

  const[entradas, setEntradas] = useState([]);
  const entradasCollectionRef = collection(db, "entrada");
  const itemsCollectionRef = collection(db, "item");

    useEffect(() => {
        const getEntradas = async () => {
            const data = await getDocs(entradasCollectionRef);
            setEntradas(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

        };

        getEntradas();
  }, []);


  const createItem = async () => {
    await addDoc(itemsCollectionRef, {categoria:document.getElementById("categoria").value, cod_nf:document.getElementById("cod_nf").value, descricao:newDescricao, fabricante:newFabricante, modelo:newModelo, quantidade:newQuantidade, serial_number:document.getElementById("serial_number").value, valor_un:newValorUn});
  };

  var nf_suggest = [];
  entradas.map((entrada) => {
      nf_suggest.push(entrada.cod_nf)
  });

  const desabilitaSerial = (e) =>{
    document.getElementById("serial_number").disabled = true;
    document.getElementById("serial_number").value = "N/A";
    document.getElementById("quantidade").disabled = false;
    
  }

  const habilitaSerial = (e) =>{
    document.getElementById("serial_number").disabled = false;
    document.getElementById("serial_number").value = "";
    document.getElementById("serial_number").placeholder = "Insira o numero de série do produto";
    document.getElementById("quantidade").disabled = true;
    document.getElementById("quantidade").value = 1;
  }



          return(
            <Content icon="database" title="Item de Entrada" breadcrumb="Cadastrar Item">
              <form>
                <div className="form-row d-flex col-md-6 justify-content-between mb-md-2">
                  <div className="form-group col-md-4">
                    <label for="cod_nf">Numero NF</label>
                    <Autocomplete
                      suggestions= {nf_suggest}
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="categoria">Categoria</label>
                    <select className="form-control" id="categoria" defaultValue="Desktop">
                      <option value="Desktop">Desktop</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Monitor">Monitor</option>
                      <option value="Periféricos">Periféricos</option>
                      <option value="Cabeamento">Cabeamento</option>
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label for="fabricante">Fabricante</label>
                    <input type="text"
                            className="form-control"
                            id="fabricante"
                            required
                            onChange={(e) => {setNewFabricante(e.target.value);
                            }}
                            name="fabricante"
                            placeholder="Fabricante do produto" 
                    />
                  </div>
                </div>
                <div className="form-row d-flex col-md-6 justify-content-between mb-md-2">
                  <div className="form-group col-md-5">
                    <label for="modelo">Modelo</label>
                    <input type="text"
                            className="form-control"
                            id="modelo"
                            required
                            onChange={(e) => {setNewModelo(e.target.value);
                            }}
                            name="modelo"
                            placeholder="Ex.: Latitude E4740"
                    />
                  </div>
                  <div className="fomr-group col-md-5">
                    <label for="serial_number">Serial Number</label>
                    <input type="text"
                            className="form-control"
                            id="serial_number"
                            required
                            onChange={(e) => {setNewSerialNumber(e.target.value);
                            }}
                            name="serial_number"
                            placeholder="Insira o numero de série do produto"
                    />
                  </div>
                </div>
                <div className="form-row d-flex col-md-6 justify-content-between mb-md-2">
                  <div className="form-group col-md-7">
                    <label for="descricao">Descrição</label>
                    <input type="text"
                            className="form-control"
                            id="descricao"
                            required
                            onChange={(e) => {setNewDescricao(e.target.value);
                            }}
                            name="descricao"
                            placeholder="Informe a descrição do produto"
                    />
                  </div>
                  <div className="form-group col-md-4">
                  <label for="valor_un">Valor Unitário</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroupPrepend">R$</span>
                    </div>
                    <input type="text"
                            className="form-control"
                            id="valor_un"
                            required
                            onChange={(e) => {setNewValorUn(e.target.value);
                            }}
                            name="valor_un"
                            placeholder="0,00"
                    />
                  </div>
                  </div>
                </div>  
                <div className="form-row d-flex align-items-end col-md-6 justify-content-between mb-md-2">
                  <label>Coleção de itens? </label>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="true" onClick={desabilitaSerial} />
                    <label class="form-check-label" for="inlineRadio1">Sim</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="false" onClick={habilitaSerial} defaultChecked/>
                    <label class="form-check-label" for="inlineRadio2">Não</label>
                  </div>
                  <div className="col-md-2">
                    <label>Quantidade</label>
                    <input  type="number" 
                            className="form-control" 
                            id="quantidade"
                            placeholder="--"
                            onChange={(e) => {setNewQuantidade(e.target.value);}}
                            disabled
                    />
                  </div>
                  <button onClick={createItem} className="btn btn-primary">     
                    Adicionar
                  </button>
                </div>
              </form>
              </Content>
          )
}

export default CadastraItem;