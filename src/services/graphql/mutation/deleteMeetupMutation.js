import { gql } from 'apollo-boost'

export default gql`
  mutation DeleteMeetupMutation($_id: ID!) {
    deleteMeetup(_id: $_id) {
      topic
    }
  }
`
