import React from 'react';
import {
  Box,
  Flex,
  AspectRatio,
  Center
} from '@chakra-ui/react';
import banner from '../assets/images/banner.png'
import Navbar from '../components/nav';
import About from '../components/about';
import Members from '../components/members';
import Footer from '../components/footer';
import vid from '../assets/videos/back_vid.mp4';
// const theme= extendTheme({body:'monospace'},)
// import Fonts from '../fonts/fonts';

function Home() {
  return (
    <Box>

      <Navbar />
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        overflow="hidden"
        zIndex="-1">
        <video
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src={vid} type="video/mp4" />
        </video>
      </Box>
      <Flex
        w={'full'}
        h={{ base: '450px', md: '100vh', lg: '100vh' }}

      // backgroundColor={'rgba(10, 12, 32, 0.22)'}
      /*backgroundImage={banner}
      backgroundBlendMode={'overlay'}
      backgroundSize={'cover'}
      backgroundPosition={'center'}*/
      >

        <Center width={'full'}>
          <Box
            as="iframe"
            title="naruto"
            src="https://www.youtube.com/embed/5jV-naf_vyE"
            allowFullScreen
            width="600px"
            height="320px"
            borderRadius={20}
            boxShadow='md'
            mx={5}
          />

        </Center>
      </Flex>
      <About />
      <Members />
      <Footer />
    </Box>

  );
}

export default Home;
