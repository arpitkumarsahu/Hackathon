import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  Grid,
  Box,
  Heading,
  Image,
  Link,
  Flex,
  Button,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  const navigate = useNavigate()


  useEffect(() => {
    fetch("https://clever-pink-mittens.cyclic.app/course/allcourse")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
        // Handle error here
      });
  }, []);


  const handleBUy =()=>{
    navigate('/payment')
  }

  return (
    <div>
      <Navbar />
      {/* <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Box>
          <Heading as="h1" size="lg">Featured Products</Heading>
          <Flex direction="column" alignItems="center" gap={2}>
            <Image src="product1.jpg" alt="Product 1" />
            <Link href="#">Product 1</Link>
            <Button variantColor="green">Add to Cart</Button>
          </Flex>
          <Flex direction="column" alignItems="center" gap={2}>
            <Image src="product2.jpg" alt="Product 2" />
            <Link href="#">Product 2</Link>
            <Button variantColor="green">Add to Cart</Button>
          </Flex>
        </Box>
        <Box>
          <Heading as="h1" size="lg">Special Offers</Heading>
          <Flex direction="column" alignItems="center" gap={2}>
            <Image src="offer1.jpg" alt="Offer 1" />
            <Link href="#">Offer 1</Link>
            <Button variantColor="green">View Offer</Button>
          </Flex>
          <Flex direction="column" alignItems="center" gap={2}>
            <Image src="offer2.jpg" alt="Offer 2" />
            <Link href="#">Offer 2</Link>
            <Button variantColor="green">View Offer</Button>
          </Flex>
        </Box>
      </Grid> */}
      <Box mt="20px">
        <Image
          alignItems={"center"}
          margin="auto"
          src="https://vmkt.vedantu.com/prod/Ankt/NEET-1224x414_Top_Homepage_Dweb_18-Jan.webp"
        />
        <Box
          margin={"auto"}
          alignItems="center"
          display={"flex"}
          justifyContent="space-around"
          mt="25px"
        >
          <Grid
            display={"flex"}
            alignItems="center"
            margin={"auto"}
            templateColumns="repeat(5, 1fr)"
            gap={6}
          >
            {data.map((item) => (
              <GridItem key={item._id} boxShadow="xl">
                <Box>
                  <Image src={item.image} />
                  <p>Author : {item.author_name}</p>
                  <Flex gap="10px">
                    <h3>{item.course_name}</h3>
                    <p>{item.price}</p>
                  </Flex>
                  <Text>{item.short_description}</Text>

                  <Button onClick={handleBUy}>Buy</Button>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
