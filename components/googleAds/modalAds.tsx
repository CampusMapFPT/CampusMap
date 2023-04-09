import { Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import AdBanner from "./ads";

const ModalAds = () => {
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={'xs'} isCentered>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader><ModalCloseButton /></ModalHeader>
                    <ModalBody p={'20px'} borderRadius='30px'>
                        <Image src="https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/ads%2FmodalAd.png?alt=media&token=ee0a4f74-d7ba-41c7-aa82-394e0e00f1e0"
                            w={'100%'} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalAds;