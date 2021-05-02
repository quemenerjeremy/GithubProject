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
          id: data.data.id,
          login: data.data.login,
          bio: data.data.bio,
          email: data.data.email,
          avatar_url: data.data.avatar_url,
          followers: data.data.followers,
          followers_url: data.data.followers_url,
          following: data.data.following,
          following_url: data.data.following_url,
          urlAccount: data.data.html_url,
          nbRepo: data.data.public_repos,
          repos_url: data.data.repos_url,
          type: data.data.type,
          score: data.data.score
        }))
        this.props.navigation.navigate("HomeScreen")
      }
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