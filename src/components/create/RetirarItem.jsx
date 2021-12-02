import { useState } from "react";
import {db} from "../../firebaseConfig";
import {collection, addDoc} from "firebase/firestore";
import Content from '../template/content/Content';
function RetirarItem(){
    const [newTicket, setNewTicket] = useState("");
  const [newEndereco, setNewEndereco] = useState("");
  const [newCnpj, setNewCnpj] = useState("");
  const [newRazaoSocial, setNewRazaoSocial] = useState("");
  const [newTelefone, setNewTelefone] = useState("");
  const fornecedorCollectionRef = collection(db, "fornecedor");

  const createFornecedor = async () => {
    await addDoc(fornecedorCollectionRef, {cpnj:newCnpj, endereco:newEndereco, nome:newTicket, razao_social:newRazaoSocial, telefone:newTelefone});
  };


          return(
            <Content icon="cart-arrow-down" title="Retirar Item" breadcrumb="Retirar Item">
              <form>
                <div className="form-row d-flex col-md-6 justify-content-between mb-md-2">
                  <div class="col-md-3">
                    <label for="ticket">Ticket</label>
                    <input type="text"
                            className="form-control"
                            id="ticket"
                            required
                            onChange={(e) => {setNewTicket(e.target.value);
                            }}
                            name="ticket" 
                            placeholder="Ticket referente"
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="bar_code">Código de Barras</label>
                    <input type="text"
                            className="form-control"
                            id="bar_code"
                            required
                            name="bar_code"
                            placeholder="Insira o código de identificação"
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="usuario">Usuário</label>
                    <input type="text"
                            className="form-control"
                            id="usuario"
                            required
                            onChange={(e) => {setNewEndereco(e.target.value);
                            }}
                            name="usuario"
                            placeholder="Informe o nome do usuário"
                    />
                  </div>
                </div>
                <div className="form-row d-flex col-md-6 justify-content-between mb-md-2">
                  <div class="col-md-3">
                    <label for="setor">Setor</label>
                      <input type="text"
                            className="form-control"
                            id="setor"
                            required
                            onChange={(e) => {setNewCnpj(e.target.value);
                            }}
                            name="setor" 
                            placeholder="Informe o setor do usuário"
                      />
                  </div>
                  <div class="col-md-3">
                    <label for="centro_custo">Centro de Custo</label>
                    <input type="text"
                            className="form-control"
                            id="centro_custo"
                            required
                            onChange={(e) => {setNewRazaoSocial(e.target.value);
                            }}
                            name="centro_custo"
                            placeholder="Centro de custo do usuário"
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="gestor">Gestor</label>
                    <input type="text"
                            className="form-control"
                            id="gestor"
                            required
                            onChange={(e) => {setNewTelefone(e.target.value);
                            }}
                            placeholder="Informe o gestor do usuário"
                            name="gestor"
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

export default RetirarItem;