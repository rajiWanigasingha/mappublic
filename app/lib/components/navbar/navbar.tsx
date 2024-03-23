import Link from "next/link";

export default function Navbar(){
    return(
        <>
        <div className="w-screen p-4 shadow-2xl flex flex-row justify-between mb-6">
            <div>
                <h1 className="text-lg md:text-xl lg:text-xl font-semibold"><Link href='/'>Where am I</Link></h1>
            </div>
        </div>
        </>
    )
}