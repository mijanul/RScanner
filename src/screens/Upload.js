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
    PermissionsAndroid,
    TextInput

} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';


class Upload extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        const goBack = () => {
            console.log('goBack function called')
        }
        return (
            <Fragment>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <View style={{ height: '100%', width: '100%' }}>
                    <View style={styles.header}>
                        <TouchableOpacity activeOpacity={0.6}>
                            <Image
                                source={require('../assets/images/LeftArrow.png')}
                                style={{ height: 25, width: 50, resizeMode: 'contain', marginTop: hp(3.8), marginLeft: wp(0.6) }}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.touchBox}>
                        <Image source={require('../assets/images/FileManager.png')} style={styles.icon}></Image>
                        <Text style={styles.text}>File Manager</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1 }]}>
                        <Image source={require('../assets/images/Drive.png')} style={styles.icon}></Image>
                        <Text style={styles.text}>Drive</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1 }]}>
                        <Image source={require('../assets/images/DropBox.png')} style={styles.icon}></Image>
                        <Text style={styles.text}>Dropbox</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1 }]}>
                        <Image source={require('../assets/images/OnDrive.png')} style={styles.icon}></Image>
                        <Text style={styles.text}>One Drive</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1 }]}>
                        <Image source={require('../assets/images/Box.png')} style={styles.icon}></Image>
                        <Text style={styles.text}>Box</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1, }]}>
                        <Image source={require('../assets/images/FileManager-2.png')} style={styles.icon}></Image>
                        <Text style={styles.text}>File Manager</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity = {0.8} style = {styles.floatingBtn}>
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
    header: {
        width: '100%',
        height: hp(12),
        backgroundColor: '#4fc9f0',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    touchBox: {
        width: wp(100),
        height: hp(7.5),
        flexDirection: 'row',
        backgroundColor: '#fff',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: hp(4),
        width: wp(8),
        resizeMode: 'contain',
        marginLeft: wp(4)
    },
    text: {
        marginLeft: wp(8),
        fontSize: 14
    },
    floatingBtn: {
        position: 'absolute',
        height: 50,
        width: 50,
        borderRadius: 50,
        bottom: hp(6),
        right: wp(10),
        backgroundColor: '#757272',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#c1c7c7',
        elevation: 6,
        shadowRadius: 3.84
    },
    CameraIconStyle: {
        height: 25,
        width: 25,
        resizeMode: 'contain'
    }
});

export default Upload;