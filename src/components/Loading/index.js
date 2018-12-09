import React, { Component } from 'react'
import { ToastAndroid } from 'react-native'

class Loading extends Component {
  render() {
    if (this.props.loading) {
      return null
    } else if (this.props.error) {
      ToastAndroid.show(this.props.error.message)
      return null
    } else {
      return this.props.children
    }
  }
}

export default Loading
