import { Flex } from "@chakra-ui/react"
import { useRouter } from "next/router"

const suggestedLocation = [
    {
        name: 'Passio',
        url: `/direction/?toId=1&toLocation=Passio`
    },
    {
        name: 'Sảnh trống đồng',
        url: `/direction/?toId=15&toLocation=Sảnh+trống+đồng`
    },
    {
        name: '7-Eleven',
        url: `/direction/?toId=23&toLocation=7-Eleven`
    },
    {
        name: 'Phòng Công tác Sinh viên',
        url: `/direction/?toId=64&toLocation=Phòng+Công+tác+Sinh+viên`
    },
    {
        name: 'Laha Café',
        url: `/direction/?toId=91&toLocation=Laha+Cafe`
    },
]
const SuggestedPlace = () => {
    const router = useRouter()
    return (
        <Flex
            flexDir={'row'}
            className='floorScrollbar'
            overflowX='auto'
            width='100%'
            flex='0 0 auto'
            pt={'10px'}

            justifyContent={'start'}>

            <Flex
                padding={'5px'} mx='2px' mb='10px'
                height='20px' fontSize='13px' color={"#000"}
                alignItems='center' flex='0 0 auto'
            >Điểm đến đề xuất:</Flex>
            {suggestedLocation.map((location, index) => {
                return (
                    <Flex
                        key={index}
                        padding={'5px'} mx='2px' mb='10px'
                        height='20px' fontSize='13px'
                        justifyContent='center' alignItems='center'
                        borderRadius="15px" background={"#3A88EC"}
                        color={"#fff"}
                        onClick={() => router.push(location.url)}
                        flex='0 0 auto'
                    >{location.name}</Flex>
                )
            })}
        </Flex>
    )
}

export default SuggestedPlace