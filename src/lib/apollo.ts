import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/clhkvtki54b1c01uh1tshgjkz/master',
    cache: new InMemoryCache()
})