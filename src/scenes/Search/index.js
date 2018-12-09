import React, { Component } from 'react'
import { Container, Content, H2, Text, View } from 'native-base'
import { InputAutocomplete, Loading } from 'components'

import { Query, ApolloConsumer } from 'react-apollo'
import { searchQuery, skillsQuery } from '../../services/graphql'

class Search extends Component {
  async search(client, skill) {
    const { data } = await client.query({
      query: searchQuery,
      variables: { skill }
    })
    this.props.navigation.navigate('SearchResult', { result: data.search })
  }

  render() {
    return (
      <Query query={skillsQuery}>
        {({ loading, error, data }) => (
          <Loading loading={loading} error={error}>
            <Container>
              <Content padder justifyContent={'center'}>
                <View alignItems={'center'} marginBottom={30}>
                  <H2>Temukan Mentormu</H2>
                  <Text style={{ textAlign: 'center' }}>
                    Mentor dapat membantu anda mempelajari topik pemrograman
                    yang ingin dipelajari
                  </Text>
                </View>

                <ApolloConsumer>
                  {client => (
                    <InputAutocomplete
                      data={data.skills}
                      placeholder='Topik yang ingin dipelajari'
                      onItemPress={item => this.search(client, item)}
                    />
                  )}
                </ApolloConsumer>
              </Content>
            </Container>
          </Loading>
        )}
      </Query>
    )
  }
}

export default Search
