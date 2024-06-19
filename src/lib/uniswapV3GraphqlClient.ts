import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';

const uniswapV3GraphQLClient = new GraphQLClient(endpoint);

export default uniswapV3GraphQLClient;
