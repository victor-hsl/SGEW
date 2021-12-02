import { useState } from "react";
import Content from '../template/content/Content';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebaseAuth";
function CadastrarAdmin(){
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };

          return(
            <Content icon="address-card-o" title="Cadastrar Novo Administrador" subtitle="Bem vindo ao Controle de Estoque" breadcrumb="Cadastrar Administrador">
              <form>
                <div className="form-row d-flex col-md-3 justify-content-between mb-md-2">
                  <div class="col-md-5">
                    <label for="email">E-mail</label>
                    <input type="email"
                            className="form-control"
                            id="email"
                            required
                            onChange={(e) => {setRegisterEmail(e.target.value);
                            }}
                            name="email" 
                    />
                  </div>
                  <div class="col-md-5">
                    <label for="senha">Senha</label>
                    <input type="text"
                            className="form-control"
                            id="senha"
                            required
                            onChange={(e) => {setRegisterPassword(e.target.value);
                            }}
                            name="senha"
                    />
                  </div>
                </div>
                <button onClick={register} className="btn btn-primary">Cadastrar</button>
              </form>
              </Content>
          )
}

export default CadastrarAdmin;