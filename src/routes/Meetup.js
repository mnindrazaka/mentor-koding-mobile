import { createStackNavigator } from 'react-navigation'
import MeetupList from '../scenes/MeetupList'
import MeetupDetail from '../scenes/MeetupDetail'
import MeetupReview from '../scenes/MeetupReview'
import MeetupRequest from '../scenes/MeetupRequest'

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

export default createStackNavigator({
  MeetupList,
  MeetupDetail,
  MeetupReview,
  MeetupRequest
})
