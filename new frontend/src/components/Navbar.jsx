import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
// import { Box, Flex, Link, Button } from "@chakra-ui/core";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justifyContent={"space-between"}
      //   justify="space-around"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Box as="span" fontSize="xl" fontWeight="bold">
          <Image
            w="100px"
            h="60px"
            src="https://logopond.com/logos/7f9714a1c81657573f6e58acc2b9e07d.png"
          />
        </Box>
      </Flex>

      {/* <Box display={{ sm: "block", md: "none" }} >
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box> */}

      <Box
        // display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        
        flexGrow={1}
        justifyContent={"space-between"}
      >
        <Link to="/login">
          <Button color={"black"} variantColor="teal" mr={3}>
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button color={"black"} variantColor="teal">
            Sign Up
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
