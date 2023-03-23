import "@app/styles/globals.css";
import type { AppProps } from "next/app";
import { Theme } from "@app/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
