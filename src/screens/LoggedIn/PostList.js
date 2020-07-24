import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  ActivityIndicator,
  TextInput,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {Card, ListItem} from 'react-native-elements';

class PostList extends React.Component {
  state = {
    emoloyeeList: [],
  };

  componentDidMount() {}
  render() {
    const {navigation, postList} = this.props;
    const PostData = postList && postList.posts;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#455a64',
          paddingBottom: 20,
        }}>
        {Object.values(PostData) && Object.values(PostData).length === 0 && (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{marginTop: 50, fontSize: 25}}>Empty List!</Text>
          </View>
        )}
        <StatusBar backgroundColor="#455a64" />
        {/* <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Search Here"
            placeholderTextColor="rgba(255,255,255,0.8)"
            selectionColor="#999999"
            keyboardType="default"
            maxLength={10}
            returnKeyType="next"
            onChangeText={(text) => this.setState({name: text})}
          />
        </View> */}

        <ScrollView>
          {Object.values(PostData) &&
            Object.values(PostData).length > 0 &&
            Object.values(PostData).map((u, i) => (
              <Card
                key={u.postId}
                containerStyle={{
                  backgroundColor: 'rgba(255, 255,255,0.2)',
                  borderRadius: 8,
                  elevation: 5,
                  flexDirection: 'row',
                }}>
                <View style={{flexDirection: 'row', alignSelf: 'auto'}}>
                  <View
                    style={{
                      alignSelf: 'auto',
                      marginLeft: 20,
                      flexShrink: 1,
                    }}>
                    <Text style={styles.titleText}>{u.first_name}</Text>
                    <Text style={styles.subtitleText}>{u.description}</Text>
                    <View
                      style={{
                        alignSelf: 'center',
                      }}>
                      <Image
                        source={{uri: u.profile_pic}}
                        style={styles.profileImage}
                      />
                    </View>
                  </View>
                </View>
              </Card>
            ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subtitleText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#ccececec',
    marginVertical: 5,
  },
  titleText: {
    color: '#ccececec',
    fontSize: 24,
    fontFamily: 'Roboto-Regular',
    marginVertical: 10,
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },
  profileImage: {
    width: 320,
    height: 240,
    borderColor: '#ccececec',
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'center',
  },
});

const mapStateToProps = (State) => {
  console.log(';state in list', State);
  const {postList} = State;
  return {
    postList,
  };
};

export default connect(mapStateToProps, null)(PostList);
