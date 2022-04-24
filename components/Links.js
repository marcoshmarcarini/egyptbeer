import Link from "next/link"
export default function LinkTree(){
    return(
        <>
            <div className="links-area">

                <div className="text-center area-btn-links"><Link href="/brussels" className="btn-links text-center"><a>Conheça a Brussels</a></Link></div>
                <div className="text-center area-btn-links"><Link href="#" className="btn-links text-center"><a>Conheça a Estrela Sirius</a></Link></div>
                <div className="text-center area-btn-links"><Link href="#" className="btn-links text-center"><a>Conheça o Chopp Egypt</a></Link></div>
                <div className="text-center area-btn-links"><Link href="/zedelivery" className="btn-links text-center"><a>Peça no Zé Delivery</a></Link></div>
            
            </div>
        
        </>
    )
}