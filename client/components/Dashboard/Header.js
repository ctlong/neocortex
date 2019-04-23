import React from 'react'
import { StyleSheet, Text, Button, Image, View } from 'react-native'

const Header = () => (
  <View style={styles.header}>
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>Dashboard</Text>
    </View>

    <View style={styles.introContainer}>
      <View style={styles.profilePic}>
        <Image source={require('../../assets/temp_pic.png')} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.welcomeBack}>Welcome back,</Text>
        <Text style={styles.name}>User Name</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#812BFC',
    padding: 25,
    paddingTop: 40,
    color: '#ffffff'
  },
  navbar: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center'
  },
  navbarTitle: {
    fontSize: 25,
    color: '#ffffff'
  },
  introContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  profilePic: {
  },
  textContainer: {
    paddingLeft: 25
  },
  welcomeBack: {
    color: '#ffffff',
    fontSize: 20,
    paddingBottom: 5
  },
  name: {
    color: '#ffffff',
    fontSize: 30
  }
})

export default Header
