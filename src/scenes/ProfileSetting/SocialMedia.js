import React, { Component } from 'react'
import { Content, Container, Text, Input, Textarea } from 'native-base'

import Item from '../../components/Item'
import TextIcon from '../../components/TextIcon'

class SocialMedia extends Component {
  render() {
    return (
      <Container marginTop={15}>
        <Content padder>
          <TextIcon icon={'github-circle'} text={'Github'} size={16} />
          <Item regular>
            <Input placeholder="Masukkan Username Github" />
          </Item>

          <TextIcon icon={'linkedin-box'} text={'Linkedin'} size={16} />
          <Item regular>
            <Input placeholder="Masukkan Username Linkedin" />
          </Item>

          <TextIcon icon={'facebook-box'} text={'Facebook'} size={16} />
          <Item regular>
            <Input placeholder="Masukkan Username Facebook" />
          </Item>

          <TextIcon icon={'instagram'} text={'Instagram'} size={16} />
          <Item regular>
            <Input placeholder="Masukkan Username Instagram" />
          </Item>
        </Content>
      </Container>
    )
  }
}

export default SocialMedia
