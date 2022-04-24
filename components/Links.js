import Link from "next/link"
export default function LinkTree(){
    return(
        <>
            <div className="links-area">

                <div className="text-center area-btn-links"><Link href="/brussels" className="btn-links"><a>Conheça a Brussels</a></Link></div>
                <div className="text-center area-btn-links"><a href="#" className="btn-links text-center">Conheça a Estrela Sirius</a></div>
                <div className="text-center area-btn-links"><a href="#" className="btn-links">Conheça o Chopp Egypt</a></div>
                <div className="text-center area-btn-links"><a href="#" className="btn-links">Peça no Zé Delivery</a></div>
            
            </div>
        
        </>
    )
}