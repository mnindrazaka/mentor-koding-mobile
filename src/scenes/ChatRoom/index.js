import React, { Component } from 'react'
import { Container, Content, Button, Icon } from 'native-base'

import Header from '../../components/Header'
import ChatBalloon from './ChatBalloon'
import ChatInput from './ChatInput'

class ChatRoom extends Component {
  state = {
    data: [
      {
        message:
          'lorem ipsum dolor sit amet proteus dolor ima tokino tameni, sasageyo sasageyo',
        time: '3:43 AM',
        mine: false
      },
      {
        message: 'lorem ipsum dolor sit amet',
        time: '3:43 AM',
        mine: true
      },
      {
        message: 'lorem ipsum dolor sit amet',
        time: '3:43 AM',
        mine: false
      },
      {
        message: 'lorem ipsum dolor sit amet',
        time: '3:43 AM',
        mine: false
      },
      {
        message: 'lorem ipsum dolor sit amet',
        time: '3:43 AM',
        mine: true
      }
    ]
  }

  renderChats() {
    return this.state.data.map((item, index) => (
      <ChatBalloon message={item.message} time={item.time} mine={item.mine} />
    ))
  }

  render() {
    return (
      <Container>
        <Header
          title={'Nama Mentor'}
          navigation={this.props.navigation}
          rightComponent={
            <Button transparent>
              <Icon name={'account'} />
            </Button>
          }
        />
        <Content padder>{this.renderChats()}</Content>
        <ChatInput />
      </Container>
    )
  }
}

export default ChatRoom
