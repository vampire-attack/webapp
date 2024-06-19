import type { Metadata } from "next";

import "./globals.css";
import WagmiProviderComp from "@/lib/wagmi-provider";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/lib/config";



export const metadata: Metadata = {
  title: "Next.js App",
  description: "Next.js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <body >
        
          <WagmiProviderComp initialState={initialState}>
            {children}
          </WagmiProviderComp>
      
      </body>
    </html>
  );
}