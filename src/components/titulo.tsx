const Titulo = ({message}: {message: string}) => {
    return (
        <div className='text-center py-3 mt-10'>
            <p className='text-6xl font-bold text-violet-400 dark:text-gray-50'>{message}</p>
            <p className='text-4xl font-semibold text-violet-400 dark:text-gray-50 opacity-40'>{message}</p>
            <p className='text-2xl font-semibold text-violet-400 dark:text-gray-50 opacity-20'>{message}</p>
            <p className='text-xl font-semibold text-violet-400 dark:text-gray-50 opacity-10'>{message}</p>
        </div>
    )
}

export default Titulo