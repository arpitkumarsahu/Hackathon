import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Container,
    Flex,
    Heading,
    List,
    ListItem,
    SimpleGrid,
    Text,
    UnorderedList,
    chakra
  } from '@chakra-ui/react'

const plandata = [{
        title: "Free Plan",
        features:["Schedule tasks for your team", "Collaborate freely with all your team members", "Max. 5 team members per workspace", "Chat with your team members"],
        cta: "Try now for free →",
        price:"₹ 0"
    },{
        title: "Pro Plan",
        features:["Schedule tasks for your team", "Collaborate freely with all your team members","Chat with your team members", "Max. 25 team members per workspace", "Track progress of the project" ],
        cta: "Join Now →",
        price:"₹ 499" 
    },{
        title: "Exclusive Plan",
        features:["Schedule tasks for your team", "Collaborate freely with all your team members", "Chat with your team members","No limit on team members per workspace", "Track progress of the project"  ],
        cta: "Join Now →",
        price: "₹ 699" 
    }]

const Subscript = () => {

    return (
        <Flex w="100vw" bg="#EDF2FE" flexDirection={"column"} alignItems="center">
            <Heading color="purple.600" m="30px auto" fontSize="36px" textTransform={"uppercase"} mt="80px">Subscription Plans</Heading>
            <SimpleGrid margin="auto" padding ={"2px"} width={{base:"60%",lg:"85%"}} columns={3} spacing={3} templateColumns={{base:'repeat(1, 1fr)',lg:'repeat(3, 1fr)'}} mb="40px">
                { plandata.map((plan,i)=>
                <Card key={i} bg="white" p="12px" borderRadius={"20px"}>
                    <CardHeader>
                    <Heading fontSize={{base:"2em", lg:"1.8em"}} mb="2px" p="0px" color={"purple.600"}>{plan.title}</Heading>
                    </CardHeader>
                    <CardBody>
                        <UnorderedList display="flex" flexDirection="column" gap={"18px"} mb={"30px"} >
                            {plan.features.map((feature, i)=>(<ListItem key={i} fontSize={{base:"1.2em", lg:"1em"}} color="#535353" fontWeight={"600"}>{feature}</ListItem>))}
                        </UnorderedList>
                    </CardBody>
                    <CardFooter display={"flex"} flexDirection="column" gap="20px">
                        <Heading color="#535353" fontSize={{base:"2.4em", lg:"1.8em"}}>{plan.price}<chakra.span color="#535353" fontWeight="700" fontSize="0.3em"> / month</chakra.span></Heading>
                        
                        <Button color="white" bg={"purple.400"} borderRadius={"50px"} _hover={{outline:"1px solid #359EFA", bg:"white", color:"#359EFA"}} fontSize="1em" p="10px 10px">{plan.cta}</Button>
                    </CardFooter>
                </Card>
                )}
            </SimpleGrid>
        </Flex>
    )
}

export default Subscript;