import loginQuery from './query/loginQuery'
import meetupQuery from './query/meetupQuery'
import meetupsQuery from './query/meetupsQuery'
import profileQuery from './query/profileQuery'
import searchQuery from './query/searchQuery'
import skillsQuery from './query/skillsQuery'
import userQuery from './query/userQuery'
import usersQuery from './query/usersQuery'

import createMeetupMutation from './mutation/createMeetupMutation'
import createUserMutation from './mutation/createUserMutation'
import deleteUserMutation from './mutation/deleteUserMutation'
import updateUserMutation from './mutation/updateUserMutation'
import updateMeetupMutation from './mutation/updateMeetupMutation'

import client from './client'

export {
  loginQuery,
  meetupQuery,
  meetupsQuery,
  profileQuery,
  searchQuery,
  skillsQuery,
  userQuery,
  usersQuery,
  createMeetupMutation,
  createUserMutation,
  deleteUserMutation,
  updateUserMutation,
  updateMeetupMutation,
  client
}
