import React, { Component } from 'react'
import { Thumbnail } from 'native-base'
import styled from 'styled-components'

class Photo extends Component {
  render() {
    return (
      <StyledThumbnail
        large={this.props.large}
        source={{
          uri: this.props.uri
            ? this.props.uri
            : 'http://www.buckinghamandcompany.com.au/wp-content/uploads/2016/03/profile-placeholder.png'
        }}
      />
    )
  }
}

const StyledThumbnail = styled(Thumbnail)`
  ${props => (props.large ? 'width: 100px;' : '')}
  ${props => (props.large ? 'height: 100px;' : '')}
  border-width: 2px;
  border-color: white;
  border-radius: 50px;
`

export default Photo
