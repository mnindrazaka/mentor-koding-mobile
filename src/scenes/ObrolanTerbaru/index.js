import React, { Component } from 'react'
import { Container, Content, List } from 'native-base'

import Obrolan from './Obrolan'

class ObrolanTerbaru extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <List>
            <Obrolan name={'Nama Mentor'} message={'Lorem ipsum dolor sit amet'} time={'3:43 PM'} imageURL={'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'} />
            <Obrolan name={'Nama Mentor'} message={'Lorem ipsum dolor sit amet'} time={'3:43 PM'} imageURL={'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'}  />
            <Obrolan name={'Nama Mentor'} message={'Lorem ipsum dolor sit amet'} time={'3:43 PM'} imageURL={'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'}  />
            <Obrolan name={'Nama Mentor'} message={'Lorem ipsum dolor sit amet'} time={'3:43 PM'} imageURL={'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'}  />
            <Obrolan name={'Nama Mentor'} message={'Lorem ipsum dolor sit amet'} time={'3:43 PM'} imageURL={'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'}  />
            <Obrolan name={'Nama Mentor'} message={'Lorem ipsum dolor sit amet'} time={'3:43 PM'} imageURL={'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'}  />
          </List>
        </Content>
      </Container>
    )
  }
}

ObrolanTerbaru.navigationOptions = {
  title: 'Obrolan'
}

export default ObrolanTerbaru
