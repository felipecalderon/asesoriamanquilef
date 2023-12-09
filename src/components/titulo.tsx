import { NextFont } from "next/dist/compiled/@next/font"

const Titulo = ({message, fuente}: {message: string, fuente?: NextFont}) => {
    return (
        <div className={`${fuente && fuente.className} py-4 px-6 bg-violet-950 bg-opacity-30 rounded-2xl`}>
            { 
            fuente && fuente.className 
            ? <p className='text-5xl md:text-8xl text-gray-50'>{message}</p> 
            : <p className='text-4xl md:text-5xl font-bold text-gray-50'>{message}</p>
            }
        </div>
    )
}

export default Titulo