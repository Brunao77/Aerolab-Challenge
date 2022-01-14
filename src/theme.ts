import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
    styles: {
        global: {
            "#root":{
                textAlign:"center",
                backgroundColor:"white",
                minHeight:"100vh",
                display:"flex",
                flexDirection:"column",
                color:"#333",
            },
            "*":{
                boxSizing:"border-box",
            },
            body: {
                margin:"0",
            },
        },
    },
});