import Image from "next/image"
import Cabecalho from "../components/Cabecalho";

export default function Brussels(){
    return(
        <>
            <Cabecalho />
            <h1 className="text-center mt-5 brussels-h1">A Cerveja Brussels</h1>
            <div className="brussels-body md:flex flex-row gap-5">
                <div className="brussels-area">
                    <div className="brussels-block">
                        <div className="brussels-img-area-1">
                            <Image src="/img/pg_brussels/brussels01.jpg" width={300} height={300} />
                        </div>
                        <div className="brussels-txt">
                            <h2 className="brussels-h2">Excelência no processo produtivo</h2>
                            <p className="brussels-p">
                                A grande aceitação no mercado brasileiro é fruto da 
                                seleção criteriosa das matérias primas e do rigoroso 
                                padrão de qualidade na produção. Em nosso laboratório, 
                                são inspecionados mais de 15 itens antes da cerveja 
                                ir para distribuição.
                            </p>
                        </div>
                    </div>
                    <div className="brussels-block-2">
                        <div className="brussels-img-area-2">
                            <Image src="/img/pg_brussels/brussels02.jpg" width={300} height={300} />
                        </div>
                        <div className="brussels-txt">
                            <h2 className="brussels-h2">A essência da nossa fórmula</h2>
                            <p className="brussels-p">
                                Os cuidados em todas as etapas do processo 
                                produtivo são fundamentais para manter viva 
                                a essência de nossa fórmula: uma Puro Malte 
                                de corpo leve, bem atenuada e com baixo amargor.
                            </p>
                        </div>
                    </div>
                    <div className="brussels-block">
                        <div className="brussels-img-area-3">
                            <Image src="/img/pg_brussels/brussels03.jpg" width={300} height={300} />
                        </div>
                        <div className="brussels-txt">
                            <h2 className="brussels-h2">A sua próxima paixão</h2>
                            <p className="brussels-p">
                                A perfeita combinação entre talento e sabor! 
                                Experimente e surpreenda-se.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brussels-logo-egypt">
                <Image src="/img/logo-transparente.png" width={150} height={150} />
            </div>
        </>
    )
}