"use client";

import { useState, useEffect } from 'react';
import { fetchUniswapV2UserLiquidityPositions,fetchUniswapV3UserLiquidityPositions, User, V2LiquidityPosition ,V3LiquidityPosition} from '../lib/queries';

const UniswapPools: React.FC = () => {
  const [userAddress, setUserAddress] = useState<string>('0xc36442b4a4522e871399cd717abdd847ab11fe88');
  const [uniswapV2LiquidityPositions, setUniswapV2LiquidityPositions] = useState<V2LiquidityPosition[] | null>(null);
  const [uniswapV3LiquidityPositions, setUniswapV3LiquidityPositions] = useState<V3LiquidityPosition[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const v2Pools = await fetchUniswapV2UserLiquidityPositions(userAddress);
      setUniswapV2LiquidityPositions(v2Pools || null);
      const v3Pools = await fetchUniswapV3UserLiquidityPositions(userAddress);
      setUniswapV3LiquidityPositions(v3Pools || null);
      setLoading(false);
    };

    fetchData();
  }, [userAddress]);

  return (
    <div className='text-white'>
      <h1>Uniswap V2 Liquidity Positions</h1>
      <input
        type="text"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
        placeholder="Enter Ethereum Address"
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {uniswapV2LiquidityPositions?.map((position) => (
            <li key={position.pair.id}>
              <p>Pair: {position.pair.token0.symbol}/{position.pair.token1.symbol}</p>
              <p>Liquidity Token Balance: {position.liquidityTokenBalance}</p>
              <p>Reserve0: {position.pair.reserve0}</p>
              <p>Reserve1: {position.pair.reserve1}</p>
              <p>Total Supply: {position.pair.totalSupply}</p>
            </li>
          ))}
        </ul>
      )}
      <h1>Uniswap V3 Liquidity Positions</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {uniswapV3LiquidityPositions?.map((position) => (
            <li key={position.pool.id}>
              <p>Pair: {position.pool.token0.symbol}/{position.pool.token1.symbol}</p>
              <p>Liquidity Token Balance: {position.liquidityTokenBalance}</p>
              <p>Total Supply: {position.pool.liquidity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>


  );
};

export default UniswapPools;


// import { useUniswapV2Pools } from "../hooks/useUniswapV2Pools";

// export default function UniswapPools() {
//     const pools = useUniswapV2Pools();
//     console.log(pools);

//     return (
//         <div className="text-white">

//             {pools.length > 0 && (
//                 <div>
//                     <h3>Your Uniswap Pools</h3>
//                     <ul>
//                         {pools.map((pool: any, index: any) => (
//                             <li key={index}>
//                                 {/* Render pool details */}
//                                 {pool.token0.symbol}/{pool.token1.symbol}: {pool.reserve0.toSignificant(6)} / {pool.reserve1.toSignificant(6)}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }

