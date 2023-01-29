import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Box,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { authSignup } from "../redux/Auth/Auth.action";

function SignUp() {
  const navigate = useNavigate()
  // const dispatch = useDispatch()
  const toast = useToast()
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    mobile: "",
    age: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // console.log(value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://clever-pink-mittens.cyclic.app/authentication/signup", {
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
          title: 'Account Created',
          position: 'top',
          status:'success',
          isClosable: true,
        })
    
        navigate('/login')
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
        <form onSubmit={handleSubmit}>
          <Stack>
            <FormControl>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                id="firstName"
                name="first_name"
                type="text"
                value={formData.first_name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input
                id="lastName"
                name="last_name"
                type="text"
                value={formData.last_name}
                onChange={handleChange}
              />
            </FormControl>
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
            {/* <FormControl>
              <FormLabel htmlFor="city">City</FormLabel>
              <Input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
              />
            </FormControl> */}
            <FormControl>
              <FormLabel htmlFor="mobile">Mobile</FormLabel>
              <Input
                id="mobile"
                name="mobile"
                type="Number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="age">Age</FormLabel>
              <Input
                id="age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
              />
            </FormControl>
            <Button mt={4} variantColor="teal" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
}

export default SignUp;
