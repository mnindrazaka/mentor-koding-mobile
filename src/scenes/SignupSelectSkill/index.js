import React, { Component } from 'react'
import { ToastAndroid, AsyncStorage } from 'react-native'
import {
  Content,
  Input,
  Text,
  Button,
  Container,
  View,
  Icon
} from 'native-base'
import { user } from 'services'

import styled from 'styled-components/native'
import { Header, InputAutocomplete } from 'components'

class SignupSelectSkill extends Component {
  state = {
    availableSkills: [],
    inputSkill: '',
    skills: [],
    isMentor: false
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

  addSkill(skill) {
    let skills = this.state.skills

    if (this.isSkillValid(skill)) {
      skills.push(skill)
      this.setState({ skills })
    } else {
      ToastAndroid.show('Keahlian sudah ada', ToastAndroid.LONG)
    }
  }

  removeSkill(skill) {
    let skills = this.state.skills.filter(item => item !== skill)
    this.setState({ skills })
  }

  isSkillValid(skill) {
    return this.state.skills.indexOf(skill) === -1
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
    return this.state.skills.indexOf(skill) > -1
  }

  submit() {
    const query = `mutation updateUser(
      $skills: [String]
    )  {
      updateUser(
        user: {
          skills: $skills
        }
      ) { _id } 
    }`
    user(query, this.state).then(data => {
      this.setProfile()
    })
  }

  setProfile() {
    const query = `{
      myProfile {
        _id,
        name,
        profilePic,
        email,
        description,
        address,
        phone,
        job,
        isMentor,
        socialMedia {
          github,
          linkedin,
          facebook,
          instagram
        },
        education,
        skills
      }
    }`
    user(query).then(data => {
      AsyncStorage.setItem('profile', JSON.stringify(data.myProfile)).then(
        () => {
          this.props.navigation.navigate('Main')
        }
      )
    })
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
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Header navigation={this.props.navigation} title={'Keahlian Anda'} />

        <View padding={15}>
          <View marginBottom={15}>
            <Text>Pilih Keahlian Yang Anda Kuasai</Text>
            <Text note>
              Masukkan keahlian yang anda kuasai sehingga pengguna lain dapat
              belajar kepada anda, lewati jika anda tidak ingin menjadi mentor
            </Text>
          </View>

          <InputAutocomplete
            data={this.getfilteredSkill()}
            placeholder="Masukkan keahlian yang dikuasai"
            value={this.state.inputSkill}
            onChangeText={text => this.changeInputSkill(text)}
            onItemPress={item => {
              this.addSkill(item.keyName)
              this.clearInputSkill()
            }}
          />
        </View>

        <Content padder>{this.renderItems()}</Content>

        <View flexDirection={'row'}>
          <Button
            success
            block
            flex={1}
            borderRadius={0}
            onPress={() => this.submit()}>
            <Text>Simpan</Text>
          </Button>

          <Button
            danger
            bordered
            block
            flex={1}
            borderRadius={0}
            onPress={() => navigate('Main')}>
            <Text>Lewati</Text>
          </Button>
        </View>
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

export default SignupSelectSkill
