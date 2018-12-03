import React, { Component } from 'react'
import { Content, Text, Button, Container, View, Icon } from 'native-base'

import styled from 'styled-components/native'
import { InputAutocomplete } from 'components'

import { Query } from 'react-apollo'
import { skillsQuery } from 'services/graphql'

class Skill extends Component {
  state = {
    inputSkill: ''
  }

  changeInputSkill(text) {
    this.setState({ inputSkill: text })
  }

  clearInputSkill() {
    this.setState({ inputSkill: '' })
  }

  getfilteredSkill(availableSkills) {
    const skills = availableSkills
      .filter(
        skill =>
          this.isSkillMatchInput(skill) && !this.isSkillAlreadyAdded(skill)
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
    return (
      <Query query={skillsQuery}>
        {({ loading, error, data }) => {
          if (loading) return null
          return (
            <Container>
              <View padding={15}>
                <InputAutocomplete
                  data={this.getfilteredSkill(data.skills)}
                  placeholder='Masukkan keahlian yang dikuasai'
                  value={this.state.inputSkill}
                  onChangeText={text => this.changeInputSkill(text)}
                  onItemPress={item => {
                    this.props.onAddSkill(item)
                    this.clearInputSkill()
                  }}
                />
              </View>
              <Content padder>{this.renderItems()}</Content>
            </Container>
          )
        }}
      </Query>
    )
  }
}

const Wrapper = styled.View`
  border: solid 2px #e1e1e1;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
`

export default Skill
