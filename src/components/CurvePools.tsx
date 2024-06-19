"use client";

import { useState, useEffect } from 'react';
import { fetchCurveUserLiquidityPositions, User, CurveLiquidityPosition } from '../lib/queries';

const CurvePools: React.FC = () => {
    const [userAddress, setUserAddress] = useState<string>('0xf69ea6646cf682262e84cd7c67133eac59cef07b');
    const [curveLiquidityPositions, setCurveLiquidityPositions] = useState<CurveLiquidityPosition[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const curvePools = await fetchCurveUserLiquidityPositions(userAddress);
            console.log(curvePools);

            setCurveLiquidityPositions(curvePools || null);
            setLoading(false);
        };
        fetchData();
    }, [userAddress]);

    return (
        <div className='text-white'>
            <h1 style={{ color: 'red' }}>Curve Positions</h1>
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
                    {curveLiquidityPositions?.map((position) => (
                        <li key={position.liquidityToken.id}>
                            <p>Pair: {position.liquidityToken.symbol}</p>
                            <p>Liquidity Token Balance: {position.liquidityTokenBalance}</p>
                        </li>
                    ))}
                </ul>
            )}

        </div>


    );
};

export default CurvePools;
