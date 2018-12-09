import React, { Component } from 'react'
import { ToastAndroid } from 'react-native'
import { Content, Text, Button, Container, View, Icon } from 'native-base'

import styled from 'styled-components/native'
import { Header, InputAutocomplete, Loading } from 'components'

import { Query, ApolloConsumer } from 'react-apollo'
import { skillsQuery, updateUserMutation } from '../../services/graphql'

class SignupSelectSkill extends Component {
  state = {
    skills: []
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

  submit(client) {
    let user = this.state
    user.isMentor = user.skills.length > 0
    delete user.inputSkill
    client
      .mutate({ mutation: updateUserMutation, variables: { user } })
      .then(() => this.props.navigation.navigate('Main'))
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
      <Query query={skillsQuery}>
        {({ loading, error, data }) => (
          <Loading loading={loading} error={error}>
            <Container>
              <Header
                navigation={this.props.navigation}
                title={'Keahlian Anda'}
              />

              <View padding={15}>
                <View marginBottom={15}>
                  <Text>Pilih Keahlian Yang Anda Kuasai</Text>
                  <Text note>
                    Masukkan keahlian yang anda kuasai sehingga pengguna lain
                    dapat belajar kepada anda, lewati jika anda tidak ingin
                    menjadi mentor
                  </Text>
                </View>

                <InputAutocomplete
                  data={data.skills}
                  placeholder='Masukkan keahlian yang dikuasai'
                  onItemPress={item => this.addSkill(item)}
                />
              </View>

              <Content padder>{this.renderItems()}</Content>

              <View flexDirection={'row'}>
                <ApolloConsumer>
                  {client => (
                    <Button
                      success
                      block
                      flex={1}
                      borderRadius={0}
                      onPress={() => this.submit(client)}>
                      <Text>Simpan</Text>
                    </Button>
                  )}
                </ApolloConsumer>

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
          </Loading>
        )}
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

export default SignupSelectSkill
