'use client'
import { guardarPost } from "@/utils/insertDB";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingText from "./ui/LoadingText";

export default function CreatePostModal({ title, content, image }: { image: string, title: string, content: string }) {
    const router = useRouter()
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [loading, setLoading] = useState(false)
    const saveContent = async () => {
        try {
            setLoading(true)
            const data = {
                autor: 'Bárbara',
                title,
                content,
                image,
            }
            await guardarPost(data)
            setLoading(false)
            router.push('/')
        } catch (error) {
            console.log({ error });
        }
    }

    const estaDesactivado = title !== '' && content !== '' && image !== ''

    return (
        <div className="flex flex-col gap-2">
            <Button
                className="bg-violet-300 px-6 font-semibold uppercase mx-auto"
                onPress={onOpen}
                isDisabled={!estaDesactivado}>
                Previsualizar POST
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="outside"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {title}
                            </ModalHeader>
                            <ModalBody>
                                <Image
                                    alt="Referencia del Post"
                                    className="object-cover rounded-xl max-h-52"
                                    src={image}
                                    width={270}
                                />
                                <div className="ql-editor" dangerouslySetInnerHTML={{ __html: content }}></div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button className="bg-violet-800 text-white" onPress={saveContent}>
                                    { !loading ? 'Publicar' : <LoadingText />}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}