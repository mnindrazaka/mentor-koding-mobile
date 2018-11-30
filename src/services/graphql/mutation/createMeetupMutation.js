import { gql } from 'apollo-boost'

export default gql`
  mutation createMeetupMutation($meetup: MeetupInput!) {
    createMeetup(meetup: $meetup) {
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
