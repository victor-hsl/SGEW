import { useState, useEffect } from "react";
import {db} from "../../firebaseConfig";
import {collection, getDocs, addDoc} from "firebase/firestore";
import Content from '../template/content/Content';
import Autocomplete from "../autocomplete/AutoCompleteFornecedor";

function CadastraEntrada(){
  const [newComprador, setNewComprador] = useState("");
  const [newCustoTotal, setNewCustoTotal] = useState("");
  const [newQuantidade, setNewQuantidade] = useState("");
  const [newCodNf, setNewCodNf] = useState("");
  const entradasCollectionRef = collection(db, "entrada");
  const fornecedoresCollectionRef = collection(db, "fornecedor");
  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    const getFornecedores = async () => {
        const data = await getDocs(fornecedoresCollectionRef);
        setFornecedores(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

    };

    getFornecedores();
  }, []);

  var fornecedores_suggest = [];
  fornecedores.map((fornecedor) => {
      fornecedores_suggest.push(fornecedor.nome)
  });


  const createEntrada = async () => {
    await addDoc(entradasCollectionRef, {cod_nf:newCodNf, comprador:newComprador,custo_total:newCustoTotal, fornecedor:document.getElementById("fornecedor").value, quantidade:newQuantidade});
  };


          return(
            <Content icon="truck" title="Cadastrar Nota Fiscal" subtitle="Bem vindo ao Controle de Estoque" breadcrumb="Cadastrar Nota Fiscal">
              <form>
                <div className="form-row d-flex col-md-6 justify-content-between mb-md-2">
                  <div class="col-md-6">
                    <label for="comprador">Comprador</label>
                    <input type="text"
                            className="form-control"
                            id="comprador"
                            required
                            onChange={(e) => {setNewComprador(e.target.value);
                            }}
                            name="comprador" 
                            placeholder="Digite o nome do comprador"
                    />
                  </div>
                  <div class="col-md-5">
                    <label for="fornecedor">Fornecedor</label>
                    <Autocomplete
                      suggestions= {fornecedores_suggest}
                    />
                  </div>
                </div>
                <div className="form-row d-flex col-md-6 justify-content-between mb-md-2">
                  <div class="col-md-5">
                    <label for="custototal">Custo Total</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroupPrepend">R$</span>
                      </div>
                      <input type="text"
                            className="form-control"
                            id="custototal"
                            required
                            onChange={(e) => {setNewCustoTotal(e.target.value);
                            }}
                            name="custototal" 
                            aria-describedby="inputGroupPrepend"
                            placeholder="0,00"
                      />
                    </div>
                  </div>
                  <div class="col-md-2">
                    <label for="quantidade">Quantidade</label>
                    <input type="text"
                            type="number"
                            className="form-control"
                            id="quantidade"
                            required
                            onChange={(e) => {setNewQuantidade(e.target.value);
                            }}
                            name="quantidade"
                            placeholder="--"
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="codnf">Numero NF</label>
                    <input type="text"
                            className="form-control"
                            id="codnf"
                            required
                            onChange={(e) => {setNewCodNf(e.target.value);
                            }}
                            placeholder="00000000-0"
                            name="codnf"
                    />
                  </div>
                </div>
                <div className="form-row d-flex">
                <button onClick={createEntrada} className="btn btn-primary">
                      Cadastrar
                </button>
                </div>
              </form>
              </Content>
          )
}

export default CadastraEntrada;