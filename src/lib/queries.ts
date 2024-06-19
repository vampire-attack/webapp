import gql from 'graphql-tag';
import uniswapV2GraphQLClient from './uniswapV2GraphqlClient';
import uniswapV3GraphQLClient from './uniswapV3GraphqlClient';
import curveGraphQLClient from './curveGraphqlClient';
import sushiSwapGraphQLClient from './sushiswapGraphqlClient';
interface Token {
  id: string;
  symbol: string;
  name: string;
}

interface Pair {
  id: string;
  token0: Token;
  token1: Token;
  reserve0: string;
  reserve1: string;
  totalSupply: string;
}
interface Pool {
  id: string;
  token0: Token;
  token1: Token;
  liquidity: string
  totalSupply: string;
}

export interface V2LiquidityPosition {
  pair: Pair;
  liquidityTokenBalance: string;
}

export interface V3LiquidityPosition {
  pool: Pool;
  liquidityTokenBalance: string;
}

export interface CurveLiquidityPosition {
  liquidityToken: {
    name: string,
    symbol: string,
    id: string
  },
  liquidityTokenBalance: string
}

export interface SushiSwapLiquidityPosition {
  liquidityToken: {
    name: string,
    symbol: string,
    id: string
  },
  liquidityTokenBalance: string
}


export interface User {
  id: string;
  uniswapV2LiquidityPositions: V2LiquidityPosition[];
  uniswapV3LiquidityPositions: V3LiquidityPosition[];
  curveLiquidityPositions: CurveLiquidityPosition[];
}

export const fetchUniswapV2UserLiquidityPositions = async (userAddress: string): Promise<V2LiquidityPosition[] | null> => {
  const query = gql`
    query($userAddress: ID!) {
      user(id: $userAddress) {
        liquidityPositions {
          pair {
            id
            token0 {
              id
              symbol
              name
            }
            token1 {
              id
              symbol
              name
            }
            reserve0
            reserve1
            totalSupply
          }
          liquidityTokenBalance
        }
      }
    }
  `;

  const variables = { userAddress };
  const data = await uniswapV2GraphQLClient.request<{ user: any }>(query, variables);
  return data.user.liquidityPositions || null;
};

export const fetchUniswapV3UserLiquidityPositions = async (userAddress: string): Promise<V3LiquidityPosition[] | null> => {
  const query = gql`
    query($userAddress: ID!) {
      positions(where: { owner: $userAddress }) {
        id
        liquidity
        pool {
          id
          token0 {
            id
            symbol
            name
          }
          token1 {
            id
            symbol
            name
          }
          liquidity
          totalValueLockedToken0
          totalValueLockedToken1
        }
      }
    }
  `;
  const variables = { userAddress };
  const data = await uniswapV3GraphQLClient.request<{ positions: any }>(query, variables);
  return data.positions || null;
};

export const fetchCurveUserLiquidityPositions = async (userAddress: string): Promise<CurveLiquidityPosition[] | null> => {
  const query = gql`
  query ($userAddress: ID!) {
    user(id: $userAddress) {
      liquidityPositions {
        liquidityToken {
          name
          symbol
          id
        }
        liquidityTokenBalance
      }
    }
  }
`;
  const variables = { userAddress };
  const data = await curveGraphQLClient.request<{ user: any }>(query, variables);
  return data.user.liquidityPositions || null;
};

export const fetchSushiSwapUserLiquidityPositions = async (userAddress: string): Promise<SushiSwapLiquidityPosition[] | null> => {
  const query = gql`
  query ($userAddress: ID!) {
    user(id: $userAddress) {
      liquidityPositions {
        liquidityToken {
          name
          symbol
          id
        }
        liquidityTokenBalance
      }
    }
  }
`;
  const variables = { userAddress };
  const data = await sushiSwapGraphQLClient.request<{ user: any }>(query, variables);
  return data.user.liquidityPositions || null;
};