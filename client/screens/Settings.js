import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Settings extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings' 
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings content goes here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
