import React, { Component } from 'react'
import { Content, Input, Text, Button, Container, View } from 'native-base'
import { Header, Item, TextIcon } from 'components'

import { ApolloConsumer } from 'react-apollo'
import { updateUserMutation } from '../../services/graphql'

class SignupSocialMedia extends Component {
  state = {
    input: {
      socialMedia: {
        github: '',
        linkedin: '',
        facebook: '',
        instagram: ''
      }
    }
  }

  changeInput(value, name) {
    let input = this.state.input
    input.socialMedia[name] = value
    this.setState({ input })
  }

  submit(client) {
    client
      .mutate({
        mutation: updateUserMutation,
        variables: { user: this.state.input }
      })
      .then(() => this.props.navigation.navigate('SignupSelectSkill'))
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <ApolloConsumer>
        {client => (
          <Container>
            <Header navigation={this.props.navigation} title={'Media Sosial'} />

            <Content padder>
              <TextIcon icon={'github-circle'} text={'Github'} size={16} />
              <Item regular>
                <Input
                  placeholder='Masukkan Username Github'
                  value={this.state.input.socialMedia.github}
                  onChangeText={text => this.changeInput(text, 'github')}
                />
              </Item>

              <TextIcon icon={'linkedin-box'} text={'Linkedin'} size={16} />
              <Item regular>
                <Input
                  placeholder='Masukkan Username Linkedin'
                  value={this.state.input.socialMedia.linkedin}
                  onChangeText={text => this.changeInput(text, 'linkedin')}
                />
              </Item>

              <TextIcon icon={'facebook-box'} text={'Facebook'} size={16} />
              <Item regular>
                <Input
                  placeholder='Masukkan Username Facebook'
                  value={this.state.input.socialMedia.facebook}
                  onChangeText={text => this.changeInput(text, 'facebook')}
                />
              </Item>

              <TextIcon icon={'instagram'} text={'Instagram'} size={16} />
              <Item regular>
                <Input
                  placeholder='Masukkan Username Instagram'
                  value={this.state.input.socialMedia.instagram}
                  onChangeText={text => this.changeInput(text, 'instagram')}
                />
              </Item>

              <View flexDirection={'row'} justifyContent={'space-between'}>
                <Button success block onPress={() => this.submit(client)}>
                  <Text>Simpan</Text>
                </Button>

                <Button
                  danger
                  bordered
                  block
                  onPress={() => navigate('SignupSelectSkill')}>
                  <Text>Lewati</Text>
                </Button>
              </View>
            </Content>
          </Container>
        )}
      </ApolloConsumer>
    )
  }
}

export default SignupSocialMedia
