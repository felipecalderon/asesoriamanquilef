'use client'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Logo from "./logo";
import { Ephesis } from 'next/font/google'
import { DarkMode } from "./darkmode";
import { useEffect, useState } from "react";
import { menuItems } from "@/constants/menu";
import { getIndicadores } from "@/utils/getIndicadores";
import { indicadoresStore } from "@/store/indicadores";
import { storePosts } from "@/store/postsStore";

const fuente = Ephesis({ subsets: ["latin"], weight: '400' })

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { setIndicadores } = indicadoresStore()
    const { getPosts } = storePosts()
    
    useEffect(() => {
        getPosts()
        getIndicadores()
            .then(res => setIndicadores(res))
    }, [])
    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden">
                <NavbarMenuToggle className="mr-3" aria-label={isMenuOpen ? "Cerrar" : "Abrir"} />
                <NavbarBrand>
                    <Link href="/" className="cursor-pointer flex flex-row gap-3">
                        <Logo className="w-12 drop-shadow-lg" />
                        <p className={`${fuente.className} text-2xl font-semibold text-violet-950 dark:text-violet-100`}>Barbara Manquilef</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            {/* Menú desktop */}
            <NavbarContent className="hidden sm:flex justify-between gap-6" justify="center">
                <Link href="/" className="cursor-pointer">
                    <NavbarBrand className="space-x-2">
                        <Logo className="w-12 drop-shadow-lg" />
                        <p className={`${fuente.className} text-3xl md:text-4xl font-semibold text-primario dark:text-violet-100`}>Barbara Manquilef</p>
                    </NavbarBrand>
                </Link>
                {menuItems.map((menu) => (
                    <NavbarItem key={menu.name}>
                        <Link
                            color='foreground'
                            href={menu.link}
                            size="sm"
                        >
                            {menu.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* Menú movil */}
            <NavbarMenu className="pt-9 items-center">
                {menuItems.map((menu) => (
                    <NavbarMenuItem key={menu.name}>
                        <Link
                            className="w-fit py-6 px-4 bg-primario/20 rounded-lg"
                            color='foreground'
                            href={menu.link}
                            size="lg"
                        >
                            {menu.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
            {/* <DarkMode /> */}
        </Navbar>
    );
}
