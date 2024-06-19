


/* import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { Token, Pair, TokenAmount } from "@uniswap/sdk";
import { FACTORY_ADDRESS } from '../data/uniswapV2Config'
import { getProvider, getSigner } from "@/lib/ethereumFunctions";
import ERC20 from "../data/build/ERC20.json";
import PAIR from "../data/build/IUniswapV2Pair.json";
import FACTORY from "../data/build/IUniswapV2Factory.json"
export const useUniswapV2Pools = () => {
    // const { address } = useAccount();
    const  address  = "0x04bDa42de3bc32Abb00df46004204424d4Cf8287"
    let network = Object.create({})
    const { ethereum } = window as any;
    network.provider = new ethers.BrowserProvider(ethereum);
    network.signer = network.provider.getSigner();
    const [pools, setPools] = useState<Pair[]>([]);

    useEffect(() => {
        if (!address) return;

        const fetchPools = async () => {
            // const factoryContract = new ethers.Contract(FACTORY_ADDRESS, ["function allPairs(uint) view returns (address pair)"], provider);
            const factoryContract = new ethers.Contract(FACTORY_ADDRESS, FACTORY.abi, network.provider);
            const allPairsLength = await factoryContract.allPairsLength()
            const pairs: Pair[] = [];

            for (let i = 0; i < allPairsLength; i++) {
                const pairAddress = await factoryContract.allPairs(i);
                const pairContract = new ethers.Contract(pairAddress, PAIR.abi, network.provider);
                const reserves = await pairContract.getReserves();
                const token0Address = await pairContract.token0();
                const token1Address = await pairContract.token1();

                const token0Contract = new ethers.Contract(token0Address, ERC20.abi, network.provider);
                const token1Contract = new ethers.Contract(token1Address, ERC20.abi, network.provider);

                const [token0Symbol, token0Decimals, token1Symbol, token1Decimals] = await Promise.all([
                    token0Contract.symbol(),
                    token0Contract.decimals(),
                    token1Contract.symbol(),
                    token1Contract.decimals(),
                ]);
                console.log("token0 : ", token0Address + " " + token0Decimals + " " + token0Symbol);
                console.log("token1 : ", token1Address + " " + token1Decimals + " " + token1Symbol);
                const token0 = new Token(1, token0Address, token0Decimals, token0Symbol);
                const token1 = new Token(1, token1Address, token1Decimals, token1Symbol);

                const balance = await pairContract.balanceOf(address);

                if (balance.gt(0)) {
                    const pair = new Pair(new TokenAmount(token0, reserves[0]), new TokenAmount(token1, reserves[1]));
                    pairs.push(pair);
                }
            }

            setPools(pairs);
        };

        fetchPools();
    }, [address, network.provider]);

    return pools;
};
*/