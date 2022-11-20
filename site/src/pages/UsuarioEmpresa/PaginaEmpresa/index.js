import './index.scss';
import HeaderEmpresa from '../../../components/header-adm-empresa';
import Storage, { set } from 'local-storage';
import { confirmAlert } from 'react-confirm-alert'; 

import { useEffect, useState } from 'react';


import { CarregarPagina, AlterarPagina, CarregarImagem, buscarImagem, AdicionarPublicacao, listarPublicacao, DeletarPublicacao, AlterarPublicacao, ListarTags, salvarImagemPublic, CarregarImagempublic, gerarIdPublicacaoEmpresa, Verificacoes, EditarVerificacoes, listarVerificações, adiciTag, ListarTagsPag, loadLocal} from '../../../api/paginaEmpresa';
import { loadPage } from '../../../api/Intermediario';
import { toast } from 'react-toastify';


export default function PaginaEmpresa() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [logo, setLogo] = useState();
    const [usuario, setUsuario] = useState([])

    const [publicacao, setPublicacao] = useState([]);
    const [tituloPublicacao, setTitutloPublicacao] = useState('Adicionar Titulo');
    const [corpoPublicacao, setCorpoPublicacao] = useState('Digite algo');
    const [imgpublic, setImgPublic] = useState('');

    const [vlpublic, setVlPublic] = useState(100);

    const [cont, setCont] = useState(0);
    const [contpubli, setContpubli] = useState(0);

    const [local, setLocal] = useState([]);

    const [altTituloPublicacao, setAltTitutoPublicao] = useState('');
    const [altcorpoPublicacao, setAltCorpoPublicacao] = useState('');

    const [face, setFace] = useState('');
    const [isnta, setInsta] = useState('');
    const [youtube, setYoutube] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp , setWhatsApp] = useState('');


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
            listarTagPagg();
            carregarLocal(id)
        }
    }, [])
    useEffect(() => {
        if (id){
            mostrarVerificacoes();
            carregarinf();
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
            toast.error(err.message)
        }
        
    }

    async function carregarLocal(){
        const r = await loadLocal(id)
        setLocal(r)
    }

    async function carregarinf(){
        try{
            const resp = await loadPage(id);
            setUsuario(resp)
            console.log(usuario)
        }catch (err) {
            toast.error(err.message)
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
               toast.dark('Pagina Alterada😃😃') 
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

            toast.dark('Publicado')
        } catch(err) {
            toast.error('Não foi possivel Adicionar Uma publicação')
        }
    }

    async function carregarPublicaoes() {
        try{
            const resp = await listarPublicacao(id)

            setPublicacao(resp)
        } catch (err) {
            toast.error('erro em listar as publicações')
            toast.error(err.message)
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
    async function mostrarVerificacoes(){
        const a = await listarVerificações(idEmpresa)

        if(a.length === 0){
            ConsultarValidaçoes()
        }
        else{
            setFace    (a[0].nomeVerificacao)
            setInsta   (a[2].nomeVerificacao)
            setYoutube (a[4].nomeVerificacao)
            setEmail   (a[6].nomeVerificacao)
            setWhatsApp(a[8].nomeVerificacao)         
        }
    }

    async function ConsultarValidaçoes(){

        await Verificacoes(1, idEmpresa, 'Facebook/')
        await Verificacoes(2, idEmpresa, 'Instagram/')
        await Verificacoes(3, idEmpresa, 'Youtube.com/')
        await Verificacoes(4, idEmpresa, 'mail.google.com/')
        await Verificacoes(5, idEmpresa, 'web.whatsapp.com/')

        const a = await listarVerificações(idEmpresa)
        
        
        setFace    (a[0].nomeVerificacao)
        setInsta   (a[2].nomeVerificacao)
        setYoutube (a[4].nomeVerificacao)
        setEmail   (a[6].nomeVerificacao)
        setWhatsApp(a[8].nomeVerificacao)   
    }

    useEffect(() => {  
        mudarValidacoes(face, 1)    
    }, [face]) 
    useEffect(() => {
        mudarValidacoes(isnta, 2)       
    }, [isnta]) 
    useEffect(() => {
        mudarValidacoes(youtube, 3)       
    }, [youtube]) 
    useEffect(() => {
        mudarValidacoes(email, 4)        
    }, [email]) 
    useEffect(() => {
        mudarValidacoes(whatsapp, 5)      
    }, [whatsapp]) 

    async function mudarValidacoes(b, c){
        if(b !== ""){
            const a = await EditarVerificacoes(b, idEmpresa, c)
        }

    } 

    

    //TAG'S =====================================================================

    async function listarTags(){
        const a = await ListarTags();
        setTags(a)
    }
    async function listarTagPagg() {
        const a = await ListarTagsPag(idEmpresa)
        let b = []
        let i = 0;

        for(i; i < a.length ; i++){
            b[i] = a[i].idTag
            console.log(b)
        }


        setTagsSelecionadas(b)

        console.log(a)
    }

    function buscarNomeTag(id) {
        const cat = Tags.find(item => item.idTag == id);
        return cat.tag
        
    }

    function removerTag(id) {
        const x = tagsSelecionas.filter(item => item != id);
        setTagsSelecionadas(x);
    }


    function adicionarTag() {
        if (!idTag) return;

        if(!tagsSelecionas.find(item => item === idTag)) {
            const tagg = [...tagsSelecionas, idTag];
            addTag(idTag);
            setTagsSelecionadas(tagg);
        }
    }

    async function addTag(idTag) {
        if(tagsSelecionas.find(item => item !== idTag))
            await adiciTag(idTag, idEmpresa)
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
                                
                            
                                {local.map(item => 
                                <div className="ava-locais">
                                   <p>{item.pais}, {item.cidade}</p>
                                    <p>{item.endereco}</p >
                                    <div className='image'>
                                        <img src='/assets/images/Salvar.svg' alt='editarperfil' onClick={Salvar}/>
                                    </div>
                                </div>
                                )}
                                
                            </div>
                        }



                        {publicacao.map((item, index) => 
                            <div className="card-Publicacao">
                                {vlpublic===index && <div className='agrupamento-inputs3'>
                                    <div className='a'>
                                        <input value={altTituloPublicacao} type='text' onChange={e => setAltTitutoPublicao(e.target.value, index)}/>
                                        <div>
                                            <img src='/assets/images/lixeira2.svg' alt='remover' onClick={() => removerPublicacao(item.Empresa, item.Publicacao)}/> 
                                            <img src='/assets/images/Salvar.svg' alt='editarperfil' onClick={() =>SalvarAlterarPublic(item.Empresa, item.Publicacao, index)}/>
                                        </div>
                                    </div>
                                    <div className='b'>
                                        <textarea value={altcorpoPublicacao} type='text' onChange={e => setAltCorpoPublicacao(e.target.value, index)}/>
                                        {item.imagem !== null && <img src={exibirImagem1(index)} alt='' className='imgpublicc' />}
                                    </div>
                                </div>}

                                {vlpublic!==index && vlpublic!==100  && <div className='agrupamento-inputs4'>
                                    <div className='a'>
                                        <h1>{item.Titulo}</h1>
                                        <div>
                                            <img src='/assets/images/lixeira2.svg' alt='remover' onClick={() => removerPublicacao(item.Empresa, item.Publicacao)}/> 
                                            <img src='/assets/images/editar.svg' alt='editarperfil' onClick={() => AlterarPublic(index)}/>
                                        </div>
                                    </div>
                                    {item.imagem !== null && <img src={exibirImagem1(index)} alt='' className='imgpublicc' />}
                                    <p>{item.CaixaTexto}</p>
                                </div>}

                                {vlpublic===100 && <div className='agrupamento-inputs4'>
                                    <div className='a'>
                                        <h1>{item.Titulo}</h1>
                                        <div>
                                            <img src='/assets/images/lixeira2.svg' alt='remover' onClick={() => removerPublicacao(item.Empresa, item.Publicacao)}/> 
                                            <img src='/assets/images/editar.svg' alt='editarperfil' onClick={() => AlterarPublic(index)}/>
                                        </div>
                                    </div>
                                    {item.imagem !== null && <img src={exibirImagem1(index)} alt='' className='imgpublicc' />}
                                    <p>{item.CaixaTexto}</p>
                                </div>}
                                
                            </div>
                        )}
                        

                        {contpubli === 0 &&<div className="card-Publicacao1">
                            <p>Adicionar Card</p>
                            <img src='/assets/images/add.svg' alt='add' onClick={Novapubli}/>
                            </div> }



                        {contpubli === 1 &&<div className="card-Publicacao-click">
                            <div className='agrupamento-inputs1'>
                                <input type='text' value={tituloPublicacao} onChange={e => setTitutloPublicacao(e.target.value)}/>

                                <div className='publicar' onClick={ConfirNovapubli}>
                                    <p> Publicar </p>
                                </div>
                            </div>

                            <div className='agrupamento-inputs'>
                                <textarea type='text' value={corpoPublicacao} onChange={e => setCorpoPublicacao(e.target.value)}/>
                            </div>

                            <div className='agrupamento-img-icon'>
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
                        </div>}



                    </div>
                    <div className="agrup-direita">

                        <div className="CardCanto">
                            <h3> Verificaçâo</h3>
                            <p> facebook </p><input type='text'  value={face} onChange={e => setFace(e.target.value)}/>
                            <p> instagram </p><input type='text' value={isnta} onChange={e => setInsta(e.target.value)}/>
                            <p> email </p><input type='text'     value={email} onChange={e => setEmail(e.target.value)}/>
                            <p> Youtube </p><input type='text'   value={youtube} onChange={e => setYoutube(e.target.value)}/>
                            <p> whatsApp </p><input type='text'  value={whatsapp} onChange={e => setWhatsApp(e.target.value)}/>
                        </div>


                        
                            
                       
                    </div>
                </div>
            </div>
        </main>
    )
}


