'use client'
import { IPost } from "@/constants/interfaces-local";
import { Card, CardHeader, CardBody, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function Service({ post }: { post: IPost }) {
    const { subtitle, content, id, title, image } = post
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Card className="bg-primario/30 flex flex-col justify-start rounded-t-full rounded-b-[10px] py-2 sm:py-6 sm:rounded-lg items-center" isPressable onPress={onOpen}>
                <Image
                    className="object-cover rounded-full h-40 w-40"
                    alt="Card background"
                    src={image}
                    width={250}
                    height={250}
                />
                <h4 className="pt-2 font-semibold text-large text-slate-800 text-pretty">{title}</h4>
                <p className="text-tiny italic text-slate-600 pt-3 text-center">{subtitle}</p>
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
                                <div className="html_tinymce" dangerouslySetInnerHTML={{ __html: content }}></div>
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