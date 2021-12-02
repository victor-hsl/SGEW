import Content from '../template/content/Content'
import { Component } from 'react'
import Formulario from './FormularioEntrada'

export default class Cadastrar extends Component{
    render(){
        return(
            <Content icon="database" tittle="Gerenciamento" subtitle="Bem vindo ao Controle de Estoque">
                <Formulario/>
                <hr/>
            </Content>
        )
    }

}