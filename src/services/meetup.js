import { GraphQLClient } from 'graphql-request'
import { AsyncStorage } from 'react-native'

const request = async (query, variables) => {
  const endpoint =
    'https://mentor-koding-microservice-meetups.glitch.me/graphql'
  const token = await AsyncStorage.getItem('token')
  const headers = token ? { authorization: `Bearer ${token}` } : {}
  const graphqlClient = new GraphQLClient(endpoint, { headers })

  const data = await graphqlClient.request(query, variables)
  return data
}

const meetups = input => {
  return new Promise((resolve, reject) => {
    const query = `query meetups($isConfirmed: Boolean!) {
      meetups(isConfirmed: $isConfirmed) {
        topic,
        mentorId,
        studentId,
        date,
        time,
        detailPlace,
        isFinished,
        rating,
        review
      }
    }`
    request(query, input).then(data => {
      resolve(data.meetups)
    })
  })
}

const meetup = input => {
  return new Promise((resolve, reject) => {
    const query = `query meetup($_id: ID!) {
      meetup(_id: $_id) {
        topic,
        mentorId,
        studentId,
        date,
        time,
        detailPlace,
        isFinished,
        rating,
        review
      }
    }`
    request(query, input).then(data => {
      resolve(data.meetup)
    })
  })
}

request.meetups = meetups
request.meetup = meetup
export default request
