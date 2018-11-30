import { gql } from 'apollo-boost'

export default gql`
  mutation createUserMutation($user: UserInput!) {
    createUser(user: $user) {
      _id
      username
      name
      profilePic
      email
      description
      address
      phone
      job
      isMentor
      socialMedia {
        github
        linkedin
        facebook
        instagram
      }
      education
      skills
    }
  }
`
