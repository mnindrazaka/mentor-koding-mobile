import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { user } from 'services'
import { Content, Input, Text, Button, Container, View } from 'native-base'
import { Header, Item, TextIcon } from 'components'

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

  submit() {
    const query = `mutation updateUser(
      $socialMedia: SocialMediaInput
    )  {
      updateUser(
        user: {
          socialMedia: $socialMedia
        }
      ) { _id } 
    }`
    user(query, this.state.input).then(data => {
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
          this.props.navigation.navigate('SignupSelectSkill')
        }
      )
    })
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Header navigation={this.props.navigation} title={'Media Sosial'} />

        <Content padder>
          <TextIcon icon={'github-circle'} text={'Github'} size={16} />
          <Item regular>
            <Input
              placeholder="Masukkan Username Github"
              value={this.state.input.socialMedia.github}
              onChangeText={text => this.changeInput(text, 'github')}
            />
          </Item>

          <TextIcon icon={'linkedin-box'} text={'Linkedin'} size={16} />
          <Item regular>
            <Input
              placeholder="Masukkan Username Linkedin"
              value={this.state.input.socialMedia.linkedin}
              onChangeText={text => this.changeInput(text, 'linkedin')}
            />
          </Item>

          <TextIcon icon={'facebook-box'} text={'Facebook'} size={16} />
          <Item regular>
            <Input
              placeholder="Masukkan Username Facebook"
              value={this.state.input.socialMedia.facebook}
              onChangeText={text => this.changeInput(text, 'facebook')}
            />
          </Item>

          <TextIcon icon={'instagram'} text={'Instagram'} size={16} />
          <Item regular>
            <Input
              placeholder="Masukkan Username Instagram"
              value={this.state.input.socialMedia.instagram}
              onChangeText={text => this.changeInput(text, 'instagram')}
            />
          </Item>

          <View flexDirection={'row'} justifyContent={'space-between'}>
            <Button success block onPress={() => this.submit()}>
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
    )
  }
}

export default SignupSocialMedia
