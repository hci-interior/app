import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Platform,
  RefreshControl,
  Switch,
} from 'react-native'
import Colors from '../colors.js'
import Icon from 'react-native-vector-icons/FontAwesome';

import { SettingsScreen, SettingsData, Chevron } from 'react-native-settings-screen'

const fontFamily = Platform.OS === 'ios' ? 'Avenir' : 'sans-serif'

const renderHero = () => (
  <View style={styles.heroContainer}>
    <View style={{ flex: 1 }}>
      <Text style={styles.heroTitle}>Testuser*in</Text>
      <Text style={styles.heroSubtitle}>testuser@pexample.com</Text>
    </View>
    <Chevron />
  </View>
)

export default class OurSettingsScreen extends React.Component {
  state = {
    refreshing: false, 
  }

  settingsData: SettingsData = [
    { type: 'CUSTOM_VIEW', key: 'hero', render: renderHero },
    {
      type: 'SECTION',
      header: 'Account settings'.toUpperCase(),
      footer:
        'These settings have currently no effect.',
      rows: [
        {
          title: 'A row',
          showDisclosureIndicator: true,
        },
        { title: 'A non-tappable row' },
        {
          title: 'This row has a',
          subtitle: 'Subtitle',
          showDisclosureIndicator: true,
        },
        {
          title: 'Long title. So long long long long long long long',
          subtitle:
            'And so is the subtitle. Even longer longer longer longer longer',
        },
        {
          title: 'Switch',
          renderAccessory: () => <Switch value onValueChange={() => {}} />,
        },
        {
          title: 'Text',
          renderAccessory: () => (
            <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
              Maybe
            </Text>
          ),
        },
        {
          title: 'Custom view',
          renderAccessory: () => (
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "lightblue",
              }}
            />
          ),
          showDisclosureIndicator: true,
        },
      ],
    },
    {
      type: 'SECTION',
      header: 'App settings'.toUpperCase(),
      rows: [
        {
          title: 'Dolor Nullam',
          showDisclosureIndicator: true,
        },
        {
          title: 'Nulla vitae elit libero',
          renderAccessory: () => (
            <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
              Dapibus
            </Text>
          ),
        },
        {
          title: 'Enable automatic scan',
          subtitle: 'Affects battery lifetime',
          renderAccessory: () => (
            <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
              Yes
            </Text>
          ),
          showDisclosureIndicator: true,
        },
        {
          title: 'Sustainability mode',
          renderAccessory: () => (
            <Icon
              style={{ marginTop: 3, marginRight: 6 }}
              name="tree"
              size={32}
              color="black"
            />
          ),
          showDisclosureIndicator: true,
        },
      ],
    },
    {
      type: 'SECTION',
      header: 'Privacy settings'.toUpperCase(),
      rows: [
        {
          title: 'Privacy settings',
          showDisclosureIndicator: true,
          titleStyle: {
            color: 'red',
          },
        },
      ],
    },
    {
      type: 'CUSTOM_VIEW',
      render: () => (
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            color: '#999',
            marginBottom: 40,
            marginTop: -30,
            fontFamily,
          }}
        >
          v1.2.3
        </Text>
      ),
    },
  ]

  render() {
    return (
      <View style={styles.container}>
        <SettingsScreen
          data={this.settingsData}
          globalTextStyle={{ fontFamily }}
          scrollViewProps={{
            refreshControl: (
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => {
                  this.setState({ refreshing: true })
                  setTimeout(() => this.setState({ refreshing: false }), 3000)
                }}
              />
            ),
          }}
        />
      </View>
    )
  }
}

const statusBarHeight = Platform.OS === 'ios' ? 35 : 0

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroContainer: {
    marginTop: 40,
    marginBottom: 50,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    flexDirection: 'row',
  },
  heroTitle: {
    fontFamily,
    color: 'black',
    fontSize: 24,
  },
  heroSubtitle: {
    fontFamily,
    color: '#999',
    fontSize: 14,
  },
})