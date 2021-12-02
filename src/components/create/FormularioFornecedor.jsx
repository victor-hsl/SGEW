import { useState } from "react";
import {db} from "../../firebaseConfig";
import {collection, addDoc} from "firebase/firestore";
import Content from '../template/content/Content';
function FormularioFornecedor(){
  const [newNome, setNewNome] = useState("");
  const [newEndereco, setNewEndereco] = useState("");
  const [newCnpj, setNewCnpj] = useState("");
  const [newRazaoSocial, setNewRazaoSocial] = useState("");
  const [newTelefone, setNewTelefone] = useState("");
  const fornecedorCollectionRef = collection(db, "fornecedor");

  const createFornecedor = async () => {
    await addDoc(fornecedorCollectionRef, {cpnj:newCnpj, endereco:newEndereco, nome:newNome, razao_social:newRazaoSocial, telefone:newTelefone});
  };

          return(
            <Content icon="truck" title="Cadastrar Fornecedor" subtitle="Bem vindo ao Controle de Estoque" breadcrumb="Cadastrar Fornecedor">
              <form>
                <div className="form-row d-flex col-md-6 justify-content-between mb-md-2">
                  <div class="col-md-4">
                    <label for="nome">Nome</label>
                    <input type="text"
                            className="form-control"
                            id="nome"
                            required
                            onChange={(e) => {setNewNome(e.target.value);
                            }}
                            name="nome" 
                            placeholder="Digite o nome da empresa"
                    />
                  </div>
                  <div class="col-md-7">
                    <label for="endereco">Endereco</label>
                    <input type="text"
                            className="form-control"
                            id="endereco"
                            required
                            onChange={(e) => {setNewEndereco(e.target.value);
                            }}
                            name="endereco"
                            placeholder="Digite o endereço"
                    />
                  </div>
                </div>
                <div className="form-row d-flex col-md-6 justify-content-between mb-md-2">
                  <div class="col-md-3">
                    <label for="cnpj">CNPJ</label>
                      <input type="text"
                            className="form-control"
                            id="cnpj"
                            required
                            onChange={(e) => {setNewCnpj(e.target.value);
                            }}
                            name="cnpj" 
                            placeholder="00.000.000/0000-00"
                      />
                  </div>
                  <div class="col-md-3">
                    <label for="razao_social">Razão Social</label>
                    <input type="text"
                            className="form-control"
                            id="razao_social"
                            required
                            onChange={(e) => {setNewRazaoSocial(e.target.value);
                            }}
                            name="razao_social"
                            placeholder=""
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="telefone">Telefone</label>
                    <input type="text"
                            className="form-control"
                            id="telefone"
                            required
                            onChange={(e) => {setNewTelefone(e.target.value);
                            }}
                            placeholder="(00)0000-0000"
                            name="telefone"
                    />
                  </div>
                </div>
                <div className="form-row d-flex">
                <button onClick={createFornecedor} className="btn btn-primary">
                      Cadastrar
                </button>
                </div>
              </form>
              </Content>
          )
}

export default FormularioFornecedor;