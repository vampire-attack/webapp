"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  return (
    < a
      className="rounded-md mx-2 px-7 py-3 text-base font-medium text-white hover:bg-primary/90  bg-light-red"
      onClick={() => open()}
    >
      Connect
    </a >)
}