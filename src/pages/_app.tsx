import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { Suspense } from "react";
import Spinner from "@/components/widgets/spinner";

const customTheme = createTheme({
  typography: {
    fontFamily: `"Merriweather","Open-Sans",  "Arial", sans-serif`,
  },
  palette: {
    secondary: {
      main: "#e8b96d",
    },
    primary: {
      main: "#b05621",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense
      fallback={
        <Spinner loading={true} width={100} height={100}  />
      }
    >
      <ThemeProvider theme={customTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Suspense>
  );
}
