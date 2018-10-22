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

const login = input => {
  return new Promise((resolve, reject) => {
    const query = `mutation login(
      $username: String!,
      $password: String!
    ) {
      login(
        username: $username,
        password: $password
      )
    }
    `
    user(query, input).then(data => {
      resolve(data.login)
    })
  })
}

const myProfile = () => {
  return new Promise((resolve, reject) => {
    const query = `{
      myProfile {
        _id,
        name,
        profilePic,
        email,
        description,
        address,
        phone,
        job,
        isMentor,
        socialMedia {
          github,
          linkedin,
          facebook,
          instagram
        },
        education,
        skills
      }
    }`
    user(query).then(data => {
      resolve(data.myProfile)
    })
  })
}

const createUser = input => {
  return new Promise((resolve, reject) => {
    const query = `mutation createUser(
      $username: String!,
      $name: String!,
      $password: String!,
      $address: String!,
      $phone: String!
    )  {
      createUser(
        user: {
          username: $username,
          name: $name,
          password: $password,
          address: $address,
          phone: $phone     
        }
      ) {
        _id,
        name,
        profilePic,
        email,
        description,
        address,
        phone,
        job,
        isMentor,
        socialMedia {
          github,
          linkedin,
          facebook,
          instagram
        },
        education,
        skills
      } 
    }`
    user(query, input).then(data => {
      resolve(data.createUser)
    })
  })
}

const updateUser = input => {
  return new Promise((resolve, reject) => {
    const query = `mutation updateUser(
      $name: String,
      $address: String,
      $phone: String,
      $education: String,
      $job: String,
      $description: String,
      $isMentor: Boolean,
      $skills: [String],
      $socialMedia: SocialMediaInput
    )  {
      updateUser(
        user: {
          name: $name,     
          address: $address,     
          phone: $phone,     
          education: $education,     
          job: $job,     
          description: $description,     
          isMentor: $isMentor,
          skills: $skills,
          socialMedia: $socialMedia
        }
      ) { _id } 
    }`

    user(query, input).then(data => {
      resolve(data.updateUser)
    })
  })
}

const skills = () => {
  return new Promise((resolve, reject) => {
    const query = `{
      skills {
        id,
        keyName
      }
    }`
    user(query).then(data => {
      resolve(data.skills)
    })
  })
}

user.login = login
user.create = createUser
user.update = updateUser
user.profile = myProfile
user.skills = skills
export default user
