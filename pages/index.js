import Cabecalho from "../components/Cabecalho";
import LinkTree from "../components/Links";
import Logo from "../components/Logo";



export default function PaginaInicial(){
    return(
        <>
            <Cabecalho/>
            <div className="conteudo-index">
                <video autoPlay="autoplay" loop muted style={{ width: '1920px', height: '1080px' }} className="video-index">
                    <source src="../video/video-index.mp4" />
                </video>
                <div className="arvore-de-links">
                    <Logo/>
                    <LinkTree/>
                </div>
            </div>
        </>
    )
}