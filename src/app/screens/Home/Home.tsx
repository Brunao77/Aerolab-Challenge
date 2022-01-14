import React, { useState } from "react"
import { Stack, Center, Container } from "@chakra-ui/react"
import ProductList from "./components/ProductsList"
import Navbar from "../../components/Navbar"
import Header from "./components/Header"

const Home = () => {
    const [points, setPoints] = useState()
    return (
        <Stack spacing={0} bg="gray.100" flex={1}>
            <Navbar points={points} changePoints={setPoints} isHome={true} />
            <Header />
            <Center>
                <Container maxW="80vw">
                    <Stack marginTop={50} flex={1} spacing={6}>
                        <ProductList points={points} changePoints={setPoints} />
                    </Stack>
                </Container>
            </Center>
        </Stack>
    )
}

export default Home