import React, { Component } from 'react'
import { AsyncStorage, TouchableOpacity } from 'react-native'
import {
  Content,
  Input,
  Text,
  Button,
  Container,
  View,
  Icon
} from 'native-base'

import styled from 'styled-components/native'
import { Item, InputAutocomplete } from 'components'

class Skill extends Component {
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
      .filter(
        item =>
          this.isSkillMatchInput(item.keyName) &&
          !this.isSkillAlreadyAdded(item.keyName)
      )
      .slice(0, 3)
    return this.state.inputSkill === '' ? [] : skills
  }

  isSkillMatchInput(skill) {
    return skill.toLowerCase().includes(this.state.inputSkill.toLowerCase())
  }

  isSkillAlreadyAdded(skill) {
    return this.props.skills.indexOf(skill) > -1
  }

  renderItems() {
    return this.props.skills.map((item, index) => (
      <Wrapper key={index}>
        <View
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Text>{item}</Text>
          <Button
            danger
            bordered
            small
            onPress={() => this.props.onRemoveSkill(item)}>
            <Icon name={'close'} />
          </Button>
        </View>
      </Wrapper>
    ))
  }

  render() {
    console.log(this.state.availableSkills)
    return (
      <Container>
        <View padding={15}>
          <InputAutocomplete
            data={this.getfilteredSkill()}
            placeholder="Masukkan keahlian yang dikuasai"
            value={this.state.inputSkill}
            onChangeText={text => this.changeInputSkill(text)}
            onItemPress={item => {
              this.props.onAddSkill(item.keyName)
              this.clearInputSkill()
            }}
          />
        </View>

        <Content padder>{this.renderItems()}</Content>
      </Container>
    )
  }
}

const Wrapper = styled.View`
  border: solid 2px #e1e1e1;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
`

const AutocompleteWrapper = styled.View`
  flex: 1;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  position: absolute;
`

export default Skill
