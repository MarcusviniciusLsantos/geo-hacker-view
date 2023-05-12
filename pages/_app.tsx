import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "@/components/main-nav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainNav />
      <Component {...pageProps} />
    </>
  );
}
