import React from 'react'
import { Ephesis } from 'next/font/google'
import Logo from './logo'
import {} from 'react-icons'
import { BiSolidUserCircle, BiMenuAltRight  } from 'react-icons/bi'
const fuente = Ephesis({ subsets: ["latin"], weight: '400' })

const Header = () => {
    return (
        <header className='relative'>
            <nav className="bg-violet-50 border-gray-200 dark:bg-violet-950">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse pointer-events-none">
                        <Logo />
                        <span className={`${fuente.className} text-3xl md:text-5xl font-semibold text-violet-950 dark:text-violet-100`}>
                            Barbara Manquilef
                        </span>
                    </div>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm rounded-full md:me-0 focus:ring-2 focus:ring-violet-900 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Abrir perfil</span>
                            <BiSolidUserCircle className="h-12 w-12 text-violet-900 hover:text-violet-700" />
                        </button>
                        <div className="hidden z-50 my-4 text-base list-none bg-violet-100 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-violet-950 dark:text-white">Barbara Manquilef</span>
                                <span className="block text-xs text-violet-500 truncate dark:text-gray-400">asesoriamanquilef@gmail.com</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Perfil</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Consultas</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Cerrar sesión</a>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm bg-violet-100 text-violet-900 rounded-lg md:hidden hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Abrir menú</span>
                            <BiMenuAltRight className='text-5xl'/>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-violet-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-violet-950 bg-violet-200 bg-opacity-60 hover:bg-opacity-100 hover:scale-105 rounded transition-all" aria-current="page">Inicio</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-violet-950 bg-violet-200 bg-opacity-60 hover:bg-opacity-100 hover:scale-105 rounded transition-all">Servicios</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-violet-950 bg-violet-200 bg-opacity-60 hover:bg-opacity-100 hover:scale-105 rounded transition-all">Informaciones</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-violet-950 bg-violet-200 bg-opacity-60 hover:bg-opacity-100 hover:scale-105 rounded transition-all">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header