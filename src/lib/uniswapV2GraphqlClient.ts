import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';

const uniswapv2GraphQLClient = new GraphQLClient(endpoint);

export default uniswapv2GraphQLClient;
