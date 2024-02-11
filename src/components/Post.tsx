'use client'
import { Card, CardHeader, CardBody, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function Post({ autor, content, id, title, image }: { autor: string, content: string, id: string, title: string, image: string }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Card className="py-4 w-fit max-w-xs bg-fuchsia-300 min-h-[370px]" isPressable onPress={onOpen}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center justify-center">
                    <p className="text-tiny font-bold">Creado por: {autor}</p>
                    <h4 className="font-semibold text-large text-violet-900">{title}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        className="object-cover rounded-xl max-h-52 mx-auto"
                        alt="Card background"
                        src={image}
                        width={300}
                        height={300}
                    />
                </CardBody>
            </Card>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="outside"
                size="2xl"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {title}
                            </ModalHeader>
                            <ModalBody>
                                <div className="ql-editor" dangerouslySetInnerHTML={{ __html: content }}></div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}