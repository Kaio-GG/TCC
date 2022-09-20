import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from './pages/Login/index.js'
import Home  from './pages/home/index.js'
import Teste from './components/teste/index.js'
import Cadastro from './pages/EscolherCadastro/index.js'
import Novohorario from './pages/novohorario/index.js'
import CadastroEmpresa from './pages/Cadastro-Empresa/index.js'

export default function Index(){
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
				<Route path='/x' element={<Teste/>}/>
				<Route path='/cadastro' element={<Cadastro/>}/>
				<Route path='/novohorario' element={<Novohorario/>}/>
				<Route path='CadastroEmpresa' element={<CadastroEmpresa/>}/>
				
			</Routes>
		</BrowserRouter>	
)
    }