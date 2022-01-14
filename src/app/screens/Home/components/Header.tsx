import { Stack, Text, Image, Container } from "@chakra-ui/react";
import React from "react";
import header from "../../../../assets/header.png";

const Header = () => {
    return (
        <Stack
            justifyContent="flex-end"
            bgImage={header}
            bgSize="cover"
            alignItems="flex-start"
            minH="max(25vw,150px)"
            paddingX="10vw"
            paddingY="3vw">
            <Text fontWeight="500" fontSize="max(3vw,25px)" color="white">Electronics</Text>
        </Stack>
    );
};

export default Header;