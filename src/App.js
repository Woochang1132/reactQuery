import React from "react";
import "./App.css";
import MainProducts from "./components/MainProducts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient(/* {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      cacheTIme: 1000 * 60 * 5,
    },
  },
} */);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainProducts />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
