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

import styled from 'styled-components/native'

class ProfileInfo extends Component {
  render() {
    return (
      <Container marginTop={15}>
        <Title>Informasi Profil</Title>
        <Content>
          <ListItem icon marginBottom={15}>
            <Left>
              <Icon name={'map-marker'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Text>Alamat</Text>
              <Text note>JL Soekarno Hatta</Text>
            </Body>
          </ListItem>

          <ListItem icon marginBottom={15}>
            <Left>
              <Icon name={'cellphone-iphone'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Text>Telepon</Text>
              <Text note>085331247098</Text>
            </Body>
          </ListItem>

          <ListItem icon marginBottom={15}>
            <Left>
              <Icon name={'school'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Text>Pendidikan Terakhir</Text>
              <Text note>Politeknik Negeri Malang</Text>
            </Body>
          </ListItem>

          <ListItem icon marginBottom={15}>
            <Left>
              <Icon name={'briefcase'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Text>Pekerjaan</Text>
              <Text note>Frontend Developer di Workshop Riset Informatika</Text>
            </Body>
          </ListItem>
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
