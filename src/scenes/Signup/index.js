import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { user } from 'services'
import { Content, Input, Text, Button, Container } from 'native-base'
import { Header, Item } from 'components'

class Signup extends Component {
  state = {
    input: {
      name: '',
      username: '',
      password: '',
      confirmPassword: '',
      address: '',
      phone: ''
    }
  }

  changeInput(value, name) {
    let input = this.state.input
    input[name] = value
    this.setState({ input })
  }

  register() {
    const query = `mutation createUser(
      $username: String!,
      $name: String!,
      $password: String!,
      $address: String!,
      $phone: String!
    )  {
      createUser(
        user: {
          username: $username,
          name: $name,
          password: $password,
          address: $address,
          phone: $phone     
        }
      ) {
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
    user(query, this.state.input).then(data => {
      AsyncStorage.setItem('profile', JSON.stringify(data.createUser))
      this.login()
    })
  }

  login() {
    const { username, password } = this.state.input
    const query = `mutation {
      login(username: "${username}", password: "${password}")
    }`
    user(query).then(data => {
      this.saveToken(data.login)
      this.setSkills()
    })
  }

  saveToken(token) {
    AsyncStorage.setItem('token', token).then(() => {
      this.props.navigation.navigate('Welcoming')
    })
  }

  setSkills() {
    const query = `{
      skills {
        id,
        keyName
      }
    }`
    user(query).then(data => {
      AsyncStorage.setItem('skills', JSON.stringify(data.skills))
    })
  }

  render() {
    return (
      <Container>
        <Header navigation={this.props.navigation} title={'Daftar'} />

        <Content padder>
          <Text>Nama</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Nama"
              value={this.state.input.name}
              onChangeText={text => this.changeInput(text, 'name')}
            />
          </Item>

          <Text>Username</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Username"
              value={this.state.input.username}
              onChangeText={text => this.changeInput(text, 'username')}
            />
          </Item>

          <Text>Password</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Password"
              secureTextEntry
              value={this.state.input.password}
              onChangeText={text => this.changeInput(text, 'password')}
            />
          </Item>

          <Text>Konfirmasi Password</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Password Kembali"
              secureTextEntry
              value={this.state.input.confirmPassword}
              onChangeText={text => this.changeInput(text, 'confirmPassword')}
            />
          </Item>

          <Text>Alamat</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Alamat"
              value={this.state.input.address}
              onChangeText={text => this.changeInput(text, 'address')}
            />
          </Item>

          <Text>Telepon</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Telepon"
              keyboardType={'numeric'}
              value={this.state.input.phone}
              onChangeText={text => this.changeInput(text, 'phone')}
            />
          </Item>
        </Content>
        <Button block success onPress={() => this.register()} borderRadius={0}>
          <Text>Daftar</Text>
        </Button>
      </Container>
    )
  }
}

export default Signup
