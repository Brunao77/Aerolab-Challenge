import { useEffect, useState } from "react"
import { getProducts } from "../services/getProducts"

const useProducts=()=>{
    const [products,setProducts]=useState()

    useEffect(()=>{
        getProducts().then(res=>{setProducts(res)})
    },[])

    return products
}

export default useProducts
