'use client'
import { IPost } from "@/constants/interfaces-local";
import { Card, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip } from "@nextui-org/react";
import { useState } from "react";

export default function Service({ post }: { post: IPost }) {
    const { subtitle, content, id, title, image } = post
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isHover, setHover] = useState(false)
    return (
        <>
            <Card
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="bg-primario/20 hover:bg-primario/30 hover:scale-105 flex flex-col justify-start rounded-t-full rounded-b-[10px] py-2 sm:py-6 sm:rounded-lg items-center" isPressable onPress={onOpen}>
                <Image
                    className="object-cover rounded-full h-32 w-32"
                    alt="Card background"
                    src={image}
                    width={150}
                    height={150}
                />
                <Tooltip
                    isOpen={isHover}
                    showArrow={true}
                    placement="bottom"
                    content={subtitle}
                    color="secondary"
                >
                    <h4 className="pt-2 font-extrabold text-large text-primario text-pretty">{title}</h4>
                </Tooltip>
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