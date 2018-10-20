import { GraphQLClient } from 'graphql-request'
import { AsyncStorage } from 'react-native'

const user = async (query, variables) => {
  const endpoint = 'https://mentor-koding-microservice-users.glitch.me/graphql'
  const token = await AsyncStorage.getItem('token')
  const headers = token ? { authorization: `Bearer ${token}` } : {}
  const graphqlClient = new GraphQLClient(endpoint, { headers })

  const data = await graphqlClient.request(query, variables)
  return data
}

export default user
