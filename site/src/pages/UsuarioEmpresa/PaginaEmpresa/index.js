import './index.scss';
import HeaderEmpresa from '../../../components/header-adm-empresa';
import Storage, { set } from 'local-storage';
import { confirmAlert } from 'react-confirm-alert'; 

import { useEffect, useState } from 'react';


import { CarregarPagina, AlterarPagina, CarregarImagem, buscarImagem, AdicionarPublicacao, listarPublicacao, DeletarPublicacao, AlterarPublicacao, ListarTags, salvarImagemPublic, CarregarImagempublic, gerarIdPublicacaoEmpresa, Verificacoes } from '../../../api/paginaEmpresa';


export default function PaginaEmpresa() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [logo, setLogo] = useState();

    const [publicacao, setPublicacao] = useState([]);
    const [tituloPublicacao, setTitutloPublicacao] = useState('Adicionar Titulo');
    const [corpoPublicacao, setCorpoPublicacao] = useState('Digite algo');
    const [imgpublic, setImgPublic] = useState('');
    const [publi, setPubli] = useState(1);

    const [vlpublic, setVlPublic] = useState(100);

    const [cont, setCont] = useState(0);
    const [contpubli, setContpubli] = useState(0);

    const [altTituloPublicacao, setAltTitutoPublicao] = useState('');
    const [altcorpoPublicacao, setAltCorpoPublicacao] = useState('');

    const [face, setFace] = useState('Facebook/');
    const [isnta, setInsta] = useState('Instagram/');
    const [youtube, setYoutube] = useState('Youtube.com/');
    const [email, setEmail] = useState('mail.google.com//');
    const [whatsapp , setWhatsApp] = useState('web.whatsapp.com/');


    const [idTag, setIdTag] = useState();
    const [Tags, setTags] = useState([]);
    const [tagsSelecionas, setTagsSelecionadas] = useState([]);

    const [pagina, setPagina] = useState({});
    const paulo = Storage('Empresa-Logada');
    const id = paulo.ID_USUARIO_EMPRESA;
    const idEmpresa = paulo.ID_USUARIO_EMPRESA

    useEffect(() => {
        if (id){
            PaginaEmpresa();
            carregarPublicaoes();
            listarTags();
        }
    }, [])

    //Infomações principais da empresa =============================================

    async function PaginaEmpresa(){
        try{
            const resp = await CarregarPagina(id)
            setNome(resp.Nome)
            setDescricao(resp.descricao)
            setLogo(resp.Logo)
            setPagina(resp)
        } catch (err) {
            alert(err.message)
        }
        
    }

    async function Alterarinf(){
        try{
            await AlterarPagina(idEmpresa, nome, descricao);

            if (typeof(logo) == 'object')
                await CarregarImagem(idEmpresa, logo)

            PaginaEmpresa();

            if(logo === pagina.Logo && nome === pagina.Nome && descricao === pagina.descricao){

            }
            else{
               alert('Pagina Alterada') 
            }
            
        } catch(err){
             alert(err.message)             
        }
        
    }

    function Salvar() {
        Alterarinf();

        const a = 0;
        setCont(a);
    }

    function Alterar() {
        setNome(pagina.Nome)
        setDescricao(pagina.descricao)

        const a = 1;
        setCont(a);
    }

    //Publições ==================================================================

    async function novaPublicacao() {
        try{
            if(imgpublic === ''){
                await AdicionarPublicacao(idEmpresa, tituloPublicacao, corpoPublicacao);  
            }
            else{
                const a = await gerarIdPublicacaoEmpresa(idEmpresa);
                await AdicionarPublicacao(idEmpresa, tituloPublicacao, corpoPublicacao);

                if(a.id === null){
                    alert('funcionou')
                    await CarregarImagempublic(1, imgpublic);
                }
                else{
                    await CarregarImagempublic(a.id, imgpublic); 
                }
            }

            setAltTitutoPublicao(tituloPublicacao);
            setAltCorpoPublicacao(corpoPublicacao);
            setImgPublic('')

            carregarPublicaoes();

            alert('Publicado')
        } catch(err) {
            alert('Não foi possivel Adicionar Uma publicação')
        }
    }

    async function carregarPublicaoes() {
        try{
            const resp = await listarPublicacao(id)

            setPublicacao(resp)
        } catch (err) {
            alert('erro em listar as publicações')
            alert(err.message)
        }
    }

    async function removerPublicacao(Empresa, Publicacao){

        confirmAlert({
            title: 'Deletar Publicação',
            message: 'Deseja deletar essa Publcação',
            buttons: [
              {
                label: 'Sim',
                onClick: async() => {
                    await DeletarPublicacao(Empresa, Publicacao);
                    carregarPublicaoes();
                }
              },
              {
                label: 'Não',
              }
            ]
          });

         
    }


    function Novapubli() {
        const a = 1;
        setContpubli(a);
    }
    
    function ConfirNovapubli() {
        novaPublicacao()

        const a = 0;
        setContpubli(a);
    }

    function AlterarPublic(index) {
        let b = publicacao[index].Titulo;
        setAltTitutoPublicao(b)
        let c = publicacao[index].CaixaTexto;
        setAltCorpoPublicacao(c)

        const a = index;
        setVlPublic(a);
    }

    function SalvarAlterarPublic(idEmpresa, idPublicacao, index) {
        if(altTituloPublicacao === publicacao[index].Titulo && altcorpoPublicacao === publicacao[index].CaixaTexto){
            const a = 100;
            setVlPublic(a);
        }
        else{
            confirmAlert({
                title: 'Alterar Publicação ?',
                message: 'Deseja Alterar essa Publcação',
                buttons: [
                    {
                    label: 'Sim',
                    onClick: async() => {
                        MudarPublic(altTituloPublicacao, altcorpoPublicacao, idEmpresa, idPublicacao);
                        carregarPublicaoes();
                    }
                    },
                    {
                    label: 'Não'
                    }
                ]
                });
    
            const a = 100;
            setVlPublic(a);
        }
    }

    async function MudarPublic(nome, conteudo, idEmpresa, idPublicacao) {
        await AlterarPublicacao(nome, conteudo, idEmpresa, idPublicacao)
    }

    //Validações  =====================================================================

    async function AdicionarValidações(id, Link){
        await Verificacoes(idEmpresa, id, Link)
    }

    useEffect(face => {
        if(face !== 'Facebook/')
            AdicionarValidações(1, face);
        else{

        }
            
    }, )

    useEffect(isnta => {
        if(isnta !== 'Instagram/')
            AdicionarValidações(2, isnta);
        else{
            
        }
    }, )

    useEffect(youtube => {
        if(youtube !== 'Youtube.com/')
            AdicionarValidações(3, youtube);
        else{
            
        }
    }, )

    useEffect(email => {
        if(email !== 'mail.google.com//')
            AdicionarValidações(4, email);
        else{
            
        }
    }, )

    useEffect(whatsapp => {
        if(whatsapp !== 'web.whatsapp.com/')
            AdicionarValidações(5, whatsapp);
        else{
            
        }
    }, )
    

    //TAG'S =====================================================================

    async function listarTags(){
        const a = await ListarTags();
        setTags(a)
    }

    function adicionarTag() {
        if (!idTag) return;

        if(!tagsSelecionas.find(item => item === idTag)) {
            const tagg = [...tagsSelecionas, idTag];
            setTagsSelecionadas(tagg);
        }
    }

    //Imagens da empresa  ========================================================


    function receberImagem() {
        document.getElementById('imagem').click();
    }

    function mostrarImagem() {
        if (typeof(logo) == 'object'){
            return URL.createObjectURL(logo)
        }
        else {
            return buscarImagem(logo)
        }
        
    }

   //Imagens da Publicação  ==========================================================


    function escolherImagem() {
        document.getElementById('imagem1').click();
    }

    function exibirImagem() {
        if (typeof(imgpublic) == 'object'){

            return URL.createObjectURL(imgpublic)

        }
        else {
            return buscarImagem(imgpublic)
        }
    }

    function exibirImagem1(pos) {
        console.log(buscarImagem(publicacao[pos].imagem))
        return buscarImagem(publicacao[pos].imagem)

    }


    return(
        <main className="PaginaEmpresa">
            <div className="PaginaEmpresa-Centro">
                <HeaderEmpresa class="perfil"/>
                <div className='agrups'>
                    <div className="agrup-esquerda">

                        {cont === 0 &&
                            <div className="card-empresa">
                                <div className='a'>
                                    <div className="img">
                                        {!logo &&
                                            <img src='/assets/images/addimg.png' alt='Sem imagem' />
                                        }
                                        {logo &&
                                            <img src={mostrarImagem()} alt='' className='logo' />
                                        }
                                    </div>
                                    <div className="nome-desc">
                                        <h3 className="nome">{pagina.Nome}</h3>
                                        <p className="desc">{pagina.descricao}</p>
                                    </div>
                                </div>
                                <div className="ava-locais">
                                    <div className='estrelas'>
                                        <div className='estrela'></div>
                                        <div className='estrela'></div>
                                        <div className='estrela'></div>
                                        <div className='estrela'></div>
                                        <div className='estrela'></div>
                                    </div>
                                    <p> Brasil, São Paulo, Sp </p>
                                    <p> Rua seila, 32 </p>
                                    <div className='image'>
                                        <img src='/assets/images/editar.svg' alt='editarperfil' onClick={Alterar}/>
                                    </div>
                                </div>
                            </div>
                        }



                        {cont === 1 &&
                            <div className="card-empresa">
                                <div className='a'>
                                    <div className="img" onClick={receberImagem}>

                                        {!logo &&
                                            <img src='/assets/images/addimg.png' alt='Sem imagem' />
                                        }
                                        {logo &&
                                            <img src={mostrarImagem()} alt='' className='logo' />
                                        }
                                         <input type="file" id="imagem" onChange={e => setLogo(e.target.files[0])} />
                                    </div>
                                    <div className="nome-desc">
                                        <input className="nome" value={nome} type='text' onChange={e => setNome(e.target.value)} />
                                        <textarea className="desc" value={descricao} onChange={e => setDescricao(e.target.value)} />
                                    </div>
                                </div>
                                <div className="ava-locais">
                                    <div className='estrelas'>
                                        <div className='estrela'></div>
                                        <div className='estrela'></div>
                                        <div className='estrela'></div>
                                        <div className='estrela'></div>
                                        <div className='estrela'></div>
                                    </div>
                                    <p> Brasil, São Paulo, Sp </p>
                                    <p> Rua seila, 32 </p>
                                    <div className='image'>
                                        <img src='/assets/images/Salvar.svg' alt='editarperfil' onClick={Salvar}/>
                                    </div>
                                </div>
                            </div>
                        }


                        {publicacao.map((item, index) => 
                            <div className="card-Publicacao">
                                {vlpublic===index && <div className='agrupamento-inputs'>
                                    <input value={altTituloPublicacao} type='text' onChange={e => setAltTitutoPublicao(e.target.value, index)}/>
                                    <input value={altcorpoPublicacao} type='text' onChange={e => setAltCorpoPublicacao(e.target.value, index)}/>
                                    {item.imagem !== null && <img src={buscarImagem(publicacao[index].imagem)} alt='' className='imgpublicc' />}
                                    <div>
                                    <img src='/assets/images/lixeira.svg' alt='remover' onClick={() => removerPublicacao(item.Empresa, item.Publicacao)}/> 
                                    <img src='/assets/images/Salvar.svg' alt='editarperfil' onClick={() =>SalvarAlterarPublic(item.Empresa, item.Publicacao, index)}/>
                                    </div>

                                </div>}

                                {vlpublic!==index && vlpublic!==100  && <div className='agrupamento-inputs'>
                                    <h1>{item.Titulo}</h1>
                                    <p>{item.CaixaTexto}</p>
                                    {item.imagem !== null && <img src={exibirImagem1(index)} alt='' className='imgpublicc' />}
                                    <div>
                                    <img src='/assets/images/lixeira.svg' alt='remover' onClick={() => removerPublicacao(item.Empresa, item.Publicacao)}/> 
                                    <img src='/assets/images/editar.svg' alt='editarperfil' onClick={() => AlterarPublic(index)}/>
                                    </div>
                                </div>}

                                {vlpublic===100 && <div className='agrupamento-inputs'>
                                    <h1>{item.Titulo}</h1>
                                    <p>{item.CaixaTexto}</p>
                                    {item.imagem !== null && <img src={exibirImagem1(index)} alt='' className='imgpublicc' />}
                                    <div>
                                    <img src='/assets/images/lixeira.svg' alt='remover' onClick={() => removerPublicacao(item.Empresa, item.Publicacao)}/> 
                                    <img src='/assets/images/editar.svg' alt='editarperfil' onClick={() => AlterarPublic(index)}/>
                                    </div>
                                </div>}
                                
                            </div>
                        )}
                        

                        {contpubli === 0 &&<div className="card-Publicacao">
                            <p>Adicionar Card</p>
                            <img src='/assets/images/add.svg' alt='add' onClick={Novapubli}/>
                            </div> }



                        {contpubli === 1 &&<div className="card-Publicacao-click">
                            <div className='agrupamento-inputs'>
                                <input type='text' value={tituloPublicacao} onChange={e => setTitutloPublicacao(e.target.value)}/>
                            </div>

                            <div className='agrupamento-img-icon'>
                                <div>
                                    <img src='/assets/images/Salvar.svg' alt='add' onClick={ConfirNovapubli}/>
                                </div>
                                <div className='addimg' onClick={escolherImagem}>
                                    {!imgpublic &&
                                        <img src='/assets/images/addimg.png' alt='Sem imagem' />
                                    }
                                    {imgpublic &&
                                        <img src={exibirImagem(imgpublic)} alt='' className='imgpublic' />
                                    }

                                    <input type="file" id="imagem1" onChange={e => setImgPublic(e.target.files[0])} />
                                </div>
                            </div>
                            <div className='agrupamento-inputs'>
                                <input type='text' value={corpoPublicacao} onChange={e => setCorpoPublicacao(e.target.value)}/>
                            </div>
                        </div>}



                    </div>
                    <div className="agrup-direita">

                        <div className="CardCanto">
                            <h3> verificaçâo</h3>
                            <p> facebook </p><input type='text'  value={face} onChange={e => setFace(e.target.value)}/>
                            <p> instagram </p><input type='text' value={isnta} onChange={e => setInsta(e.target.value)}/>
                            <p> email </p><input type='text'     value={email} onChange={e => setEmail(e.target.value)}/>
                            <p> Youtube </p><input type='text'   value={youtube} onChange={e => setYoutube(e.target.value)}/>
                            <p> whatsApp </p><input type='text'  value={whatsapp} onChange={e => setWhatsApp(e.target.value)}/>
                        </div>

                        <div className="CardCanto">
                            <h3> certificação</h3>
                            <p> CNPJ </p>
                            <p> Certificados </p>
                        </div>

                        <div className="CardCanto">
                            <h3> Compartilhar</h3>
                        </div>

                        <div className="CardCanto">
                            <div>
                                <h3>TAG's</h3>
                                <select value={idTag} onChange={e => setIdTag(e.target.value)}>
                                    <option selected disabled hidden> Selecione uma Tag</option>
                                {Tags.map((item, index) =>
                                        <option value={item.idTag} onClick={adicionarTag}> 
                                            {item.tag}
                                        </option> 
                                    )}
                                </select>
                            </div>
                            <div>
                                {tagsSelecionas.map(item =>
                                        <div>

                                        </div>
                                    )}
                            </div>
                            <img className='mais' src='/assets/images/add.svg' alt='Adicionar Tag' onClick={adicionarTag}/>  
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}