import React, { Component } from 'react'
import { Container, Content } from 'native-base'

import Header from '../../components/Header'
import Pesan from './Pesan'

class Obrolan extends Component {
  state = {}

  render() {
    return (
      <Container>
        <Header title={'Nama Mentor'} navigation={this.props.navigation} />
        <Content padder>
          <Pesan mine />
          <Pesan />
          <Pesan />
          <Pesan mine />
          <Pesan mine />
          <Pesan mine />
          <Pesan mine />
          <Pesan mine />
          <Pesan mine />
        </Content>
      </Container>
    )
  }
}

Obrolan.navigationOptions = {
  header: null
}

export default Obrolan
