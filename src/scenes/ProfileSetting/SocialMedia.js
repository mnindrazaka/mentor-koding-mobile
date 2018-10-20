import React, { Component } from 'react'
import { Content, Container, Input } from 'native-base'

import { Item, TextIcon } from 'components'

class SocialMedia extends Component {
  state = {
    input: {
      github: '',
      linkedin: '',
      facebook: '',
      instagram: ''
    }
  }

  changeInput(value, name) {
    let input = this.state.input
    input[name] = value
    this.setState({ input })
  }

  render() {
    return (
      <Container>
        <Content padder>
          <TextIcon icon={'github-circle'} text={'Github'} size={16} />
          <Item regular>
            <Input
              placeholder="Masukkan Username Github"
              value={this.props.input.github}
              onChangeText={text => this.props.onChange('github', text)}
            />
          </Item>

          <TextIcon icon={'linkedin-box'} text={'Linkedin'} size={16} />
          <Item regular>
            <Input
              placeholder="Masukkan Username Linkedin"
              value={this.props.input.linkedin}
              onChangeText={text => this.props.onChange('linkedin', text)}
            />
          </Item>

          <TextIcon icon={'facebook-box'} text={'Facebook'} size={16} />
          <Item regular>
            <Input
              placeholder="Masukkan Username Facebook"
              value={this.props.input.facebook}
              onChangeText={text => this.props.onChange('facebook', text)}
            />
          </Item>

          <TextIcon icon={'instagram'} text={'Instagram'} size={16} />
          <Item regular>
            <Input
              placeholder="Masukkan Username Instagram"
              value={this.props.input.instagram}
              onChangeText={text => this.props.onChange('instagram', text)}
            />
          </Item>
        </Content>
      </Container>
    )
  }
}

export default SocialMedia
