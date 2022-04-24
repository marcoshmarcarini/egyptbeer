import Link from "next/link"
import Image from "next/image"
import CabecalhoZe from "../components/CabecalhoZe"
export default function ZeDelivery(){
    return(
        <>
            <CabecalhoZe/>
            <div className="bg-yellow-400 content-ze">
            <div className="logo-egypt-ze">
                    <Image src="/img/logo-preta.png" width={150} height={150} />
                </div>
                <h1 className="titulo-ze">
                    Baixe o app do Zé Delivery em sua loja de aplicativos e receba suas bebidas favoritas na sua casa!
                </h1>
                <div className="links-ze">
                    <Link href="https://play.google.com/store/apps/details?id=com.cerveceriamodelo.modelonow">
                        <a>
                            <Image src="/img/google-play-badge.png" width={161.5} height={62.5} />
                        </a>
                    </Link>
                    <Link href="https://apps.apple.com/br/app/z%C3%A9-delivery-de-bebidas/id1070070438">
                        <a>
                            <Image src="/img/app-store-badge.svg" width={135} height={45} />
                        </a>
                    </Link>
                   
                </div>
                <div className="logo-ze">
                    <Image src="/img/ze-logo.png" width={150} height={150} />
                </div>
            </div>
        
        </>
    )
}