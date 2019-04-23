import React from 'react'
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native'

import Header from '../components/Dashboard/Header'

export default class Dashboard extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Dashboard'
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />

        <ScrollView>
          <View style={styles.contentContainer}>
            <Text style={styles.recentInteractions}>Recent Interactions</Text>

            <View style={styles.interactionItem}>
              <View>
                <Image source={require('../assets/temp_pic.png')} style={styles.interactionImage} />
              </View>

              <View>
                <Text style={styles.interactionName}>Jennifer Rodham</Text>
                <Text style={styles.interactionDetail}>Meeting | April 14, 11:20 AM</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF1F2',
  },
  recentInteractions: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#585858'
  },
  contentContainer: {
    padding: 25
  },
  interactionItem: {
    padding: 25,
    backgroundColor: '#fff',
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  interactionImage: {
    width: 60,
    height: 60,
    marginRight: 15
  },
  interactionName: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  interactionDetail: {
    fontSize: 16
  }
})
