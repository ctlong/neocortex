import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import Dashboard from './screens/Dashboard'
import Relationships from './screens/Relationships'

const Navigator = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  Relationships: {
    screen: Relationships,
  },
});

export default createAppContainer(Navigator);
