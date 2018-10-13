import { createStackNavigator } from 'react-navigation'
import Search from '../scenes/Search'
import SearchResult from '../scenes/SearchResult'

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
