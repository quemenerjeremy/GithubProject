import React from 'react'
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, FlatList} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux'
import SearchUsers from '../../API/searchUserSpecific'
export default class SearchUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      userData: []
    }
    this.username = ""
  }

  _findUsers = async (text) => {
    await SearchUsers.findUsers(text, 10).then(data => {
        this.setState({userData: data})
    })
  }


  renderList(item) {
    console.log("coucoucoucouc",this.state.userData)
    return (
      <Text style={{ fontSize: 22 }}>
        {item.login}
      </Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior="position"
          enabled={Platform.OS === 'ios' ? true : false}
          contentContainerStyle={{flex: 1}}
          keyboardVerticalOffset={hp("-25%")}
        >
          <View style={styles.searchBloc}>
           <MaterialCommunityIcons name={"magnify"} size={20} color={'#031033'}/>
            <TextInput
              style={styles.inputSearch}
              keyboardType="email-address"
              placeholder="Find user"
              placeholderTextColor={'#EAE6E5'} 
              onChangeText={(username) => this.setState({username: username})}
              onSubmitEditing={() => this._findUsers(this.state.username)}
            />
          </View>
          <View>
            <FlatList
              data={this.state.userData}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                this.renderList(item)
              )}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp('1%'),
    alignItems: 'center'
  },
  inputSearch: {
    fontSize: 15,
    marginLeft: wp('5%'),
    width: '80%',
    height: '80%',
    color: "#EAE6E5"
  },
  searchBloc: {
    flexDirection: 'row',
    height: hp('6.15%'),
    width: '100%',
    backgroundColor: '#4F5D75',
    shadowRadius: 20,
    shadowColor: '#000000',
    shadowOpacity: 1,
    borderRadius: 15,
    marginTop: hp('3.69%'),
    alignItems: 'center',
    paddingHorizontal: wp('4'),
  },
})