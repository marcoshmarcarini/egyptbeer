import Image from "next/image"

export default function Logo(){
    return (
        <>
            <div>
                <Image src="/img/logo-transparente.png" width={150} height={150} />
            </div>
        </>
    )
}