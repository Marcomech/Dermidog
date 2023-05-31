import Head from "next/head";
import { ReactNode } from "react";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/constants/themes";
import { Typography, Box } from "@mui/material";
import GlobalMenu from "@/components/globalMenu";

type Props = {
  children: ReactNode;
};

export default function GlobalLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Dermidog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../assets/favIcon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <div style={{
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 10,
          paddingBottom: 10,
          height: '100vh',
        }}>
          <GlobalMenu />
          <Typography align='center' variant='h1' marginTop={1} >
            Dermidog
          </Typography>
          <Box height={50} />
          {children}
          <CssBaseline />
        </div>
      </ThemeProvider>
    </>
  );
}
