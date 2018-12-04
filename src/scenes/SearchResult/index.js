import React, { Component } from 'react'
import { Container, Content, List } from 'native-base'
import { Header, InputAutocomplete } from 'components'
import ListItem from './ListItem'

import { Query, ApolloConsumer } from 'react-apollo'
import { skillsQuery, searchQuery } from '../../services/graphql'

class SearchResult extends Component {
  state = {
    availableSkills: [],
    inputSkill: '',
    result: []
  }

  componentDidMount() {
    this.setResult(this.props.navigation.getParam('result'))
  }

  setResult(result) {
    this.setState({ result })
  }

  changeInputSkill(text) {
    this.setState({ inputSkill: text })
  }

  clearInputSkill() {
    this.setState({ inputSkill: '' })
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
        {({ loading, error, data }) => {
          if (loading) return null
          return (
            <Container>
              <Header
                title={'Hasil Pencarian'}
                navigation={this.props.navigation}
              />
              <Content padder>
                <ApolloConsumer>
                  {client => (
                    <InputAutocomplete
                      data={this.getfilteredSkill(data.skills)}
                      placeholder='Topik yang ingin dipelajari'
                      value={this.state.inputSkill}
                      onChangeText={text => this.changeInputSkill(text)}
                      onItemPress={item => {
                        this.search(client, item)
                        this.clearInputSkill()
                      }}
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
          )
        }}
      </Query>
    )
  }
}

export default SearchResult
