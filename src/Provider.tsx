import { ReactNode } from "react";
import { HomeProvider } from "./app/home/context/HomeContext";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared/config/queryClient";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <HomeProvider>{children}</HomeProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default Provider;
