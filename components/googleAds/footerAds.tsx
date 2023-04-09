import { Flex, Image } from "@chakra-ui/react"
import footerAdImage from '../../public/assets/images/ads/footerAd.jpg'

const FooterAds = () => {
    return (
        <Flex className="ads" >
            <Image src={'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/ads%2FfooterAd.jpg?alt=media&token=87b95650-d62a-45eb-93f7-b07b32124196'}
                alt={"ads img"}
                width='100%'></Image>
        </Flex>
    )
}

export default FooterAds