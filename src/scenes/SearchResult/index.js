import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { user } from 'services'
import { Container, Content, List } from 'native-base'
import { Header, InputAutocomplete } from 'components'
import ListItem from './ListItem'

class SearchResult extends Component {
  state = {
    availableSkills: [],
    inputSkill: '',
    result: []
  }

  componentDidMount() {
    this.setResult(this.props.navigation.getParam('result'))
    this.getSkills()
  }

  setResult(result) {
    this.setState({ result })
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
      this.setResult(data)
    })
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
      <Container>
        <Header title={'Hasil Pencarian'} navigation={this.props.navigation} />
        <Content padder>
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

          <List
            style={{ marginTop: 15 }}
            dataArray={this.state.result}
            renderRow={row => this.renderRow(row)}
          />
        </Content>
      </Container>
    )
  }
}

export default SearchResult
