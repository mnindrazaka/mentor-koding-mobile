import { createStackNavigator } from 'react-navigation'
import MeetupList from '../scenes/MeetupList'
import MeetupDetail from '../scenes/MeetupDetail'

MeetupList.navigationOptions = {
  header: null
}

MeetupDetail.navigationOptions = {
  header: null
}

export default createStackNavigator({
  MeetupList,
  MeetupDetail
})
