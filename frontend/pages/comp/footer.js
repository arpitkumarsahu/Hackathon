import {
  Flex,
  Box,
  Stack,
  HStack,
  Link,Image,
  Icon,
  Divider,
  VStack,
  Text, chakra
} from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";



const Footer = () => {

    const Logo = chakra(Image,{
        propsPassed: (prop)=>["src","width", "height", "alt"].includes(prop)
    })
  return (
    <Flex w="100vw"  bg="white">
      <Box w={{base:"95%", md:"80%", lg:"70%" }}
        m="0 auto"
        p="3px"
        _dark={{
          bg: "gray.600",
        }}
      >
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          w="full"
          justify="space-between"
          pt={10}
          gap="10px"
        >
          <Flex justify="center" alignItems={"center"}>
                  <Image
                    src="https://i.pinimg.com/originals/67/ab/ce/67abceeea2158f84d71293800f8cea2f.jpg"
                    
                    alt="logo"
                    height={"60px"}
                    width="180px"
                  />
          </Flex>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{
              base: "12px",
              md: "16px",
            }}
            gap="10px"
            pb="50px"
            color="gray.800"
            _dark={{
              color: "white",
            }}
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            <Flex justify="start" direction="column" fontSize={"1em"} fontWeight={"600"} gap="12px">
              <Link textTransform="uppercase" _hover={{color:"#29B3FE"}}>Pre-Sale FAQS</Link>
              <Link textTransform="uppercase" _hover={{color:"#29B3FE"}}>Product</Link>
            </Flex>
            <Flex justify="start" direction="column" fontSize={"1em"} fontWeight={"600"} gap="12px">
              <Link textTransform="uppercase" _hover={{color:"#29B3FE"}}>Services</Link>
              <Link textTransform="uppercase" _hover={{color:"#29B3FE"}}>Enterprise</Link>
            </Flex>
          </HStack>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{
              base: "12px",
              md: "16px",
            }}
            color="gray.800"
            _dark={{
              color: "white",
            }}
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            <Flex justify="start" direction="column" fontSize={"1em"} fontWeight={"600"} gap="12px">
              <Link textTransform="uppercase" _hover={{color:"#29B3FE"}}>Show Case</Link>
              <Link textTransform="uppercase" _hover={{color:"#29B3FE"}}>Customer Success</Link>
              <Link textTransform="uppercase" _hover={{color:"#29B3FE"}}>Support</Link>
            </Flex>
            <Flex justify="start" direction="column" fontSize={"1em"} fontWeight={"600"} gap="12px">
              <Link textTransform="uppercase" _hover={{color:"#29B3FE"}}>About Us</Link>
              <Link textTransform="uppercase" _hover={{color:"#29B3FE"}}>Contact Us</Link>
              <Link textTransform="uppercase" _hover={{color:"#29B3FE"}}>Resources</Link>
            </Flex>
          </HStack>
        </Stack>
        <Divider
          w="95%"
          mx="auto"
          color="gray.600"
          _dark={{
            color: "#F9FAFB",
          }}
          h="3.5px"
          m="10px"
        />
        <VStack py={3} w="100%">
          <HStack justify="space-evenly" w="50%" p="2px">
            <Link>
              <Icon
                color="gray.800"
                _dark={{
                  color: "white",
                }}
                _hover={{
                  color:"#359EFA"
                }}
                h="20px"
                w="20px"
                as={FaFacebookF}
              />
            </Link>
            <Link>
              <Icon
                color="gray.800"
                _dark={{
                  color: "white",
                }}
                _hover={{
                  color:"purple.700"
                }}
                h="20px"
                w="20px"
                as={FiTwitter}
              />
            </Link>
            <Link>
              <Icon
                _dark={{
                  color: "white",
                }}
                _hover={{
                  color:"purple.700"
                }}
                h="20px"
                w="20px"
                as={GrInstagram}
              />
            </Link>
            <Link>
              <Icon
                _dark={{
                  color: "white",
                }}
                _hover={{
                  color:"purple.700"
                }}
                h="20px"
                w="20px"
                as={FaLinkedinIn}
              />
            </Link>
          </HStack>
          <Text
            textAlign="center"
            fontSize="smaller"
            _dark={{
              color: "white",
            }}
          >
            &copy;Copyright. All rights reserved.
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Footer;
