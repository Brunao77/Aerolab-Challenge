import { Stack, Container, StackDivider, Center, Grid, CircularProgress } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import useProducts from "../../../../hooks/useProducts"
import NavbarFilters from "./NavbarFilters";
import ProductCard from "./ProductCard";

const filters = ["Most Recent", "Lowest price", "Highest price"]

const ProductList = ({points, changePoints}) => {
    const [filter, setFilter] = useState(filters[0])
    const [selected,setSelected] = useState()
    const products = useProducts()

    const filteredProducts = useMemo(() => {
        switch (filter) {
            case filters[0]: { return products }
            case filters[1]: { return products.sort((a, b) => a.cost - b.cost) }
            case filters[2]: default: { return products.sort((a, b) => b.cost - a.cost) }
        }
    }, [filter, products])

    if (!products) return <Center>
                            <CircularProgress isIndeterminate color="cyan.200" />
                          </Center>
    return (
        <Center>
            <Container maxW="6xl">
                <Stack spacing="max(1vw,10px)" divider={<StackDivider color="gray.300" />}>
                    <NavbarFilters
                        products={products}
                        filters={filters}
                        filterSelected={filter}
                        changeFilter={setFilter} />
                    <Grid gap="max(1.5vw,20px)" templateColumns="repeat(auto-fill,minmax(256px,1fr))" width="100%">
                        {products.map(product =>
                            <ProductCard key={product._id} points={points} changePoints={changePoints} product={product} selected={selected === product._id} changeSelected={setSelected} />
                        )}
                    </Grid>
                </Stack>
            </Container>
        </Center>
    );
};

export default ProductList;