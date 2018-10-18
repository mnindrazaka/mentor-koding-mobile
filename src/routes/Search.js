import { createStackNavigator } from 'react-navigation'
import { Search, SearchResult } from 'scenes'

Search.navigationOptions = {
  header: null
}

SearchResult.navigationOptions = {
  header: null
}

export default createStackNavigator({
  Search,
  SearchResult
})
