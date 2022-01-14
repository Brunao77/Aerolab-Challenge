import React from "react";
import { Stack, Text, Image, StackDivider } from "@chakra-ui/react";
import arrowLeft from "../../../../assets/icons/arrow-left.svg"
import arrowRight from "../../../../assets/icons/arrow-right.svg"

const NavbarFilters = ({ products, filters, filterSelected, changeFilter }) => {

    return (
        <Stack
            alignItems="flex-start"
            justifyContent="space-between"
            direction="row"
            spacing="max(6vw,60px)">
            <Stack
                direction="row"
                alignItems="center"
                flex={1}
                spacing="max(2vw,10px)"
                width="100%"
                divider={<StackDivider alignSelf="center" color="gray.300" height="max(2vw,40px)" />}>
                <Text fontSize="max(1vw,15px)">{products.length} of {products.length} products</Text>
                <Stack
                    direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
                    alignItems="center"
                    spacing="max(1vw,15px)">
                    <Text fontSize="max(1vw,15px)">Sort by:</Text>
                    {filters.map(element =>
                        <Stack
                            key={element}
                            onClick={() => changeFilter(element)}
                            paddingY="10px"
                            cursor="pointer"
                            borderRadius={999}
                            width="max(6vw,100px)"
                            bg={filterSelected === element ? 'cyan.300' : 'gray.200'}
                            justifyContent="center"
                            alignItems="center" >
                            <Text color={filterSelected === element ? 'white' : 'gray.400'}>{element}</Text>
                        </Stack>
                    )}
                </Stack>
            </Stack>
            <Stack
                direction="row"
                alignSelf="center"
                alignItems="center"
                justifyContent="center">
                <Image width="max(2vw,30px)" height="max(2vw,30px)" cursor="pointer" src={arrowLeft} />
                <Image width="max(2vw,30px)" height="max(2vw,30px)" cursor="pointer" src={arrowRight} />
            </Stack>
        </Stack>
    )
}

export default NavbarFilters