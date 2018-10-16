import React, { Component } from 'react'
import {
  Container,
  Tabs,
  ScrollableTab,
  Tab,
  Text,
  TabHeading,
  Button
} from 'native-base'

import Header from '../../components/Header'
import material from '../../../native-base-theme/variables/material'

import ProfileInfo from './ProfileInfo'
import Skill from './Skill'
import MentorSetting from './MentorSetting'
import SocialMedia from './SocialMedia'

class ProfileSettings extends Component {
  render() {
    return (
      <Container>
        <Header
          title={'Pengaturan Profil'}
          navigation={this.props.navigation}
        />

        <Tabs renderTabBar={() => <ScrollableTab />} style={{ marginTop: -15 }}>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: material.brandPrimary }}>
                <Text>Informasi Profil</Text>
              </TabHeading>
            }>
            <ProfileInfo />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: material.brandPrimary }}>
                <Text>Kemampuan</Text>
              </TabHeading>
            }>
            <Skill />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: material.brandPrimary }}>
                <Text>Pengaturan Mentor</Text>
              </TabHeading>
            }>
            <MentorSetting />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: material.brandPrimary }}>
                <Text>Media Sosial</Text>
              </TabHeading>
            }>
            <SocialMedia />
          </Tab>
        </Tabs>

        <Button block success borderRadius={0}>
          <Text>Simpan</Text>
        </Button>
      </Container>
    )
  }
}

export default ProfileSettings
