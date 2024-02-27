import Image from "next/image";

const Logo=({imageUrl}:{imageUrl: string})=>{

    return(
        <>
            <Image src={imageUrl} alt="image" width={'100'} height={'30'}/>
        </>
    )
}
export default  Logo