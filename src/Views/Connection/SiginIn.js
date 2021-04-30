import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { connect } from 'react-redux'
import SearchUser from '../../API/searchUserSpecific'
import { loginUserAction } from '../../Redux/Actions/ActionsUser'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this._FindSpecificUser()
  }

  async _FindSpecificUser() {
    await SearchUser.SpecificUser("quemenerjeremy").then(data => {
      if (data.status === 200) {
        this.props.dispatch(loginUserAction({
          id: data.data.items[0].id,
          login: data.data.items[0].login,
          avatar_url: data.data.items[0].avatar_url,
          followers_url: data.data.items[0].followers_url,
          repos_url: data.data.items[0].repos_url,
          type: data.data.items[0].type,
          score: data.data.items[0].score
        }))
        this.props.navigation.navigate("HomeScreen")
      }
        console.log("coucou", data.data.items[0].login)
      // if (data.status)

    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
      UserData: state.userData
  }
}

export default connect(mapStateToProps)(SignIn)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})