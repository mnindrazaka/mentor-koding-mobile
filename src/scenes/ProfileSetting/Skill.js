import React, { Component } from 'react'
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

import Item from 'components/Item'

class Skill extends Component {
  state = {
    inputSkill: '',
    skills: []
  }

  changeInputSkill(text) {
    this.setState({ inputSkill: text })
  }

  clearInputSkill() {
    this.setState({ inputSkill: '' })
  }

  addSkill() {
    let skills = this.state.skills
    skills.push(this.state.inputSkill)
    this.setState({ skills }, () => this.clearInputSkill())
  }

  removeSkill(skill) {
    let skills = this.state.skills.filter(item => item !== skill)
    this.setState({ skills })
  }

  renderItems() {
    return this.state.skills.map((item, index) => (
      <Wrapper key={index}>
        <View
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Text>{item}</Text>
          <Button danger bordered small onPress={() => this.removeSkill(item)}>
            <Icon name={'close'} />
          </Button>
        </View>
      </Wrapper>
    ))
  }

  render() {
    return (
      <Container>
        <View padding={15}>
          <View marginBottom={15}>
            <Text>Pilih Keahlian Yang Anda Kuasai</Text>
            <Text note>
              Masukkan keahlian yang anda kuasai sehingga pengguna lain dapat
              belajar kepada anda, lewati jika anda tidak ingin menjadi mentor
            </Text>
          </View>

          <Item regular>
            <Input
              placeholder="Masukkan keahlian yang dikuasai"
              value={this.state.inputSkill}
              onChangeText={text => this.changeInputSkill(text)}
            />
          </Item>

          <Button block onPress={() => this.addSkill()}>
            <Text>Tambahkan Keahlian</Text>
          </Button>
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

export default Skill
