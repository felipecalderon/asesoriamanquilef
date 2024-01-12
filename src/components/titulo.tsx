import { NextFont } from "next/dist/compiled/@next/font"

const Titulo = ({message, fuente}: {message: string, fuente?: NextFont}) => {
    return (
        <div className={`${fuente && fuente.className} text-center`}>
            { 
            fuente && fuente.className 
            ? <p className='text-5xl md:text-6xl text-fuchsia-800 py-4 px-6 bg-opacity-50 bg-violet-200 dark:text-white dark:bg-violet-950 dark:bg-opacity-20 rounded-2xl'>{message}</p> 
            : <p className='text-6xl font-bold text-white drop-shadow-md dark:text-violet-50'>{message}</p>
            }
        </div>
    )
}

export default Titulo