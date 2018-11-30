import { gql } from 'apollo-boost'

export default gql`
  query userQuery($_id: ID!) {
    user(_id: $_id) {
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
