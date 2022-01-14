import React, { useState } from "react"
import { Stack, CircularProgress, Center, Container } from "@chakra-ui/react"
import Navbar from "../../components/Navbar"
import useUser from "../../../hooks/useUser"
import ProductsList from "./components/ProductsList"

const History = () => {
    const user = useUser()
    const [points, setPoints] = useState()

    if (!user) return <Center>
                        <CircularProgress isIndeterminate color="cyan.200" />
                      </Center>
    console.log(user)

    return(
        <Stack spacing={0} bg="gray.100" flex={1}>
            <Navbar points={points} isHome={false} changePoints={setPoints} />
            <Center>
                <Container maxW="80vw">
                    <Stack marginTop="max(2vw,20px)" flex={1} spacing={6}>
                        <ProductsList history={user.redeemHistory} />
                    </Stack>
                </Container>
            </Center>
        </Stack>
    )
}

export default History