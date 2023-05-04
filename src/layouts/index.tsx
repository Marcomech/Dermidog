import Head from "next/head";
import { ReactNode, useState } from "react";

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/constants/themes";


type Props = {
  children: ReactNode;
};

export default function GlobalLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Dermidog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        {children}
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}
