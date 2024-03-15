import React from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Badge,
  Button,
  Text,
  useColorModeValue,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  UnorderedList,
  ListItem,
  Image,
} from '@chakra-ui/react';

import banner from '../assets/images/banner.png';
import Navbar from '../components/nav';
import Footer from '../components/footer';
import ComingSoon from '../components/events-comingsoon';
import Civilage from '../assets/images/Event_images/civilage.jpeg'
import Techvision from '../assets/images/Event_images/Tech_vision.jpeg'
import Paper from '../assets/images/Event_images/PAPER_PRESENTATION.png'
import GeoCon from '../assets/images/Event_images/GEO_Confluence.png'
function Events() {
  return (
    <Box>
      <Navbar />
      <Flex
        w={'full'}
        h={'40vh'}
        backgroundImage={banner}
        backgroundBlendMode={'overlay'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        back
      ></Flex>

        <Center as="section" w="100%">
          <Stack
            w="50%"
            rounded="md"
            borderWidth={1}
            zIndex={2}
            // boxShadow={'md'}
            borderRadius={20}
            m={30}
            p={6}
            spacing={4}
          >
            <Center spacing={10} mb={25}>
              <Text ml={'0.5rem'} fontSize={'3xl'}>
                RuleBook
              </Text>
            </Center>
            <Text color={'red.600'} align={'center'} fontSize={'2xl'}>
            <a href="https://drive.google.com/file/d/1a6Avgr8XsoYCluZkZbeofe96oOaJh1Dx/view?usp=sharing"> <b> Click here</b></a>
            </Text>
          </Stack>
        </Center>

      <Center>
          {/* <ComingSoon /> */}
      </Center>



      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={{ base: 10, md: 15 }}
        p={50}
      >
        {/* <Event0 /> */}
        <Event1 />
        <Event2 />
        <Event3 />
        <Event4 />
        {/* <Event5 /> */}
        
      </SimpleGrid>

      <Footer />
    </Box>
  );
}









function Event0() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        maxW="sm"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        p={15}
        pb={20}
        position="relative"
      >
        <Badge borderRadius="full" px="5" py="1">
          event{' '}
        </Badge>
        <Text as="h3" my={5} fontWeight="bold" fontSize="2xl" color={'accent'}>
          {' '}
          CAMPUS AMBASSADOR PROGRAM{' '}
        </Text>{' '}
        <Text>
          {' '}
          Welcome to our Campus Ambassador Program, where leadership meets innovation, and tomorrow's pioneers are nurtured today. This program
          is designed to empower students with the skills, resources, and opportunities needed to become influential voices within their campus communities and beyond.{' '}
        </Text>{' '}
        <Center>
          <Button
            mt={25}
            size="md"
            height="40px"
            width="100px"
            border="1px"
            borderColor="#C0C1D1"
            borderRadius={4}
            zIndex={1}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('accent', 'accent'),
              color: 'white',
            }}
            onClick={onOpen}
            style={{ position: 'absolute', bottom: '20px' }}
          >
            View more
          </Button>
        </Center>
        <Modal
          scrollBehavior="inside"
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          motionPreset="slideInBottom"
          size="xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color={'accent'}> BUILD IT </ModalHeader>{' '}
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <a href="https://i.imgur.com/TlULIHZ.png" target="_blank">
                  <Image
                    height="400"
                    src="https://i.imgur.com/TlULIHZl.png"
                    alt="BUILD IT"
                  />
                </a>
              </Center>
              <Text as="h3" my={5} fontWeight="bold" fontSize="xl">
                {' '}
                Event description{' '}
              </Text>{' '}
              <Text as="p" my={5}>
                {' '}
                Designing a building from scratch takes a lot of patience.If you
                are someone who has an eye for perfection, the event "BUILD IT"
                is for you.{' '}
                <br />
              <br />
              Go check out the rule book for more information.
              </Text>
              {/* <
            Text as = 'h3'
            my = { 5 }
            fontWeight = 'bold'
            fontSize = 'xl' > Format < /Text> <
            Text as = 'p'
            my = { 5 } > Round 1: Online quiz consisting of objective questions(comprising of both Structural and Non - structural) < /Text> <
            Text as = 'p'
            my = { 5 } > Round 2: six teams who have secured the highest marks in Level 1 will qualify
            for Level 2 and they will acquire a chance to exhibit their proficiency in the field of civil engineering through six rounds of online quizzing.After 6 rounds of strenuous quizzing, teams retaining the top three positions will be awarded. < /Text>
         */}
              {/* <
            Text as = 'h3'
            my = { 5 }
            fontWeight = 'bold'
            fontSize = 'xl' > Platform < /Text> <
            Text as = 'p'
            my = { 5 } > Round 1– HackerEarth < /Text> <
            Text as = 'p'
            my = { 5 } > Round 2– MS Teams < /Text> */}
              {/* <
            Text as = 'h3'
            my = { 5 }
            fontWeight = 'bold'
            fontSize = 'xl' > Rules < /Text> <
            UnorderedList >
                <
                ListItem >
                Each team can have maximum of 2 members. <
                /ListItem>

            <
            ListItem >
                Calculators will be allowed
            for first round only
                <
                /ListItem>

            <
            /UnorderedList>

            <
            Text as = 'h3'
            my = { 5 }
            fontWeight = 'bold'
            fontSize = 'xl' > Judging criteria < /Text> <
            UnorderedList >
                <
                ListItem >
                The teams with maximum score will be qualified
            for the 2 nd round.(6 teams). <
                /ListItem>

            <
            ListItem >
                In
            case of tie the first - round scores will also be taken into account. <
            /ListItem>

            <
            /UnorderedList> */}
            </ModalBody>
            {/* <ModalFooter> */}{' '}
            <Center>
              <Button
                colorScheme="blue"
                m={3}
                onClick={() => {
                  window.location.assign('https://forms.gle/62BBDXtCck7RFppQ9');
                }}
              >
                Register Now{' '}
              </Button>{' '}
            </Center>
            {/* </ModalFooter> */}{' '}
          </ModalContent>{' '}
        </Modal>
      </Box>
    </>
  );
}
























