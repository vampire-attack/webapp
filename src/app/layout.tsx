import type { Metadata } from "next";

import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import WagmiProviderComp from "@/lib/wagmiProvider"
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/lib/config";
import { createTheme, DirectionProvider, MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "Vampire Attack",
  description: "Vampire Attack WebApp",
  icons: [
    {
      url: "/apple-touch-icon.png",
      rel: "apple-touch-icon",
      sizes: "180x180"
    },
    {
      url: "/favicon-32x32.png",
      rel: "icon",
      sizes: "32x32",
      type: "image/png"
    },
    {
      url: "/favicon-16x16.png",
      rel: "icon",
      sizes: "16x16",
      type: "image/png"
    },
    {
      url: "/safari-pinned-tab.svg",
      rel: "mask-icon",
      color: "#5bbad5"
    },
  ],
  manifest: "/site.webmanifest",
  themeColor: "#ffffff"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  return (
    <html lang="en">
      <body>
        <DirectionProvider>
          <MantineProvider theme={theme}>
            <WagmiProviderComp initialState={initialState}>
              {children}
            </WagmiProviderComp>
          </MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
