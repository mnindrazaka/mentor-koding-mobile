import React, { Component } from 'react'
import styled from 'styled-components/native'
import { Input, Button, Icon, Item } from 'native-base'

class ChatInput extends Component {
  render() {
    return (
      <Wrapper>
        <CustomItem regular>
          <Input placeholder={'Ketik Pesan Anda'} />
        </CustomItem>
        <SendButton rounded>
          <Icon name={'send'} style={{ fontSize: 20 }} />
        </SendButton>
      </Wrapper>
    )
  }
}

const Wrapper = styled.View`
  border-top-color: #ececec;
  border-top-width: 1px;
  border-style: solid;
  justify-content: space-around;
  padding: 15px;
  flex-direction: row;
`

const CustomItem = styled(Item)`
  flex: 1;
  margin-right: 5px;
`

const SendButton = styled(Button)`
  width: 50px;
  height: 50px;
`

export default ChatInput
