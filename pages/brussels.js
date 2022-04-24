import Image from "next/image"

export default function Brussels(){
    return(
        <>
            <div className="brussels-body md:flex flex-row gap-5">
                <div className="brussels-img-area">
                    <Image src="/img/Heineken.jpg" width={700} height={500} />
                </div>
                <div className="brussels-txt-area">
                    <div>
                        <h2>Excelência no processo produtivo</h2>
                        <p>
                            A grande aceitação no mercado brasileiro é fruto da seleção criteriosa das matérias primas e do rigoroso padrão de qualidade na produção. Em nosso laboratório, são inspecionados mais de 15 itens antes da cerveja ir para distribuição.
                        </p>
                    </div>
                    <div>
                        <h2>A essência da nossa fórmula</h2>
                        <p>
                            Os cuidados em todas as etapas do processo produtivo são fundamentais para manter viva a essência de nossa fórmula: uma Puro Malte de corpo leve, bem atenuada e com baixo amargor.
                        </p>
                    </div>
                    <div>
                        <h2>A sua próxima paixão</h2>
                        <p>
                            A perfeita combinação entre talento e sabor! Experimente e surpreenda-se.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}