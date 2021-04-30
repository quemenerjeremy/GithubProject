import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { connect } from 'react-redux'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Text>{this.props.UserData.login}</Text>
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

const mapStateToProps = state => {
  return {
      UserData: state.userData
  }
}

export default connect(mapStateToProps)(Profile)