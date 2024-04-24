'use client'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Logo from "./logo";
import { Ephesis } from 'next/font/google'
import { DarkMode } from "./darkmode";
import { useState } from "react";
import { convertirCadena } from "@/utils/textoaURL";

const fuente = Ephesis({ subsets: ["latin"], weight: '400' })

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Servicios Jurídicos",
        "Artículos informativos",
        "Acerca de mí",
    ];

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="h-24"
        >
            <NavbarContent className="sm:hidden">
                <NavbarMenuToggle className="w-fit" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="center">
                <NavbarBrand>
                    <Logo className="w-10 drop-shadow-lg"/>
                    <p className={`${fuente.className} text-xl sm:text-2xl md:text-5xl font-semibold text-violet-950 dark:text-violet-100`}>Barbara Manquilef</p>
                </NavbarBrand>
            </NavbarContent>
            {/* Menú desktop */}
            <NavbarContent className="hidden sm:flex justify-between gap-6" justify="center">
                <NavbarBrand className="space-x-2">
                    <Logo className="w-12 drop-shadow-lg"/>
                    <p className={`${fuente.className} text-3xl md:text-4xl font-semibold text-primario dark:text-violet-100`}>Barbara Manquilef</p>
                </NavbarBrand>
                {menuItems.map((menu, index) => (
                    <NavbarItem key={`${menu}-${index}`}>
                        <Link
                            color='foreground'
                            href="#"
                            size="sm"
                        >
                            {menu}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                    <DarkMode />
            </NavbarContent>
            {/* Menú movil */}
            <NavbarMenu>
                {menuItems.map((menu, index) => (
                    <NavbarMenuItem key={`${menu}-${index}`}>
                        <Link
                            className="w-full pt-6 z-20"
                            color='foreground'
                            href={convertirCadena(menu)}
                            size="lg"
                        >
                            {menu}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
