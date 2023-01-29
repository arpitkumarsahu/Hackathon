import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Box,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { authlogin } from "../redux/Auth/Auth.action";
// import { isMsgFalse } from "../redux/Auth/Auth.actionType";
// import { isMsgFalse } from "../redux/Auth/Auth.actionType";

function Login() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const toast = useToast()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const { isSuccessMsg } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (isSuccessMsg) {
  //     toast({
  //       title: 'Login Successful',
  //       position: 'top',
  //       status:'success',
  //       isClosable: true,
  //     })
  //     navigate("/");
  //   }
  //   dispatch({ type: isMsgFalse });
  // }, [isSuccessMsg]);

  // const

  //https://taupe-dhole-boot.cyclic.app/

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://clever-pink-mittens.cyclic.app/authentication/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle successful signup here
        toast({
          title: 'Wlcome to code craft',
          position: 'top',
          status:'success',
          isClosable: true,
        })
    
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
        // Handle error here
      });
  };

  return (
    <>
      <Box
        shadow="xl"
        p={"10"}
        width="500px"
        align="center"
        margin={"auto"}
        mt={"20px"}
      >
        <Image src="https://logopond.com/logos/7f9714a1c81657573f6e58acc2b9e07d.png" />
        <form onSubmit={handleSubmit}>
          <Stack>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </FormControl>
            <Button mt={4} variantColor="teal" type="submit">
              Login
            </Button>
            <Text onClick={() => navigate("/signup")}>Not a User ? SignUp</Text>
          </Stack>
        </form>
      </Box>
    </>
  );
}

export default Login;
