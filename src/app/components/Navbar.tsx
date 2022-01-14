import { Stack, Box, Text, Image, Container, Button, CircularProgress, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import coin from "../../assets/icons/coin.svg";
import useUser from "../../hooks/useUser"
import { postPoints } from "../../services/postPoints"
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ points, changePoints, isHome }) => {
    const user = useUser()
    const [first,setFirst] = useState(true)
    const navigate = useNavigate()

    if (!user) return <Center>
                        <CircularProgress isIndeterminate color="cyan.200" />
                      </Center>

    if(first){
        changePoints(user.points)
        setFirst(!first)
    }

    return (
        <Box bg="white" width="100%">
            <Container maxW="100vw">
                <Stack
                    direction="row"
                    paddingY={3}
                    width="100%"
                    justifyContent="space-between"
                    alignItems="center">
                    <Image cursor="pointer" onClick={()=> navigate('/')} src={logo} width={7} height={7} />
                    {isHome ? 
                        <Button _hover={{backgroundColor:"cyan.200"}} bg='cyan.300' color="white" onClick={()=> navigate('/history')}>History</Button>
                        :
                        <Button _hover={{backgroundColor:"cyan.200"}} bg='cyan.300' color="white" onClick={()=> navigate('/')}>Home</Button>}
                    <Stack direction="row" alignItems="center" spacing={3}>
                        <Text>{user.name}</Text>
                        <Stack
                            onClick={() => postPoints(1000).then(res => { changePoints(res['New Points']) })}
                            cursor="pointer"
                            paddingX={2}
                            paddingY={1}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            bg="gray.100"
                            borderRadius={999}>
                            <Text>{points}</Text>
                            <Image src={coin} width={5} height={5} />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Navbar;
