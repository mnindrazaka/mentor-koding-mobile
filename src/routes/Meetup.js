import { createStackNavigator } from 'react-navigation'
import {
  MeetupList,
  MeetupDetail,
  MeetupReview,
  MeetupRequest,
  MeetupCreate
} from 'scenes'

MeetupList.navigationOptions = {
  header: null
}

MeetupDetail.navigationOptions = {
  header: null
}

MeetupReview.navigationOptions = {
  header: null
}

MeetupRequest.navigationOptions = {
  header: null
}

MeetupCreate.navigationOptions = {
  header: null
}

export default createStackNavigator({
  MeetupList,
  MeetupDetail,
  MeetupReview,
  MeetupRequest,
  MeetupCreate
})
