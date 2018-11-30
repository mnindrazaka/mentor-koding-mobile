import { gql } from 'apollo-boost'

export default gql`
  query meetupsQuery($isConfirmed: Boolean!) {
    meetups(isConfirmed: $isConfirmed) {
      _id
      topic
      mentor {
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
      student {
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
      datetime
      lat
      lng
      detailPlace
      isConfirmed
      isFinished
      rating
      review
    }
  }
`