function Event1() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        maxW="sm"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        p={15}
        pb={20}
        position="relative"
      >
        <Badge borderRadius="full" px="5" py="1">
          event{' '}
        </Badge>
        <Text as="h3" my={5} fontWeight="bold" fontSize="2xl" color={'accent'}>
          {' '}
          CIVILAGE{' '}
        </Text>{' '}
        <Text style={{ textAlign: 'justify' }}> 
          {/* {' '} */}
          
          Get Ready for a thrilling showcase of structural prowess!<br></br> Civilage brings the ultimate test for budding engineeers: Electrifying quiz, then sketch your dreamsin <strong>AutoCAD</strong>.
          {/* {' '} */}
        </Text>
        {/* {' '} */}
        <Center>
          <Button
            mt={25}
            size="md"
            height="40px"
            width="130px"
            border="1px"
            borderColor="#C0C1D1"
            borderRadius={4}
            zIndex={1}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('accent', 'accent'),
              color: 'white',
            }}
            color={'black'}
            onClick={onOpen}
            style={{ position: 'absolute', bottom: '20px' }}
          >
            View more
          </Button>
        </Center>
        <Modal
          scrollBehavior="inside"
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          motionPreset="slideInBottom"
          size="xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color={'accent'}> CIVILAGE </ModalHeader>{' '}
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <a href="https://i.imgur.com/TlULIHZ.png" target="_blank">
                  <Image
                    height="400"
                    src={Civilage}
                    alt="Civilage"
                  />
                </a>
              </Center>
              <Text as="h3" my={5} fontWeight="bold" fontSize="xl">
                {' '}
                Event description{' '}
              </Text>{' '}
              <Text as="p" my={5}>
                {' '}
                Unleash Your Engineering Genius at Civilage!
                {' '}
                <br />
              <br />
              Go check out the rule book for more information.
              </Text>
              {/* <
            Text as = 'h3'
            my = { 5 }
            fontWeight = 'bold'
            fontSize = 'xl' > Format < /Text> <
            Text as = 'p'
            my = { 5 } > Round 1: Online quiz consisting of objective questions(comprising of both Structural and Non - structural) < /Text> <
            Text as = 'p'
            my = { 5 } > Round 2: six teams who have secured the highest marks in Level 1 will qualify
            for Level 2 and they will acquire a chance to exhibit their proficiency in the field of civil engineering through six rounds of online quizzing.After 6 rounds of strenuous quizzing, teams retaining the top three positions will be awarded. < /Text>
         */}
              {/* <
            Text as = 'h3'
            my = { 5 }
            fontWeight = 'bold'
            fontSize = 'xl' > Platform < /Text> <
            Text as = 'p'
            my = { 5 } > Round 1– HackerEarth < /Text> <
            Text as = 'p'
            my = { 5 } > Round 2– MS Teams < /Text> */}
              {/* <
            Text as = 'h3'
            my = { 5 }
            fontWeight = 'bold'
            fontSize = 'xl' > Rules < /Text> <
            UnorderedList >
                <
                ListItem >
                Each team can have maximum of 2 members. <
                /ListItem>

            <
            ListItem >
                Calculators will be allowed
            for first round only
                <
                /ListItem>

            <
            /UnorderedList>

            <
            Text as = 'h3'
            my = { 5 }
            fontWeight = 'bold'
            fontSize = 'xl' > Judging criteria < /Text> <
            UnorderedList >
                <
                ListItem >
                The teams with maximum score will be qualified
            for the 2 nd round.(6 teams). <
                /ListItem>

            <
            ListItem >
                In
            case of tie the first - round scores will also be taken into account. <
            /ListItem>

            <
            /UnorderedList> */}
            </ModalBody>
            {/* <ModalFooter> */}{' '}
            <Center>
              <Button
                colorScheme="blue"
                m={3}
                onClick={() => {
                  window.location.assign('https://unstop.com/p/civilage-moments-national-institute-of-technology-tiruchirappalli-918509');
                }}
              >
                Register Now{' '}
              </Button>{' '}
            </Center>
            {/* </ModalFooter> */}{' '}
          </ModalContent>{' '}
        </Modal>
      </Box>
    </>
  );
}

