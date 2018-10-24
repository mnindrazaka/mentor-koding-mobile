import React, { Component } from 'react'
import { Content, Container } from 'native-base'

import ListIcon from './ListIcon'
import styled from 'styled-components/native'

class SocialMedia extends Component {
  render() {
    const { profile } = this.props
    return (
      <Container marginTop={15}>
        <Title>Media Sosial</Title>
        <Content>
          <ListIcon
            text={profile.socialMedia.github}
            label={'Github'}
            icon={'github-circle'}
          />

          <ListIcon
            text={profile.socialMedia.linkedin}
            label={'Linkedin'}
            icon={'linkedin-box'}
          />

          <ListIcon
            text={profile.socialMedia.facebook}
            label={'Facebook'}
            icon={'facebook-box'}
          />

          <ListIcon
            text={profile.socialMedia.instagram}
            label={'Instagram'}
            icon={'instagram'}
          />
        </Content>
      </Container>
    )
  }
}

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`

export default SocialMedia
