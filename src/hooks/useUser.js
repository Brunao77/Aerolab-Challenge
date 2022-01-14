import { useEffect, useState } from "react"
import { getUser } from "../services/getUser"

const useUser=()=>{
    const [user,setUser]=useState()

    useEffect(()=>{
        getUser().then(res=>{setUser(res)})
    },[])

    return user
}

export default useUser