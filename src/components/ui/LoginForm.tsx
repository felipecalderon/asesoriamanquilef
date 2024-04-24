'use client'
import { Button, Input } from "@nextui-org/react"
import { ChangeEvent, useState } from "react"
const LoginForm = () => {
    const initialForm = {
        email: '',
        clave: ''
    }
    const [form, setForm] = useState(initialForm)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const sendForm = async () => {
        const data = {
            email: form.email,
            clave: form.clave,
            redirect: false
        }
        console.log(data);
    }
    return (
        <div className="flex flex-col gap-4 w-1/3 px-6 mx-auto py-6">
            <div className="flex flex-col gap-2">
                <h3 className="text-default-500 text-small text-center">Ingreso</h3>
                <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input
                        onChange={handleChange}
                        name="email"
                        type="text"
                        label="Email"
                        labelPlacement='inside'
                    />
                </div>
                <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input
                        onChange={handleChange}
                        name="clave"
                        type="password"
                        label="Contraseña"
                        labelPlacement='inside'
                    />
                </div>
                <Button
                    onClick={sendForm}
                >
                    Ingresar
                </Button>
            </div>
        </div>
    )
}

export default LoginForm