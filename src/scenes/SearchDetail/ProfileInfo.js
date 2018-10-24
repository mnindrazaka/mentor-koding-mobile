import React, { Component } from 'react'
import {
  Content,
  Text,
  ListItem,
  Left,
  Icon,
  Body,
  Container
} from 'native-base'

import ListIcon from './ListIcon'
import styled from 'styled-components/native'

class ProfileInfo extends Component {
  render() {
    const { profile } = this.props
    return (
      <Container marginTop={15}>
        <Title>Informasi Profil</Title>
        <Content>
          <ListIcon
            text={profile.address}
            label={'Alamat'}
            icon={'map-marker'}
          />

          <ListIcon
            text={profile.phone}
            label={'Telepon'}
            icon={'cellphone-iphone'}
          />

          <ListIcon text={profile.email} label={'Email'} icon={'email'} />

          <ListIcon
            text={profile.education}
            label={'Pendidikan Terakhir'}
            icon={'school'}
          />

          <ListIcon text={profile.job} label={'Pekerjaan'} icon={'briefcase'} />
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

export default ProfileInfo
