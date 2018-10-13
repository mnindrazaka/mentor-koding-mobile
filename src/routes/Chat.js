import { createStackNavigator } from 'react-navigation'
import ChatList from '../scenes/ChatList'
import ChatRoom from '../scenes/ChatRoom'

ChatList.navigationOptions = {
  header: null
}

ChatRoom.navigationOptions = {
  header: null
}

export default createStackNavigator({
  ChatList,
  ChatRoom
})
