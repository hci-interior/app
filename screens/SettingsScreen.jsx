import * as React from 'react'
import {
  Text,
  View,
  RefreshControl,
  Switch,
  Platform,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../stylesheet';
import { SettingsScreen, SettingsData, Chevron } from 'react-native-settings-screen'

const fontFamily = Platform.OS === 'ios' ? 'Avenir' : 'sans-serif'

const renderAccount = () => (
  <View style={styles.settingsAccountContainer}>
    <View style={{ flex: 1 }}>
      <Text style={styles.settingsAccountTitle}>Testuser</Text>
      <Text style={styles.settingsAccountSubtitle}>testuser@pexample.com</Text>
    </View>
    <Chevron />
  </View>
)

export default class OurSettingsScreen extends React.Component {
  state = {
    refreshing: false, 
  }

  settingsData: SettingsData = [
    { type: 'CUSTOM_VIEW', key: 'account', render: renderAccount },
    {
      type: 'SECTION',
      header: 'Account settings'.toUpperCase(),
      footer:
        'These settings have currently no effect.',
      rows: [
        {
          title: 'Secret',
          showDisclosureIndicator: true,
        },
        {
          title: 'Preferred algorithms',
          subtitle: 'OpenObjectsO',
          showDisclosureIndicator: true,
        },
        {
          title: 'Autoconnect to OpenObjectsO',
          renderAccessory: () => <Switch value onValueChange={() => {}} />,
        },
        {
          title: 'Type',
          renderAccessory: () => (
            <Text style={{ color: '#887', marginRight: 6, fontSize: 18 }}>
              Organization
            </Text>
          ),
        },
      ],
    },
    {
      type: 'SECTION',
      header: 'App settings'.toUpperCase(),
      rows: [
        {
          title: 'GPU settings',
          showDisclosureIndicator: true,
        },
        {
          title: 'Screen orientation',
          renderAccessory: () => (
            <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
              both
            </Text>
          ),
        },
        {
          title: 'Enable automatic scan',
          subtitle: 'Affects battery life',
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
        {
          title: 'App color',
          renderAccessory: () => (
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#344323",
              }}
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
      <View style={styles.settingsContainer}>
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