function Event2() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      p={15}
      pb={20}
      position="relative"
    >
      <Badge borderRadius="full" px="5" py="1">
        event{' '}
      </Badge>
      <Text as="h3" my={5} fontWeight="bold" fontSize="2xl" color={'accent'}>
        {' '}
        TECH VISION{' '}
      </Text>{' '}
      <Text style={{ textAlign: 'justify' }}>
        {' '}
        
        Grab your teammate and dive into the iconic structures quiz!
        <br></br>
        Decode mind-bending structures to unveil trhe global landmarks.
        <br></br>
        On-spot buzzer action with questions on worldwide wonders-claim victory with quick thinking and stategic buzzing.{' '}
      </Text>{' '}
      <Center>
        <Button
          mt={25}
          size="md"
          height="40px"
          width="130px"
          border="1px"
          borderColor="#C0C1D1"
          borderRadius={4}
          zIndex={1}
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('accent', 'accent'),
            color: 'white',
          }}
          onClick={onOpen}
          color={'black'}
          style={{ position: 'absolute', bottom: '20px' }}
        >
          View more
        </Button>
      </Center>
      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={'accent'}> TECH VISION </ModalHeader>{' '}
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <a href={Techvision} target="_blank">
                <Image
                  height="400"
                  src={Techvision}
                  alt="TECH VISION"
                />
              </a>
            </Center>
            <Text as="h3" my={5} fontWeight="bold" fontSize="xl">
              {' '}
              Event description{' '}
            </Text>{' '}
            <Text as="p" my={5}>
              {' '}
              Decode.Buzz.Triumph!
              {' '}
            </Text>
            <Text as="p" my={5}>
            {' '}
      
              Go check out the rule book for more information.
            </Text>
            {/* 
            <
            Text as = 'h3'
            my = { 5 }
            fontWeight = 'bold'
            fontSize = 'xl' > Format < /Text> <
            Text as = 'p'
            my = { 5 } > An economical plan has to be designed in AutoCAD in the specific area given.Problem statement contains few conditions to follow in the planning. < /Text> <
            Text as = 'p'
            my = { 5 } > In the given time you have to complete the given Problem. < /Text> <
            Text as = 'p'
            my = { 5 } > Online quiz consisting of objective questions(Questions on AUTOCAD software). < /Text> <
            Text as = 'p'
            my = { 5 } > Round 2: Eight teams who have secured the highest marks in Level 1 will qualify
            for Level 2. < /Text> */}
            {/* 
            <
            Text as = 'h3'
            my = { 5 }
            fontWeight = 'bold'
            fontSize = 'xl' > Platform < /Text> <
            Text as = 'p'
            my = { 5 } > Round 1– HackerEarth < /Text> <
            Text as = 'p'
            my = { 5 } > Round 2– MS Teams < /Text> */}
            {/* <
            Text as = 'h3'
            my = { 5 }
            fontWeight = 'bold'
            fontSize = 'xl' > Rules < /Text> <
            UnorderedList >
                <
                ListItem >
                Maximum participants in a team: 2 <
                /ListItem>

            <
            ListItem >
                Plagiarism is not allowed. <
                /ListItem>


            <
            ListItem >
                Autocad software is necessary. <
                /ListItem>

            <
            /UnorderedList>

            <
            Text as = 'h3'
            my = { 5 }
            fontWeight = 'bold'
            fontSize = 'xl' > Judging criteria < /Text> <
            UnorderedList >
                <
                ListItem >
                Economical and efficient design is considered <
                /ListItem>

            <
            ListItem >
                Team with early submission is given preference <
                /ListItem>

            <
            ListItem >
                Judges word is final <
                /ListItem>

            <
            /UnorderedList>
         */}
          </ModalBody>
          {/* <ModalFooter> */}{' '}
          <Center>
            <Button
              colorScheme="blue"
              m={3}
              onClick={() => {
                window.location.assign('https://unstop.com/p/tech-vision-moments-national-institute-of-technology-tiruchirappalli-918730');
              }}
            >
              Register Now{' '}
            </Button>{' '}
          </Center>
          {/* </ModalFooter> */}{' '}
        </ModalContent>{' '}
      </Modal>
    </Box>
  );
}

