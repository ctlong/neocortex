import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { DrawerItems, createDrawerNavigator, createAppContainer } from 'react-navigation'

import Dashboard from './screens/Dashboard'
import Relationships from './screens/Relationships'
import Interactions from './screens/Interactions'
import Settings from './screens/Settings'

const DrawerComponent = (props) => (
  <View>
    <View
      style={{
        backgroundColor: '#812BFC',
        paddingTop: 40,
        paddingLeft: 20,
        paddingBottom: 20,
        alignItems: 'left',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 30 }}>
        User Name
      </Text>
    </View>
    <DrawerItems {...props} />
  </View>
)

const Navigator = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  Relationships: {
    screen: Relationships,
  },
  Interactions: {
    screen: Interactions
  },
  Settings: {
    screen: Settings
  }
}, {
  contentComponent: DrawerComponent
});

export default createAppContainer(Navigator);
