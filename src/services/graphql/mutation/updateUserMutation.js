import { gql } from 'apollo-boost'

export default gql`
  mutation updateUserMutation($user: UserUpdate!) {
    updateUser(user: $user) {
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
