import { NextFont } from "next/dist/compiled/@next/font"

const Titulo = ({message, fuente}: {message: string, fuente?: NextFont}) => {
    return (
        <div className={`text-center`}>
            { 
            fuente && fuente.className 
            ? <p className='text-4xl text-white md:text-5xl py-4 px-6 bg-secundarioClaro dark:text-white dark:bg-violet-950 dark:bg-opacity-20 rounded-2xl'>{message}</p> 
            : <p className='text-4xl text-primario font-bold bg-white px-6 py-2 rounded-b-2xl drop-shadow-md dark:text-violet-50'>{message}</p>
            }
        </div>
    )
}

export default Titulo