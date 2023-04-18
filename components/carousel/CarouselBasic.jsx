import React, { useState } from 'react';
import { Box, IconButton, Image, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { useRouter } from 'next/router';

export default function Carousel(props) {
  const router = useRouter()
  const imageLinks = props.adsImage
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      my={'10px'}
      height={'fit-content'}
      width={'full'}
      position={'relative'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {imageLinks.map((adsImage, index) => (
          <a key={index} target="_blank" href={adsImage.adsUrl} rel="noopener noreferrer">
            <Image
              src={adsImage.imageLink}
              width='100%'
              layout='fill'
            />
          </a>
        ))}
      </Slider>
    </Box >
  );
}