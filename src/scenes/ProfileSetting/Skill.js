import React, { Component } from 'react'
import { Content, Text, Button, Container, View, Icon } from 'native-base'

import styled from 'styled-components/native'
import { InputAutocomplete, Loading } from 'components'

import { Query } from 'react-apollo'
import { skillsQuery } from 'services/graphql'

class Skill extends Component {
  renderItems() {
    return this.props.skills.map((item, index) => (
      <Wrapper key={index}>
        <View
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Text>{item}</Text>
          <Button
            danger
            bordered
            small
            onPress={() => this.props.onRemoveSkill(item)}>
            <Icon name={'close'} />
          </Button>
        </View>
      </Wrapper>
    ))
  }

  render() {
    return (
      <Query query={skillsQuery}>
        {({ loading, error, data }) => (
          <Loading loading={loading} error={error}>
            <Container>
              <View padding={15}>
                <InputAutocomplete
                  data={data.skills}
                  placeholder='Masukkan keahlian yang dikuasai'
                  onItemPress={item => this.props.onAddSkill(item)}
                />
              </View>
              <Content padder>{this.renderItems()}</Content>
            </Container>
          </Loading>
        )}
      </Query>
    )
  }
}

const Wrapper = styled.View`
  border: solid 2px #e1e1e1;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
`

export default Skill
