import React from 'react'
interface InfoTimeline {
  institucion: string;
  detalle: string;
}
const Formacion = ({ info, title }: { info: InfoTimeline[], title: string }) => {
  return (
    <>
      <h2 className="dark:text-white text-2xl font-semibold mt-6 mb-2">{title}</h2>
      <ol className="relative md:border-s border-fuchsia-300 dark:border-violet-300">
        {
          info.map(({ detalle, institucion }) => (
            <li key={detalle} className="group mb-6 md:ms-4 cursor-default">
              <div className="hidden md:block absolute w-3 h-3 bg-violet-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="mb-1 text-lg font-bold leading-none text-violet-900 dark:text-gray-300 md:hover:scale-110 md:hover:translate-x-8 transition-all">
                {detalle}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                {institucion}
              </h3>
            </li>

          ))
        }
      </ol>
    </>
  )
}

export default Formacion