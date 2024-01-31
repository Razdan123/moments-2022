import React from 'react';
import {
    Box,
    Flex,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import './campusamb.css';
import banner from '../assets/images/banner.png'
import Navbar from '../components/nav';
import Footer from '../components/footer';
// const theme= extendTheme({body:'monospace'},)
// import Fonts from '../fonts/fonts';

function CAmb() {
    const bg = useColorModeValue('white', '#202236');
    return (
        <Box>

            <Navbar />
            <Flex
                w={'full'}
                h={'40vh'}

                // backgroundColor={'rgba(10, 12, 32, 0.22)'}
                backgroundImage={banner}
                backgroundBlendMode={'overlay'}
                backgroundSize={'cover'}
                backgroundPosition={'center'}
                back
            >
                <Center width={'full'}>
                    {/* <Box
    as="iframe"
    title="naruto"
    src="https://www.youtube.com/embed/5jV-naf_vyE"
    allowFullScreen
    width="600px"
    height="320px"
    borderRadius={20}
    boxShadow='md'
    mx={5}
  /> */}

                </Center>


            </Flex>

            <Center as="section" w="100%">
                <Stack
                    w="100%"
                    rounded="md"
                    borderWidth={1}
                    bg={bg}
                    zIndex={2}
                    boxShadow={'md'}
                    borderRadius={20}
                    m={30}
                    p={6}
                    spacing={4}
                >
                    <Center spacing={10} mb={25}>
                        <Text fontSize={'4xl'} color={'accent'}>
                            ABOUT{' '}
                        </Text>{' '}
                        <Text ml={'0.5rem'} fontSize={'4xl'}>
                            MOMENTS
                        </Text>
                    </Center>
                    <Text color={'gray.600'}>
                        Moments is the national level technical symposium of the
                        department of civil engineering, NIT Trichy. Since its inception
                        in 1992, MOMENTS, NIT Trichy has been running with a single aim:
                        To acknowledge and show the significance of Civil Engineering in
                        this transforming world and motivate students in core research.
                        From insightful guest lectures to inventive and challenging events
                        and workshops, this event promotes learning for brilliant minds
                        all over the country.{' '}
                    </Text>
                </Stack>
            </Center>




            <Center as="section" w="100%">
                <Stack
                    w="100%"
                    rounded="md"
                    borderWidth={1}
                    bg={bg}
                    zIndex={2}
                    boxShadow={'md'}
                    borderRadius={20}
                    m={30}
                    p={6}
                    spacing={4}
                >
                    <Center spacing={10} mb={25}>
                        <Text fontSize={'4xl'} color={'accent'}>
                            What is the {' '}
                        </Text>{' '}
                        <Text ml={'0.5rem'} fontSize={'4xl'}>
                            MOMENTS Campus Ambassador Programme?
                        </Text>
                    </Center>
                    <Text color={'gray.600'}>
                        The MOMENTS Campus Ambassador Programme is a strategic initiative aimed at engaging enthusiastic and driven students from various educational institutions to join and collaborate with us. As ambassadors, you serve as the face of MOMENTS, promoting its values and initiatives within your respective campus communities.
                        <br />
                        Here, every challenge conquered and reward earned propels you closer to mastering your interpersonal soft skills and ascending the leaderboard! But hold onto your hats because there's more excitement in store! This isn't just a passive journey; it's an interactive adventure where you shape your own success story.
                        So, gear up, get ready to engage, and let's embark on this dynamic voyage of growth and achievement together!{' '}
                    </Text>
                </Stack>
            </Center>


            <Center as="section" w="100%">
                <Stack
                    w="100%"
                    rounded="md"
                    borderWidth={1}
                    bg={bg}
                    zIndex={2}
                    boxShadow={'md'}
                    borderRadius={20}
                    m={30}
                    p={6}
                    spacing={4}
                >
                    <Center spacing={10} mb={25}>
                        <Text fontSize={'3xl'} color={'accent'}>
                            Why should you be the {' '}
                        </Text>{' '}
                        <Text ml={'0.5rem'} fontSize={'3xl'}>
                            Campus Ambassador for MOMENTS?
                        </Text>
                    </Center>
                    <Text color={'gray.600'}>
                        <ul>
                            <li>Boost your leadership, communication, and marketing abilities.</li>
                            <li>Join forces with thousands of students nationwide as part of an extensive network, collaborating and learning to achieve shared goals.</li>
                            <li>Seize the chance to network and foster public relations on a national scale, connecting with professionals and peers alike.</li>
                        </ul>{' '}
                    </Text>
                </Stack>
            </Center>

            <Center as="section" w="100%">
                <Stack
                    w="100%"
                    rounded="md"
                    borderWidth={1}
                    bg={bg}
                    zIndex={2}
                    boxShadow={'md'}
                    borderRadius={20}
                    m={30}
                    p={6}
                    spacing={4}
                >
                    <Center spacing={10} mb={25}>
                        <Text fontSize={'3xl'} color={'accent'}>
                            What are the responsibilities of the{' '}
                        </Text>{' '}
                        <Text ml={'0.5rem'} fontSize={'3xl'}>
                            MOMENTS Campus Ambassador?
                        </Text>
                    </Center>
                    <Text color={'gray.600'}>
                        The responsibilities of MCA include but are not limited to:
                        <ul>
                            <li>Serve as a bridge between your campus and MOMENTS. </li>
                            <li>Scout potential participants on your campus to join the MOMENTS.</li>
                            <li>Spread the word about MOMENTS events, guest lectures and workshops across your campus.</li>
                            <li>Displaying posters sent by MOMENTS on your college noticeboard. Post It Proudly!</li>
                            <li>Coordinate with MOMENTS organizers beforehand to ensure everything's set for a seamless experience at NIT Trichy.</li>
                        </ul>{' '}
                    </Text>
                </Stack>
            </Center>

            <Center as="section" w="100%">
                <Stack
                    w="100%"
                    rounded="md"
                    borderWidth={1}
                    bg={bg}
                    zIndex={2}
                    boxShadow={'md'}
                    borderRadius={20}
                    m={30}
                    p={6}
                    spacing={4}
                >
                    <Center spacing={10} mb={25}>
                        <Text fontSize={'3xl'} color={'accent'}>
                            Incentives{' '}
                        </Text>{' '}
                        <Text ml={'0.5rem'} fontSize={'3xl'}>

                        </Text>
                    </Center>
                    <Text color={'gray.600'}>
                        Let's explore what awaits you:
                        <ul>
                            <li>Certificate of Recognition to all campus ambassadors</li>
                            <li>Letter of appreciation to the top performers based on scores earned.</li>
                            <li>Goodies based on the score of the ambassadors</li>
                            <li>Recognition in the Symposium Newsletter/Website </li>
                            <li>Discount for Workshops/event*</li>
                            <li>Concession in Accommodation*</li>
                            <li>Summer Internship opportunity to the top performer*</li>
                        </ul>{' '}
                    </Text>
                </Stack>
            </Center>


            <Center as="section" w="100%">
                <Stack
                    w="100%"
                    rounded="md"
                    borderWidth={1}
                    bg={bg}
                    zIndex={2}
                    boxShadow={'md'}
                    borderRadius={20}
                    m={30}
                    p={6}
                    spacing={4}
                >
                    <Center spacing={10} mb={25}>
                        <Text fontSize={'4xl'} color={'accent'}>
                            POINTS DISTRIBUTION{' '}
                        </Text>{' '}
                        <Text ml={'0.5rem'} fontSize={'4xl'}>

                        </Text>
                    </Center>
                    <Text color={'gray.600'}>
                        
                        Below is the table outlining the corresponding points for each task, helping you track your progress as you embark on your journey as a Campus Ambassador!
                        <table>
                            <tr>
                                <th>Task</th>
                                <th>Points</th>
                            </tr>
                            <tr>
                                <td>Event Registration</td>
                                <td>20 points per registration</td>
                            </tr>
                            <tr>
                                <td>Workshop Registration</td>
                                <td>25 points per registration</td>
                            </tr>
                            <tr>
                                <td>Early bird workshop registration </td>
                                <td>+10 points per registration (additional points)</td>
                            </tr>
                            <tr>
                                <td>Early bird event registration</td>
                                <td>+05 points per registration (additional points)</td>
                            </tr>
                        </table>


                        {' '}
                    </Text>
                </Stack>
            </Center>


            <Center as="section" w="100%">
                <Stack
                    w="100%"
                    rounded="md"
                    borderWidth={1}
                    bg={bg}
                    zIndex={2}
                    boxShadow={'md'}
                    borderRadius={20}
                    m={30}
                    p={6}
                    spacing={4}
                >
                    <Center spacing={10} mb={25}>
                        <Text fontSize={'4xl'} color={'accent'}>
                        TIERS{' '}
                        </Text>{' '}
                        <Text ml={'0.5rem'} fontSize={'4xl'}>

                        </Text>
                    </Center>
                    <Text color={'gray.600'}>
                        
                    Hey, top performing Campus Ambassadors, get ready for a sneak peek into the exciting offering we have lined up for you based on your score:
                        <table>
                            <tr>
                                <th>TIER 1</th>
                                <th>TIER 2</th>
                                <th>TIER 3</th>
                            </tr>
                            <tr>
                                <td>Points - Above 1300</td>
                                <td>Points - 1300 to 1000</td>
                                <td>Points - 600 to 1000</td>
                            </tr>
                            <tr>
                                <td>Certificate of Recognition</td>
                                <td>Certificate of Recognition</td>
                                <td>Certificate of Recognition</td>
                            </tr>
                            <tr>
                                <td>Letter of appreciation </td>
                                <td>Letter of appreciation </td>
                                <td>Letter of appreciation </td>
                            </tr>
                            <tr>
                            <td>Goodies </td>
                            <td>Goodies </td>
                            <td>Goodies </td>
                            </tr>
                            <tr>
                            <td>Two free workshops and One event </td>
                            <td>One free workshop </td>
                            <td>One free event </td>
                            </tr>
                            <tr>
                            <td>Free Accommodation </td>
                            <td>Accommodation concession* </td>
                            <td>Accommodation concession* </td>
                            </tr>
                            <tr>
                            <td>Mention in the Symposium Newsletter/Website and on Stage as well </td>
                            <td>Mention in the Symposium Newsletter/Website and on Stage as well </td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Summer Internship opportunity at NITT  </td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Interact with our professors  </td>
                            <td></td>
                            <td></td>
                            </tr>
                        </table>
                       
                        *Terms and Conditions Apply
                        <br />
                        <b> Not just these, there are many more incentives waiting for our campus ambassadors. Join us to know more!</b>



                        {' '}
                    </Text>
                </Stack>
            </Center>




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





            {/* <About/> */}
            {/* <Members/> */}
            <Footer />
        </Box>

    );
}

export default CAmb;