function Event3() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      p={15}
      pb={20}
      position="relative"
    >
      <Badge borderRadius="full" px="5" py="1">
        event{' '}
      </Badge>
      <Text as="h3" my={5} fontWeight="bold" fontSize="2xl" color={'accent'}>
        {' '}
        PAPER PRESENTATION{' '}
      </Text>{' '}
      <Text style={{ textAlign: 'justify' }}>
        {' '}
        The MOMENT'S challenges you to be a problem-solving ninja!

        <br></br>
        Think you got the brains?
        <br></br>
        <strong>Round 1</strong>: Abstract submission (300 words max)
        <br></br>
        <strong>Round 2</strong>: Presentations & Q&A with judges{' '}
      </Text>{' '}
      <Center>
        <Button
          mt={25}
          size="md"
          height="40px"
          width="130px"
          border="1px"
          borderColor="#C0C1D1"
          borderRadius={4}
          zIndex={1}
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('accent', 'accent'),
            color: 'white',
          }}
          onClick={onOpen}
          color={'black'}
          style={{ position: 'absolute', bottom: '20px' }}
        >
          View more
        </Button>
      </Center>
      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={'accent'}> Paper Presentation </ModalHeader>{' '}
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <a href={Paper} target="_blank">
                <Image
                  height="400"
                  src={Paper}
                  alt="Paper Presentation"
                />
              </a>{' '}
            </Center>
            <Text as="h3" my={5} fontWeight="bold" fontSize="xl">
              {' '}
              Event description{' '}
            </Text>{' '}
            <Text as="p" my={5}>
              {' '}
              Ignite your mind and solve real world problems!
              {' '}
              <br />
              <br />
              Go check out the rule book for more information.
            </Text>{' '}
            {/* <
            Text as = 'p'
            my = { 5 } > Maximum participants in a team: 2 < /Text>


            <
            UnorderedList >
                <
                ListItem >
                Team with early submission is given preference. <
                /ListItem>

            <
            ListItem >
                Judges word is final. <
                /ListItem>

            <
            /UnorderedList> */}
          </ModalBody>
          {/* <ModalFooter> */}{' '}
          <Center>
            <Button
              colorScheme="blue"
              m={3}
              onClick={() => {
                window.location.assign('https://unstop.com/p/paper-presentation-moments-national-institute-of-technology-tiruchirappalli-918788');
              }}
            >
              Register Now{' '}
            </Button>{' '}
          </Center>
          {/* </ModalFooter> */}{' '}
        </ModalContent>{' '}
      </Modal>
    </Box>
  );
}

