import './Nav.css'
import {Link} from 'react-router-dom'
import { auth } from "../../../firebaseAuth";
import {signOut} from "firebase/auth";
function Nav(){
    const logout = async () => {
        await signOut(auth);
        
      };

    return(
        <aside className="menu-area">
            <nav className='menu'>
                <div className="d-flex flex-column" >
                    <div className="accordion fundo" id="accordionPanelsStayOpenExample">       
                        <div className="accordion-item fundo">
                            <button className="accordion-button collapsed fundo" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                Cadastrar
                            </button>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse fundo" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="fundo">
                                    <Link to='/cadastraradmin'><i className='fa fa-address-card-o'/> Administrador</Link>
                                    <Link to='/cadastrarfornecedor'><i className='fa fa-truck'/> Fornecedor</Link>
                                    <Link to='/item'><i className='fa fa-database'/> Item</Link>
                                    <Link to='/create'><i className='fa fa-barcode'/> Nota Fiscal</Link>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item fundo">
                            <button className="accordion-button collapsed fundo" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Listar
                            </button>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="fundo">
                                <Link to='/buscaentradas'><i className='fa fa-search'/> Busca</Link>
                                <Link to='/lista'><i className='fa fa-list'/> Entrada</Link>
                                <Link to='/listarfornecedor'><i className='fa fa-truck'/> Fornecedores</Link>
                                <Link to='/listaritens'><i className='fa fa-archive'/> Itens</Link>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item fundo">
                            <button className="accordion-button collapsed fundo" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Entregar
                            </button>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div className="fundo">
                                <Link to='/retiraritem'><i className='fa fa-cart-arrow-down'/> Retirar Item</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="fixed-bottom logout d-flex justify-content-center align-items-center"><a onClick={logout}><i class="fa fa-sign-out"/> Logout </a></div>
        </aside>
    )    
}
export default Nav;