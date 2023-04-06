import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import AdBanner from "./ads";

const ModalAds = () => {
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AdBanner
                            data-ad-slot="2389891781"
                            data-ad-format="auto"
                            data-full-width-responsive="true" />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalAds;