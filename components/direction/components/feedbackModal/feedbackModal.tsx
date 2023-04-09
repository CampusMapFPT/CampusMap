import {
    Box, Button, Flex, FormControl, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure
} from "@chakra-ui/react"

import { useState } from "react"
import HappyIcon from "../../../../public/assets/images/feedbackIcon/happy-01.png"
import SelectedHappyIcon from "../../../../public/assets/images/feedbackIcon/happy-color-01.png"
import NeutralIcon from "../../../../public/assets/images/feedbackIcon/neutral-01.png"
import SelectedNeutralIcon from "../../../../public/assets/images/feedbackIcon/neutral-color-01.png"
import SadIcon from "../../../../public/assets/images/feedbackIcon/sad-01.png"
import SelectedSadIcon from "../../../../public/assets/images/feedbackIcon/sad-color-01.png"
import { useForm } from "react-hook-form";

import { API_FEEDBACK } from "constants/api"
import axios from "axios"
import { useRouter } from "next/router"
const FeedbackModal = () => {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedFeedback, setSelectedFeedback] = useState(0)
    const [feedbackContent, setFeedbackContent] = useState('')
    const [displayForm, setDisplayForm] = useState(false)
    const [sentFeedback, setSentFeedback] = useState(false)
    console.log(`${router.asPath}-${router.pathname}`);

    const DisplayFeedbackForm = async () => {
        if (selectedFeedback === 1 && !displayForm) setDisplayForm(true)
        else {
            if (sentFeedback) return

            const feedbackResponse = {
                ratings: selectedFeedback,
                content: feedbackContent,
                createDate: new Date()
            }

            // const headers = {
            //     
            // };
            await axios.post(
                API_FEEDBACK,
                feedbackResponse,
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    }
                }
            )
                .then((response) => {
                    response.headers = {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "Content-Type",
                        "Access-Control-Allow-Methods": "GET, POST, OPTION",
                    }

                })
            setSentFeedback(true)
        }
    }

    const CloseForm = (e: any) => {
        setSelectedFeedback(0)
        setFeedbackContent('')
        setDisplayForm(false)
        onClose()
    }

    return (
        <>
            <Button
                w="175px"
                h="45px"
                display="block"
                margin="10px auto"
                borderRadius="72px"
                background="#04408C"
                color="#fff"
                onClick={onOpen}
            >
                Xong
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size={'xs'} isCentered>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader textAlign={'center'} whiteSpace='pre-line'>
                        {!displayForm && !sentFeedback && "Đánh giá của bạn về tính năng này"}
                        {displayForm && !sentFeedback && "Điều gì khiến bạn\n chưa hài lòng?"}
                        {sentFeedback && "Cảm ơn phản hồi của bạn"}
                    </ModalHeader>


                    {!sentFeedback &&
                        <ModalBody>
                            <Box flexDirection={'row'} justifyContent='space-around' w={'100%'}
                                display={displayForm ? 'none' : 'flex'} >
                                <Image
                                    display={selectedFeedback !== 1 ? "block" : "none"}
                                    src={SadIcon.src}
                                    onClick={() => setSelectedFeedback(1)}
                                    width='30%' height='30%' />
                                <Image
                                    display={selectedFeedback === 1 ? "block" : "none"}
                                    src={SelectedSadIcon.src}
                                    width='30%' height='30%' />

                                <Image
                                    display={selectedFeedback !== 2 ? "block" : "none"}
                                    src={NeutralIcon.src}
                                    onClick={() => setSelectedFeedback(2)}
                                    width='30%' height='30%' />
                                <Image
                                    display={selectedFeedback === 2 ? "block" : "none"}
                                    src={SelectedNeutralIcon.src}
                                    width='30%' height='30%' />

                                <Image
                                    display={selectedFeedback !== 3 ? "block" : "none"}
                                    src={HappyIcon.src}
                                    onClick={() => setSelectedFeedback(3)}
                                    width='30%' height='30%' />
                                <Image
                                    display={selectedFeedback === 3 ? "block" : "none"}
                                    src={SelectedHappyIcon.src}
                                    width='30%' height='30%' />
                            </Box>
                            <FormControl as='fieldset' id="feedback-form"
                                display={displayForm ? 'flex' : 'none'}
                                flexDirection={'column'}>
                                < Textarea h='100px' w='100%' value={feedbackContent} resize={'none'} onChange={e => setFeedbackContent(e.target.value)} />
                            </FormControl>
                        </ModalBody>
                    }

                    <ModalFooter className="modal-footer">

                        {!sentFeedback &&
                            <>
                                <Text textDecor={'underline'} onClick={CloseForm}>Bỏ qua</Text>
                                <Button
                                    h="30px" w="80px"
                                    margin="10px auto"
                                    borderRadius="72px"
                                    background="#04408C" color="#fff"
                                    onClick={DisplayFeedbackForm}
                                    type="submit">
                                    Gửi
                                </Button>
                                <Box w={'3rem'}></Box>
                            </>
                        }
                        {sentFeedback &&
                            <Button
                                h="30px" w="80px"
                                margin="0 auto"
                                borderRadius="72px"
                                background="#04408C" color="#fff"
                                onClick={() => router.push('/')}
                                type="submit">
                                Xong
                            </Button>
                        }

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default FeedbackModal