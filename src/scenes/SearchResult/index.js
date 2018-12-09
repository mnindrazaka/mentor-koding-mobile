import React, { Component } from 'react'
import { Container, Content, List } from 'native-base'
import { Header, InputAutocomplete, Loading } from 'components'
import ListItem from './ListItem'

import { Query, ApolloConsumer } from 'react-apollo'
import { skillsQuery, searchQuery } from 'services/graphql'

class SearchResult extends Component {
  state = {
    result: []
  }

  componentDidMount() {
    this.setResult(this.props.navigation.getParam('result'))
  }

  setResult(result) {
    this.setState({ result })
  }

  async search(client, skill) {
    const { data } = await client.query({
      query: searchQuery,
      variables: { skill }
    })
    this.setResult(data.search)
  }

  renderRow(row) {
    return (
      <ListItem
        name={row.name}
        description={row.description}
        profilePic={row.profilePic}
        onPress={() => {
          this.props.navigation.navigate('SearchDetail', { profile: row })
        }}
      />
    )
  }

  render() {
    return (
      <Query query={skillsQuery}>
        {({ loading, error, data }) => (
          <Loading loading={loading} error={error}>
            <Container>
              <Header
                title={'Hasil Pencarian'}
                navigation={this.props.navigation}
              />
              <Content padder>
                <ApolloConsumer>
                  {client => (
                    <InputAutocomplete
                      data={data.skills}
                      placeholder='Topik yang ingin dipelajari'
                      onItemPress={item => this.search(client, item)}
                    />
                  )}
                </ApolloConsumer>
                <List
                  style={{ marginTop: 15 }}
                  dataArray={this.state.result}
                  renderRow={row => this.renderRow(row)}
                />
              </Content>
            </Container>
          </Loading>
        )}
      </Query>
    )
  }
}

export default SearchResult
