'use client'
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, ListboxItem, Listbox, ModalFooter } from "@nextui-org/react";
import { ComponentType } from "@react-spring/web";
import { GiCheckMark } from "react-icons/gi";

type IconType = ComponentType<{ className?: string }>;

export default function ModalButton({buttonText, Icono, children, lista}: {buttonText: string, Icono: IconType, children: React.ReactNode, lista: string[]}) {
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

  return (
    <>
      <Button
      onPress={onOpen}
      className="text-xs mt-3 mx-1 h-fit py-1 text-violet-950 dark:text-white bg-fuchsia-300 dark:bg-fuchsia-950 hover:bg-opacity-90 transition-all">
              <Icono className="text-lg text-violet-900 dark:text-violet-200" />
              {buttonText}
            </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size="2xl">
        <ModalContent className="dark:bg-violet-950">
              <ModalHeader>{buttonText}</ModalHeader>
              <ModalBody>
                  <Listbox variant="faded">
                {lista.map((item) => (
                    <ListboxItem
                      className="cursor-default"
                      key="Familia"
                      startContent={<GiCheckMark className='text-violet-700 dark:text-violet-300' />}
                    >
                      {item}
                    </ListboxItem>
                ))}
                </Listbox>
                {children}
              </ModalBody>
              <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
