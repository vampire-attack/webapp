import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://api.thegraph.com/subgraphs/name/blocklytics/curve';

const curveGraphQLClient = new GraphQLClient(endpoint);

export default curveGraphQLClient;
