import {Fragment} from 'react'
import '../template/header/Header.css'
import GraficoBarras from '../../assets/imgs/graficobarras.PNG'
import GraficoLinha from '../../assets/imgs/graficolinha.PNG'

export default props =>
<Fragment>
    <header className='header'>
        <h1 className="mt-3">
            <i className="fa fa-home" /> Home
        </h1>
        <p className="text-muted">Gerenciamento de Estoque</p>
    </header>
    <main className="content container-fluid">
        <div className="p-3 mt-3">
            <div className="display-4">
            Bem vindo!
            </div>
            <hr/>
            <div className="d-flex justify-content-around">
                <img src={GraficoBarras} alt="Quantidade de Itens por categoria"/>
                <img src={GraficoLinha} alt="Retiradas do ultimo mes"/>
            </div>
        </div>    
    </main>
</Fragment>