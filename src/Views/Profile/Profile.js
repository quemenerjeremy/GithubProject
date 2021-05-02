import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux'
import SearchRepo from '../../API/searchRepo';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userRepo: []
    }
  }

  async componentDidMount() {
    await this.getUserRepo()
  }

  async getUserRepo() {
    await SearchRepo.SpecificRepo(this.props.UserData.login).then(data => {
      this.setState({userRepo: data})
    })
  }

  render() {
    console.log("state: ", this.state.userRepo)
    const user = this.props.UserData
    return (
      <View style={styles.container}>
        <Image
          style={{
            height: '15%',
            width: '97%',
            marginLeft: wp('-30%'),
            borderRadius: hp('50%'),
            marginTop: hp('2%'),
          }}
          resizeMode={'contain'}
          source={{
            uri: user.avatar_url,
          }}
        />
        <View style={{flexDirection:'row'}}>
          <Text style={{color: "#F07167", marginLeft:wp('40%'), fontSize: 20, marginTop: hp('-10.5%')}}>Followers</Text>
          <Text style={{marginLeft:wp('5%'), fontSize: 20, color: "#F07167" , marginTop: hp('-10.5%') }}>Public repos</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize: 17, fontWeight:'bold', color: "#F07167", marginLeft: wp('51%'), marginTop: hp('-6.5%')}}>{user.followers}</Text>
          <Text style={{fontSize: 17, fontWeight:'bold', color: "#F07167", marginLeft: wp('27%'), marginTop: hp('-6.5%')}}>{user.nbRepo}{"\n"}</Text>
        </View>
   
        <Text style={{fontSize: 20, fontWeight:'bold', color: "#F07167", marginTop: hp("2%"), marginLeft: wp('4%')}}>{user.login}</Text>
        <Text style={{fontSize: 14, fontStyle:'italic', color: "#0C868D", marginTop: hp("1.4%"), marginLeft: wp('4%')}}>{user.bio}</Text>
        <Text style={{fontSize: 14, fontStyle:'italic', color: "#0C868D", marginTop: hp("1.4%"), marginLeft: wp('4%')}}>{user.urlAccount}</Text>

        <View style= {{marginTop: hp('5%')}}>
          <FlatList
            contentContainerStyle={{paddingBottom: hp('20%')}}
            data={this.state.userRepo}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (<Text style={{color: 'red', marginLeft: 10, marginBottom:10}}>{item.name}</Text>)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = state => {
  return {
      UserData: state.userData
  }
}

export default connect(mapStateToProps)(Profile)