import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { user } from 'services'
import { Container, Content, H2, Text, View } from 'native-base'

import { InputAutocomplete } from 'components'

class Search extends Component {
  state = {
    availableSkills: [],
    inputSkill: ''
  }

  componentDidMount() {
    this.getSkills()
  }

  getSkills() {
    AsyncStorage.getItem('skills').then(value => {
      this.setState({ availableSkills: JSON.parse(value) })
    })
  }

  changeInputSkill(text) {
    this.setState({ inputSkill: text })
  }

  clearInputSkill() {
    this.setState({ inputSkill: '' })
  }

  getfilteredSkill() {
    const skills = this.state.availableSkills
      .filter(item => this.isSkillMatchInput(item.keyName))
      .slice(0, 3)
    return this.state.inputSkill === '' ? [] : skills
  }

  isSkillMatchInput(skill) {
    return skill.toLowerCase().includes(this.state.inputSkill.toLowerCase())
  }

  search(skill) {
    user.search({ skill }).then(data => {
      this.props.navigation.navigate('SearchResult', { result: data })
    })
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Content padder justifyContent={'center'}>
          <View alignItems={'center'} marginBottom={30}>
            <H2>Temukan Mentormu</H2>
            <Text style={{ textAlign: 'center' }}>
              Mentor dapat membantu anda mempelajari topik pemrograman yang
              ingin dipelajari
            </Text>
          </View>

          <InputAutocomplete
            data={this.getfilteredSkill()}
            placeholder="Topik yang ingin dipelajari"
            value={this.state.inputSkill}
            onChangeText={text => this.changeInputSkill(text)}
            onItemPress={item => {
              this.search(item.keyName)
              this.clearInputSkill()
            }}
          />
        </Content>
      </Container>
    )
  }
}

export default Search
