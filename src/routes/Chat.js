import { createStackNavigator } from 'react-navigation'
import { ChatList, ChatRoom } from 'scenes'

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
