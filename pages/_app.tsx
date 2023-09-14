import ModalContextProvider from "@/store/modal";
import "@/styles/main.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import NProgress from "nprogress";
import Router from "next/router";
import FormContextProvider from "../store/form";
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <FormContextProvider>
        <ModalContextProvider>
          <Component {...pageProps} />
        </ModalContextProvider>
      </FormContextProvider>
    </QueryClientProvider>
  );
}
