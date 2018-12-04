import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { user } from 'services'
import { Container, Content, H2, Text, View } from 'native-base'

import { InputAutocomplete } from 'components'

import { Query, ApolloConsumer } from 'react-apollo'
import { searchQuery, skillsQuery } from '../../services/graphql'

class Search extends Component {
  state = {
    inputSkill: ''
  }

  changeInputSkill(text) {
    this.setState({ inputSkill: text })
  }

  getfilteredSkill(availableSkills) {
    const skills = availableSkills
      .filter(skill => this.isSkillMatchInput(skill))
      .slice(0, 3)
    return this.state.inputSkill === '' ? [] : skills
  }

  isSkillMatchInput(skill) {
    return skill.toLowerCase().includes(this.state.inputSkill.toLowerCase())
  }

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
        {({ loading, error, data }) => {
          if (loading) return null
          return (
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
                      data={this.getfilteredSkill(data.skills)}
                      placeholder='Topik yang ingin dipelajari'
                      value={this.state.inputSkill}
                      onChangeText={text => this.changeInputSkill(text)}
                      onItemPress={item => this.search(client, item)}
                    />
                  )}
                </ApolloConsumer>
              </Content>
            </Container>
          )
        }}
      </Query>
    )
  }
}

export default Search
