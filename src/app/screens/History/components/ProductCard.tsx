import React, { useState } from "react"
import { Stack, Text, Image, Center, Container } from "@chakra-ui/react"
import coin from "../../../../assets/icons/coin.svg"

const ProductCard = ({ product }) => {

    return (
        <Stack
            direction="row"
            spacing="max(4vw,25px)"
            justifyContent="center"
            alignItems="center"
            bg="white"
            border="1px solid #9DECF9"
            borderRadius="10px">
            <Image
                objectFit='contain'
                width="max(6vw,25px)"
                height="max(6vw,25px)"
                src={product.img.url} />
            <Stack
                width="100%"
                maxW="max(12vw,40px)"
                alignItems="center"
                justifyContent="center"
                spacing={0}>
                <Text fontSize="max(1.2vw,10px)">{product.name}</Text>
                <Text fontSize="max(0.8vw,8px)" color="gray.300">{product.category}</Text>
            </Stack>
            <Stack
                width="100%"
                maxW="max(12vw,10px)"
                alignItems="center"
                justifyContent="center"
                spacing={0}>
                <Text fontSize="max(1.2vw,7px)">{product.createDate.slice(0, 10)}</Text>
                <Text fontSize="max(0.8vw,7px)" color="gray.300">Date YY/MM/DD</Text>
            </Stack>
            <Stack 
            
            alignItems="center" 
            justifyContent="center" 
            spacing={0}>
                <Stack direction="row" alignItems="center" textAlign="center" spacing="max(0.5vw,5px)">
                    <Text fontSize="max(1.2vw,10px)">{product.cost}</Text>
                    <Image src={coin} width="max(1vw,10px)" height="max(1vw,10px)" />
                </Stack>
                <Text fontSize="max(0.8vw,8px)" color="gray.300">Price</Text>
            </Stack>
        </Stack>
    )
}

export default ProductCard