function Event4() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      p={15}
      pb={20}
      position="relative"
    >
      <Badge borderRadius="full" px="5" py="1">
        event{' '}
      </Badge>
      <Text as="h3" my={5} fontWeight="bold" color={'accent'} fontSize="2xl">
        {' '}
        GEO CONFLUENCE{' '}
      </Text>{' '}
      <Text style={{ textAlign: 'justify' }}>
        {' '}
        Address geotechnical challenge. Highlight risks in foundation design, groundwater management, and soil-stucture interaction.
        <br></br>
        Propose innovative engineering solutions for sustainable urban growth. 
        {' '}
      </Text>{' '}
      <Center>
        <Button
          mt={25}
          size="md"
          height="40px"
          width="130px"
          border="1px"
          borderColor="#C0C1D1"
          borderRadius={4}
          zIndex={1}
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('accent', 'accent'),
            color: 'white',
          }}
          onClick={onOpen}
          color={'black'}
          style={{ position: 'absolute', bottom: '20px' }}
        >
          View more
        </Button>
      </Center>
      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={'accent'}> GEO CONFLUENCE </ModalHeader>{' '}
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <a href={GeoCon} target="_blank">
                <Image
                  height="400"
                  src={GeoCon}
                  alt="Geo Confluence"
                />
              </a>{' '}
            </Center>
            <Text as="h3" my={5} fontWeight="bold" fontSize="xl">
              {' '}
              Event description{' '}
            </Text>{' '}
            <Text as="p" my={5}>
              {' '}
              Bridging Geo Challenges!{' '}
              <br />
              <br />
              Go check out the rule book for more information.
            </Text>
            {/* <
            Text as = 'p'
            my = { 5 } > Team: Maximum of 3 students < /Text> <
            Text as = 'p'
            my = { 5 } > Platform: MS Teams < /Text>

            <
            Text as = 'h3'
            my = { 5 }
            fontWeight = 'bold'
            fontSize = 'xl' > Judging criteria < /Text> <
            UnorderedList >
                <
                ListItem >
                Presentation will be judged based on the Presentation skills, quality of the content. <
                /ListItem>

            <
            ListItem >
                Judges word is final. <
                /ListItem>

            <
            /UnorderedList> */}
          </ModalBody>
          {/* <ModalFooter> */}{' '}
          <Center>
            <Button
              colorScheme="blue"
              m={3}
              onClick={() => {
                window.location.assign('https://unstop.com/p/geo-confluence-moments-national-institute-of-technology-tiruchirappalli-918886');
              }}
            >
              Register Now{' '}
            </Button>{' '}
          </Center>
          {/* </ModalFooter> */}{' '}
        </ModalContent>{' '}
      </Modal>
    </Box>
  );
}

function Event5() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      p={15}
      pb={20}
      position="relative"
    >
      <Badge borderRadius="full" px="5" py="1">
        event{' '}
      </Badge>
      <Text as="h3" my={5} fontWeight="bold" fontSize="2xl" color={'accent'}>
        {' '}
        PRO MEMER{' '}
      </Text>{' '}
      <Text>
        {' '}
        Are you the one cracking jokes with your friends all around ? Is your
        library full of memes for every occasion ? We’ ve got you covered! Get
        your creative gear started and season it with the most exciting
        competition of MOMENTS’ 23, “PRO MEMER” where you can manifest your
        sense of humour. Buckle up, it’ s meme time. Top 3 contestants will be
        rewarded with free tickets to any one of the workshops.{' '}
      </Text>{' '}
      <Center>
        <Button
          mt={25}
          size="md"
          height="40px"
          width="100px"
          border="1px"
          borderColor="#C0C1D1"
          borderRadius={4}
          zIndex={1}
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('accent', 'accent'),
            color: 'white',
          }}
          onClick={onOpen}
          style={{ position: 'absolute', bottom: '20px' }}
        >
          View more
        </Button>
      </Center>
      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={'accent'}> PRO MEMER </ModalHeader>{' '}
          <ModalCloseButton />
          <ModalBody>
            <Center>
              {' '}
              <a href="https://i.imgur.com/iq07aPh.png" target="_blank">
                {' '}
                <Image
                  height="400"
                  src="https://i.imgur.com/iq07aPhh.png"
                  alt="PROMEMER"
                />{' '}
              </a>{' '}
            </Center>
            <Text as="h3" my={5} fontWeight="bold" fontSize="xl">
              {' '}
              Event description{' '}
            </Text>{' '}
            <Text as="p" my={5}>
              {' '}
              Are you the one cracking jokes with your friends all around ? Is
              your library full of memes for every occasion ? We’ ve got you
              covered!{' '}
            </Text>{' '}
            <Text as="p" my={5}>
              Get your creative gear started and season it with the most
              exciting competition of MOMENTS’ 23, “PRO MEMER” where you can
              manifest your sense of humour. Buckle up, it’ s meme time.{' '}
            </Text>{' '}
            <Text as="p" my={5}>
              Top 3 contestants will be rewarded with free tickets to any one of
              the workshops.{' '}
              <br />
              <br />
              Go check out the rule book for more information.
            </Text>
            {/* <
            Text as = 'h3'
            my = { 5 }
            fontWeight = 'bold'
            fontSize = 'xl' > Individual Participation < /Text>
         */}
          </ModalBody>
          {/* <ModalFooter> */}{' '}
          <Center>
            <Button
              colorScheme="blue"
              m={3}
              onClick={() => {
                window.location.assign('https://forms.gle/rBGR1D862ipqu4UZ8');
              }}
            >
              Register Now{' '}
            </Button>{' '}
          </Center>
          {/* </ModalFooter> */}{' '}
        </ModalContent>{' '}
      </Modal>
    </Box>
  );
}

export default Events;
