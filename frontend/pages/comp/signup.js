import {
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
  GridItem,
  Grid,
  useToast,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

const VARIANT_COLOR = "teal";

const SignUp = () => {
  const initState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  };
  const toast = useToast();
  const router = useRouter();
  const [formData, setFromData] = useState(initState);
  // console.log("formData:", formData);
  const [resStatus, setResStatus] = useState(false);
  const [data, setData] = useState([]);

  const {
    firstName,
    lastName,
    confirmPassword,
    email,
    age,
    password,
    phone,
    role,
  } = formData;
  const [passwordChk, setPasswrdChek] = useState(false);

  const handleChange = (e) => {
    const { type, name, value, checked,age } = e.target;

    setFromData({ ...formData, [name]: value });
  };

  const createUser = async () => {
    setResStatus(false);

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://clever-pink-mittens.cyclic.app/authentication/signup",
      { firstName, lastName, confirmPassword, email, password, phone, age },
      config
    );
    // console.log("data:", data);
    if (data.message === "User_Exists") {
      toast({
        title: "User Already Exist",
        position: "top",
        description: "Try with different email id",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      setFromData({ ...formData, email: "" });
    } else {
      setResStatus(true);
      toast({
        title: "Account created.",
        position: "top",
        description: "We've created your account for you.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setTimeout(() => {
        router.push("/login");
      },1400);

      return;
    }
  };

  const hanldeClick = () => {
    let p1 = password;
    let p2 = confirmPassword;

    let em = formData.email;

    if (p1 !== p2) {
      setPasswrdChek(true);
      toast({
        title: "PASSWORD CHECK",
        position: "top",
        description:
          "PASSWORD IS NOT MATCHING, Please Enter The Correct Password",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      setFromData({ ...formData, password: "", confirmPassword: "" });
      setPasswrdChek(false);

      return;
    }
    // Send a POST request axios
    if (!passwordChk) {
      setResStatus(false);
      createUser();
    }
  };
  return (
    <>
    {/* <Navbar/> */}
      <Box height={"full"} mt={"60px"}>
        <Flex
          bg={"#65647C"}
          height={"auto"}
          width="full"
          align="center"
          justifyContent="center"
        >
          <Box
            bg={"white"}
            height={"auto"}
            my={4}
            borderWidth={1}
            px={4}
            width="full"
            maxWidth="500px"
            borderRadius={4}
            textAlign="center"
            boxShadow="lg"
          >
            <Box p={4}>
              {/* <SignUpHeader /> */}
              <Box textAlign={"center"}>
                {/* <Image
                w={"30%"}
                m={"auto"}
                src=""
              ></Image> */}
                <Text
                  fontWeight={700}
                  fontSize={{ base: "1rem", md: "1.1rem" }}
                  mt={2}
                >
                  Sign Up to Digital Force Account
                </Text>
              </Box>
              {/* <SignUpForm /> */}
              <Grid mt={2} w="full" templateColumns="repeat(2, 1fr)" gap={2}>
                {/* 1 First Name */}
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      placeholder="Name"
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      placeholder="Name"
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>

                {/* 2 Email*/}
                <GridItem colSpan={{ base: 2, md: 2 }}>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>
                {/* 3 Password*/}
                <GridItem colSpan={{ base: 2, md: 2 }}>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={{ base: 2, md: 2 }}>
                  <FormControl isRequired>
                    <FormLabel>Confrim Password</FormLabel>
                    <Input
                      placeholder="Password"
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>

                {/* 3 Phone*/}
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <FormControl isRequired>
                    <FormLabel>Phone</FormLabel>
                    <Input
                      placeholder="Phone"
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <FormControl isRequired>
                    <FormLabel>Age</FormLabel>
                    <Input placeholder="age"
                     type="text" name="age"
                      value={age} 
                      onChange={handleChange} />
                  </FormControl>
                </GridItem>

                {/* 8 Buttom */}
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <Button colorScheme="purple" onClick={hanldeClick} w={"full"}>
                      Sign Up
                    </Button>
                  </FormControl>
                </GridItem>
              </Grid>
              {/* <signUp /> */}
            </Box>
          </Box>
        </Flex>
      </Box>
      {/* <Footer/> */}
    </>
  );
};

export default SignUp;
