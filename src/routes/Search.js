import { createStackNavigator } from 'react-navigation'
import { Search, SearchResult, SearchDetail } from 'scenes'

Search.navigationOptions = {
  header: null
}

SearchResult.navigationOptions = {
  header: null
}

SearchDetail.navigationOptions = {
  header: null
}

export default createStackNavigator({
  Search,
  SearchResult,
  SearchDetail
})
