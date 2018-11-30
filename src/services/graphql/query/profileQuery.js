import { gql } from 'apollo-boost'

export default gql`
  query profileQuery {
    profile {
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
