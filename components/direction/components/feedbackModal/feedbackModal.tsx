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
import { DateTime } from "luxon";

import { API_FEEDBACK } from "constants/api"
import axios from "axios"
import { useRouter } from "next/router"
const HAPPY_ICON = 3;
const NEUTRAL_ICON = 2;
const SAD_ICON = 1;
const FeedbackModal = () => {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedFeedback, setSelectedFeedback] = useState(0)
    const [feedbackContent, setFeedbackContent] = useState('')
    const [displayForm, setDisplayForm] = useState(false)
    const [sentFeedback, setSentFeedback] = useState(false)

    const DisplayFeedbackForm = async (feedback: any) => {
        if (feedback === SAD_ICON && !displayForm) {
            setTimeout(() => {
                setDisplayForm(true)
            }, 2000);
        }
        else {
            const feedbackResponse = {
                ratings: feedback,
                content:
                    `(${router.asPath})
                    ${feedbackContent}`,
                createDate: DateTime.now().setLocale('vi').toISO()
            }

            if (feedback === SAD_ICON) PostToApi(feedbackResponse)
            else {
                setTimeout(() => {
                    PostToApi(feedbackResponse)
                }, 2000);
            }
        }
    }

    const PostToApi = async (data: any) => {
        await axios.post(
            API_FEEDBACK,
            data,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            }
        ).then((response) => {
            response.headers = {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET, POST, OPTION",
            }

        })
        setSentFeedback(true)
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
                                    display={selectedFeedback !== SAD_ICON ? "block" : "none"}
                                    src={SadIcon.src}
                                    onClick={() => {
                                        setSelectedFeedback(SAD_ICON)
                                        DisplayFeedbackForm(SAD_ICON)
                                    }}
                                    width='30%' height='30%' />
                                <Image
                                    display={selectedFeedback === SAD_ICON ? "block" : "none"}
                                    src={SelectedSadIcon.src}
                                    width='30%' height='30%' />

                                <Image
                                    display={selectedFeedback !== NEUTRAL_ICON ? "block" : "none"}
                                    src={NeutralIcon.src}
                                    onClick={() => {
                                        setSelectedFeedback(NEUTRAL_ICON)
                                        DisplayFeedbackForm(NEUTRAL_ICON)
                                    }}
                                    width='30%' height='30%' />
                                <Image
                                    display={selectedFeedback === NEUTRAL_ICON ? "block" : "none"}
                                    src={SelectedNeutralIcon.src}
                                    width='30%' height='30%' />

                                <Image
                                    display={selectedFeedback !== HAPPY_ICON ? "block" : "none"}
                                    src={HappyIcon.src}
                                    onClick={() => {
                                        setSelectedFeedback(HAPPY_ICON)
                                        DisplayFeedbackForm(HAPPY_ICON)
                                    }}
                                    width='30%' height='30%' />
                                <Image
                                    display={selectedFeedback === HAPPY_ICON ? "block" : "none"}
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
                        {displayForm && !sentFeedback &&
                            < Button
                                h="30px" w="80px"
                                margin="10px auto"
                                borderRadius="72px"
                                background="#04408C" color="#fff"
                                onClick={() => DisplayFeedbackForm(SAD_ICON)}
                                type="submit">
                                Gửi
                            </Button>
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