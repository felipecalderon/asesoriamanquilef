import React from 'react'
interface InfoTimeline {
  fecha: string | number;
  institucion: string;
  detalle: string;
}
const Formacion = ({info, title}: {info: InfoTimeline[], title: string}) => {
  return (
    <>
      <h2 className="dark:text-white text-2xl font-semibold mt-6 mb-2">{title}</h2>
      <ol className="relative md:border-s border-fuchsia-300 dark:border-violet-300">
        {
          info.map(({ detalle, institucion, fecha }) => (
            <li key={detalle} className="group mb-10 md:ms-4 cursor-default">
              <div className="hidden md:block absolute w-3 h-3 bg-violet-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-bold leading-none text-violet-900 dark:text-gray-300">
                {fecha}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {institucion}
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300 group-hover:font-bold group-hover:text-violet-700 transition-all">
                {detalle}
              </p>
            </li>

          ))
        }
      </ol>
    </>
  )
}

export default Formacion