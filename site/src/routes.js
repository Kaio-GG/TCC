import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from './pages/Login/index.js'
import Home  from './pages/home/index.js'
import Teste from './components/teste/index.js'
import Cadastro from './pages/EscolherCadastro/index.js'


export default function Index(){
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
				<Route path='/x' element={<Teste/>}/>
				<Route path='/cadastro' element={<Cadastro/>}/>
			</Routes>
		</BrowserRouter>	
)
    }