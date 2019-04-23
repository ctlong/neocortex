import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Header from '../components/Dashboard/Header'

export default class Dashboard extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Dashboard'
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  add: {
    position: 'absolute',
    bottom: 25,
    right: 25
  }
})
