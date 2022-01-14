import React from "react"
import { Stack, Text, StackDivider, Center, Container } from "@chakra-ui/react"
import ProductCard from "./ProductCard"

const ProductsList = ({ history }) => {

    return (
        <Center>
            <Container maxW="6xl">
                <Text
                    display="flex"
                    alignSelf="flex-start"
                    fontSize="max(4vw,25px)"
                    fontWeight="800"
                    color="cyan.300"
                    marginBottom="max(1vw,20px)">Redeem Historial</Text>
                <Stack spacing={5} divider={<StackDivider color="gray.300" />}>
                    {history.map(product =>
                        <ProductCard product={product} />
                    ).reverse()}
                </Stack>
            </Container>
        </Center>
    )
}

export default ProductsList