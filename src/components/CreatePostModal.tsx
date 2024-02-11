import { guardarPost } from "@/utils/insertDB";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalProps, Button, useDisclosure, Image } from "@nextui-org/react";

export default function CreatePostModal({ title, content, image }: { image: string, title: string, content: string }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const saveContent = async () => {
        try {
            const data = {
                autor: 'Bárbara',
                title,
                content,
                image,
            }
            const post = await guardarPost(data)
        } catch (error) {
            console.log({ error });
        }
    }

    const estaDesactivado = title !== '' && content !== ''
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
                scrollBehavior="inside"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {title}
                            </ModalHeader>
                            <ModalBody>
                                <Image
                                    alt="Card background"
                                    className="object-cover rounded-xl"
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
                                    Publicar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}