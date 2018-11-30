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
        _id,
        topic,
        mentorId,
        studentId,
        date,
        time,
        detailPlace,
        isConfirmed,
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
        _id,
        topic,
        mentorId,
        studentId,
        date,
        time,
        detailPlace,
        isConfirmed,
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

const createMeetup = input => {
  return new Promise((resolve, reject) => {
    const query = `mutation createMeetup(
      $topic: String!,
      $mentorId: ID!,
      $date: String!,
      $time: String!,
      $lat: Float!,
      $lng: Float!,
      $detailPlace: String!
    ) {
      createMeetup(
        meetup: {
          topic: $topic,
          mentorId: $mentorId,
          date: $date,
          time: $time,
          lat: $lat,
          lng: $lng,
          detailPlace: $detailPlace
        }
      ) {
        _id,
        topic,
        mentorId,
        studentId,
        date,
        time,
        detailPlace,
        isConfirmed,
        isFinished,
        rating,
        review
      }
    }`
    request(query, input).then(data => {
      resolve(data.createMeetup)
    })
  })
}

const updateMeetup = input => {
  return new Promise((resolve, reject) => {
    const query = `mutation updateMeetup(
      $_id: ID!,
      $topic: String,
      $date: String,
      $time: String,
      $lat: Float,
      $lng: Float,
      $detailPlace: String,
      $isConfirmed: Boolean,
      $isFinished: Boolean,
      $rating: Int,
      $review: String
    ) {
      updateMeetup(
        _id: $_id,
        meetup: {
          topic: $topic,
          date: $date,
          time: $time,
          lat: $lat,
          lng: $lng,
          detailPlace: $detailPlace,
          isConfirmed: $isConfirmed,
          isFinished: $isFinished,
          rating: $rating,
          review: $review
        }
      ) {
        _id,
        topic,
        mentorId,
        studentId,
        date,
        time,
        detailPlace,
        isConfirmed,
        isFinished,
        rating,
        review
      }
    }`
    request(query, input).then(data => {
      resolve(data.updateMeetup)
    })
  })
}

request.meetups = meetups
request.meetup = meetup
request.createMeetup = createMeetup
request.updateMeetup = updateMeetup

export default request
