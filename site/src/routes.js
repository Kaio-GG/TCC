import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from './pages/Login/index.js'
import Home  from './pages/home/index.js'
import Teste from './components/teste/index.js'
import Cadastro from './pages/EscolherCadastro/index.js'
import Novohorario from './pages/UsuarioEmpresa/novohorario'
import CadastroEmpresa from './pages/Cadastro-Empresa/index.js'
import CadastroUsuario from './pages/Cadastro-Usuario/index.js'
import ClienteHome from './pages/UsuarioCliente/UsuarioHome/index.js'
import ConsultaEmpresa from './pages/UsuarioCliente/UsuarioEmpresaPagina/index.js'
import AgendarEmpresa from './pages/UsuarioCliente/UsuarioEmpresaPaginaAgendar/index.js'
import AgendarHorarioEmpresa from './pages/UsuarioCliente/UsuarioEmpresaPaginaAgendarHorario/index.js'
import AgendarFinalizado from './pages/UsuarioCliente/UsuarioEmpresaFinalizado/index.js'
import HomeEmpresa from './pages/UsuarioEmpresa/adm-empresa-home/index.js'
import InformacoesHome from './pages/UsuarioEmpresa/informacoesHome/index.js'
import PaginaEmpresa from './pages/UsuarioEmpresa/PaginaEmpresa/index.js'



export default function Index(){
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
				<Route path='/x' element={<Teste/>}/>
				<Route path='/cadastro' element={<Cadastro/>}/>
				<Route path='/novohorario' element={<Novohorario/>}/>
				<Route path='cadastro/empresa' element={<CadastroEmpresa/>}/>
				<Route path='cadastro/usuario' element={<CadastroUsuario/>}/>
				<Route path='/home/usuario' element={<ClienteHome/>}/>
				<Route path='/home/usuario/empresa/consulta' element={<ConsultaEmpresa/>}/>

				<Route path='/home/usuario/empresa/consulta/:id/agendar' element={<AgendarEmpresa/>}/>
				
				<Route path='/home/usuario/empresa/consulta/agendar/Horario' element={<AgendarHorarioEmpresa/>}/>
				<Route path='/home/usuario/empresa/consulta/agendar/Horario/finalizado' element={<AgendarFinalizado/>}/>
				<Route path='/home/empresa' element={<HomeEmpresa/>}/>
				<Route path='/home/empresa/pagina-empresa' element={<PaginaEmpresa/>}/>
				<Route path='/empresa/:id/informacoes' element={<InformacoesHome/>}/>

			</Routes>
		</BrowserRouter>	
)
    }