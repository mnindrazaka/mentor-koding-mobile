import { gql } from 'apollo-boost'

export default gql`
  query loginQuery($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`
