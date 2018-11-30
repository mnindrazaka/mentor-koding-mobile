import { gql } from 'apollo-boost'

export default gql`
  mutation updateMeetupMutation($meetup: MeetupUpdate!, $_id: ID!) {
    updateMeetup(meetup: $meetup, _id: $_id) {
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
