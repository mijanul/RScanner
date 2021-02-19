/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  View,
  Text,
  TextInput,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  ToastAndroid,
  YellowBox,
  PermissionsAndroid,
  Keyboard, Linking, Alert
} from 'react-native';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    
  }

  componentDidMount(){
    this.ask();
    
  }


  askStorage = async() => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Storage Permission",
            message: "App needs access to memory to download the file "
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Alert.alert("Permission granted","Now you can download anything!");
          this.props.navigation.navigate('Screen1');
        } else {
          // Alert.alert(
          //   "Permission Denied!",
          //   "You need to give storage permission to download the file"
          // );
        }
      } catch (err) {
        console.warn(err);
      }
  }
ask = async() => {
    try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            'title': 'Cool Photo App Camera Permission',
            'message': 'Cool Photo App needs access to your camera ' +
                       'so you can take awesome pictures.'
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the camera")
          this.askStorage();
        } else if (PermissionsAndroid.RESULTS.DENIED){
          console.log("Camera permission denied")
        }
      } catch (err) {
        console.warn(err)
      }
}
  
  render() {
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
    const {navigate} = this.props.navigation;

    // setTimeout(function(){
    //   //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
    //   navigate('Screen1');

    // }, 0);

    return (
      <Fragment>
        <StatusBar translucent backgroundColor='transparent' />
        <SafeAreaView>
             {/* <ImageBackground source={require('../assets/images/launchScreen.jpg')} style={{width: '100%', height: '100%'}}>
                
             </ImageBackground> */}
        </SafeAreaView>
      </Fragment>
    );
  }
};



export default SplashScreen;
