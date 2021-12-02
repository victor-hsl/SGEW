import {Switch, Redirect} from 'react-router'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Cadastrar from './components/create/FormularioEntrada'
import FormularioItem from './components/item/FormularioItem'
import ListaEntradas from './components/lista/ListaEntradas'
import FormularioFornecedor from './components/create/FormularioFornecedor'
import EditaEntrada from './components/edit/EditaEntrada'
import BuscaEntradas from './components/lista/BuscaEntradas'
import ListaItens from './components/lista/ListaItens'
import Login from './Login'
import ListaFornecedores from './components/lista/ListaFornecedor'
import RetirarItem from './components/create/RetirarItem'
import FormularioAdmin from './components/create/FormularioAdmin'
export default function mainRoutes(){
    return(
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/buscaentradas' element={<BuscaEntradas/>}/>
        <Route path='/cadastraradmin' element={<FormularioAdmin/>}/>
        <Route path='/create' element={<Cadastrar/>}/>
        <Route path='/item' element={<FormularioItem/>}/>
        <Route path='/lista' element={<ListaEntradas/>}/>
        <Route path='/editaentrada/:id' element={<EditaEntrada/>} />
        <Route path='/listaritens' element={<ListaItens/>} />
        <Route path='/listarfornecedor' element={<ListaFornecedores/>}/>
        <Route path='/retiraritem' element={<RetirarItem/>}/>
        <Route path='/cadastrarfornecedor' element={<FormularioFornecedor/>} />
    </Routes>
    )
}
