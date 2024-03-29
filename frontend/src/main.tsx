import React from "react";
import ReactDOM from "react-dom/client";
import { IndexPage } from "./pages/index.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <IndexPage />
    </ChakraProvider>
  </React.StrictMode>
);
