import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Relationships extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Relationships'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Relationships content goes here</Text>
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
