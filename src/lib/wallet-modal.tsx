"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  return (
    < a
      className="rounded-md mx-2 px-7 py-3 text-base font-medium text-white hover:bg-primary/90  bg-light-red cursor-pointer"
      onClick={() => open()}
    >
      Connect
    </a >)
}
// "use client";
// import { http, createConfig } from 'wagmi'
// import { base, mainnet, optimism } from 'wagmi/chains'
// import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

// const projectId = '<WALLETCONNECT_PROJECT_ID>'

// export const config = createConfig({
//   chains: [mainnet, base],
//   connectors: [
//     injected(),
//     walletConnect({ projectId }),
//     metaMask(),
//     safe(),
//   ],
//   transports: {
//     [mainnet.id]: http(),
//     [base.id]: http(),
//   },
// })