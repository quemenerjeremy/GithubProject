import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

export default class SearchUser extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SearchUser</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})