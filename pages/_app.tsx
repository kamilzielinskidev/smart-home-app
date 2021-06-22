import { Container } from "@material-ui/core";
import { useEvent, useMount } from "react-use";

import setVhVariable from "../helpers/setVhVariable";

import "@fontsource/poppins";
import "@fontsource/roboto";
import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
const MyApp = ({ Component, pageProps }: AppProps) => {
  useMount(setVhVariable);
  useEvent("resize", setVhVariable);
  return (
    <Container maxWidth="xs" sx={{ padding: 0 }}>
      <div
        style={{
          height: "calc(var(--vh, 1vh) * 100)",
        }}
      >
        <Component {...pageProps} />
      </div>
    </Container>
  );
};

export default MyApp;
