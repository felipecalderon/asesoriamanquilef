'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Logo from "./logo";
import { Ephesis } from 'next/font/google'

const fuente = Ephesis({ subsets: ["latin"], weight: '400' })

export default function NavBarv2() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Logo />
                    <p className={`${fuente.className} text-2xl md:text-5xl font-semibold text-violet-950 dark:text-violet-100`}>Barbara Manquilef</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <Logo />
                    <p className={`${fuente.className} text-3xl md:text-5xl font-semibold text-violet-950 dark:text-violet-100`}>Barbara Manquilef</p>
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
                <NavbarItem>
                    <Button as={Link} className="bg-violet-600 text-white" href="#" variant="shadow">
                        Contactar
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((menu, index) => (
                    <NavbarMenuItem key={`${menu}-${index}`}>
                        <Link
                            className="w-full z-20"
                            color='foreground'
                            href="#"
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
