import { IPost } from "@/constants/interfaces-local"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"

export const ClientModal = ({isOpen, onOpenChange, post}: {isOpen: boolean, onOpenChange: () => void, post: IPost}) => {
    return (
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
                                {post.title}
                            </ModalHeader>
                            <ModalBody>
                                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
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
    )
}