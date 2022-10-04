import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from './pages/Login/index.js'
import Home  from './pages/home/index.js'
import Teste from './components/teste/index.js'
import Cadastro from './pages/EscolherCadastro/index.js'
import Novohorario from './pages/NovoHorario/index.js'
import CadastroEmpresa from './pages/Cadastro-Empresa/index.js'
import CadastroUsuario from './pages/Cadastro-Usuario/index.js'
import ClienteHome from './pages/UsuarioCliente/UsuarioHome/index.js'
import ConsultaEmpresa from './pages/UsuarioCliente/UsuarioEmpresaPagina/index.js'

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
				<Route path='CadastroUsuario' element={<CadastroUsuario/>}/>
				<Route path='/home/usuario' element={<ClienteHome/>}/>
				<Route path='/home/usuario/empresa/consulta' element={<ConsultaEmpresa/>}/>
			</Routes>
		</BrowserRouter>	
)
    }