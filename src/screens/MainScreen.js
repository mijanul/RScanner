import React, { Fragment, Component, useRef } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Platform,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    LayoutAnimation,
    FlatList,
    Animated,
    ImageBackground,
    UIManager,
    YellowBox,
    StatusBar,
    PermissionsAndroid
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
// import Scanner from "react-native-rectangle-scanner"


class MainScreen extends React.Component {
    handleOnPictureProcessed = ({ croppedImage, initialImage }) => {
        this.props.doSomethingWithCroppedImagePath(croppedImage);
        this.props.doSomethingWithOriginalImagePath(initialImage);
    }

    componentDidMount(){
        this.ask();
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
            } else if (PermissionsAndroid.RESULTS.DENIED){
              console.log("Camera permission denied")
            }
          } catch (err) {
            console.warn(err)
          }
    }


    onCapture = () => {
        this.camera.current.capture();
    }
    render() {
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
          ]);
          const {navigate} = this.props.navigation;
        return (
            <Fragment>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <View style={styles.Container}>
                    {/* <Scanner
                        onPictureProcessed={this.handleOnPictureProcessed}
                        ref={this.camera}
                        style={{ flex: 1 }}
                    /> */}
                    <TouchableOpacity
                        activeOpacity = {0.72}
                        style = {styles.FloatingCamera}
                        onPress = {()=> navigate('Screen1')}
                    >
                        <Image 
                            source = {require('../assets/images/Camera.png')}
                            style = {styles.CameraIconStyle}
                        />
                    </TouchableOpacity>
                </View>
            </Fragment>

        );
    }
}

const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff'
    },
    FloatingCamera: {
        position: 'absolute',
        height: 70,
        width: 70,
        borderRadius: 70,
        bottom: hp(6),
        right: wp(8),
        backgroundColor: '#88e3d7',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#c1c7c7',
        elevation: 6,
        shadowRadius: 3.84
    },
    CameraIconStyle: {
        height: 45,
        width: 45,
        resizeMode: 'contain'
    }

});

export default MainScreen;