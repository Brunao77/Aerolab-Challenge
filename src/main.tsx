import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./app/screens/Home/Home";
import History from "./app/screens/History/History"
import theme from "./theme"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/history" element={<History />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
