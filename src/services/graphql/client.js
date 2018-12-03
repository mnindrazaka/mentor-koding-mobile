import { AsyncStorage } from 'react-native'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const authLink = setContext(async () => {
  const token = await AsyncStorage.getItem('token')
  return {
    headers: token ? { authorization: `Bearer ${token}` } : {}
  }
})

const httpLink = createHttpLink({
  uri: 'https://mentor-microservice-gateway.herokuapp.com/graphql'
})

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache()
})

export default client
