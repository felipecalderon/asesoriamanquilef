'use client'
import { Switch } from '@nextui-org/react'
import { HiSun } from "react-icons/hi";
import { IoMoonSharp } from "react-icons/io5";
import React, { useEffect, useState } from 'react'
import { getItemBoolean, setItemBoolean } from '@/utils/localstorage';

export const DarkMode = () => {
    const [isDark, setDark] = useState<boolean>(getItemBoolean('dark'));

    // actualizar localStorage y la clase cuando 'isDark' cambia
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setItemBoolean('dark', isDark);
            if (isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, [isDark]);

    return (
        <Switch
            defaultSelected
            size="lg"
            color="secondary"
            isSelected={isDark}
            onValueChange={setDark}
            thumbIcon={() => (
                isDark
                    ? <IoMoonSharp className='text-fuchsia-900' />
                    : <HiSun className='text-yellow-600' />
            )}
        >
        </Switch>
    )
}
