import { Stack, Container, Text, Image, StackDivider, Button } from "@chakra-ui/react"
import React from "react"
import buyBlue from "../../../../assets/icons/buy-blue.svg"
import buyWhite from "../../../../assets/icons/buy-white.svg"
import coin from "../../../../assets/icons/coin.svg"
import { postRedeem } from "../../../../services/postRedeem"

const ProductCard = ({ points, product, changePoints, selected, changeSelected }) => {

    return (
        <Container
            position="relative"
            onClick={selected ? () => changeSelected() : () => changeSelected(product._id)}
            maxW="max(15vw,300px)"
            width="100%"
            padding={3}
            paddingTop={0}
            bg="white"
            boxShadow="sm">
            <Stack bg="wite" padding={0} divider={<StackDivider color="gray.300" />}>
                <Stack
                    userSelect="none"
                    paddingX={0}
                    paddingY={3}
                    bgPos="center"
                    bgImage={product.img.url}
                    bgSize="contain"
                    bgRepeat="no-repeat"
                    height={180}
                    justifyContent="flex-start"
                    alignItems="flex-end">
                    {product.cost < points ?
                        <Image width={6} height={6} src={buyBlue} />
                        :
                        <Stack
                            bg="blackAlpha.600"
                            borderRadius={999}
                            direction="row"
                            alignItems="center"
                            textAlign="center"
                            paddingX={2}
                            paddingY={1}
                            spacing={1}>
                            <Text fontSize="sm" color="gray.300">You need {product.cost - points}</Text>
                            <Image width={5} height={5} src={coin} />
                        </Stack>}
                </Stack>
                <Stack alignItems="flex-start" spacing={0}>
                    <Text color="gray.300">{product.category}</Text>
                    <Text>{product.name}</Text>
                </Stack>
            </Stack>
            {selected &&
                <Stack paddingBottom={41} spacing={0} left={0} top={0} height="100%" width="100%" position="absolute" bg="rgba(11,197,234,0.8)" alignItems="center" justifyContent="center">
                    <Stack
                        userSelect="none"
                        paddingX={3}
                        justifyContent="flex-start"
                        maxHeight={100}
                        width="100%"
                        height="100%"
                        alignItems="flex-end">
                        <Image src={buyWhite} width={6} height={6} />
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <Text color="white" fontSize="max(2vw,30px)" lineHeight="none">{product.cost}</Text>
                        <Image src={coin} width={8} height={8} />
                    </Stack>
                    {product.cost < points ?
                        <Button 
                            onClick={()=>postRedeem(product._id).then(changePoints(points-product.cost))}>Redeem now</Button>
                        :
                        <Stack alignItems="center">
                            <Text>You don't have the necessary points</Text>
                            <Text>You need {product.cost - points}</Text>
                        </Stack>
                        
                    }
                </Stack>
            }
        </Container>


    )
}

export default ProductCard