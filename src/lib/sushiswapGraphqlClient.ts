import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://api.thegraph.com/subgraphs/name/sushiswap/sushiswap';

const sushiSwapGraphQLClient = new GraphQLClient(endpoint);

export default sushiSwapGraphQLClient;
