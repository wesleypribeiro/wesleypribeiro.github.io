import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LangProvider } from "@/contexts/LangContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangProvider>
      <Component {...pageProps} />
    </LangProvider>
  );
}
