'use client'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Logo from "./logo";
import { Ephesis } from 'next/font/google'
import { DarkMode } from "./darkmode";
import { useState } from "react";
import { menuItems } from "@/constants/menu";

const fuente = Ephesis({ subsets: ["latin"], weight: '400' })

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="h-24"
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
            <NavbarMenu>
                {menuItems.map((menu) => (
                    <NavbarMenuItem key={menu.name}>
                        <Link
                            className="w-full pt-6 z-20"
                            color='foreground'
                            href={menu.link}
                            size="lg"
                        >
                            {menu.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
            <DarkMode />
        </Navbar>
    );
}
