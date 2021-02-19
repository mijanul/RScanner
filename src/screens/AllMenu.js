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


class AllMenu extends React.Component {
    render() {
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);
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
                    <View style={styles.headerTwo}>
                        <View style = {styles.firstColumn}>
                            {/* <TouchableOpacity> */}
                                <Text style = {styles.textTwo}>Sign in / Register </Text>
                            {/* </TouchableOpacity> */}
                            {/* <TouchableOpacity> */}
                                <Text style = {[styles.textTwo, {fontSize: 13}]}>Sign in to sync docs </Text>
                            {/* </TouchableOpacity> */}
                        </View>
                        <Image 
                            source = {require('../assets/images/User.png')}
                            style = {[styles.icon, {height: hp(6), width: wp(12)}]}
                        />

                    </View>
                    <View style={[styles.touchBox, { height: hp(2.2) }]}>

                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.touchBox}>
                        <Image source={require('../assets/images/Sync.png')} style={styles.icon}></Image>
                        <Text style={styles.text}>Sync</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1 }]}>
                        <Image source={require('../assets/images/Scan.png')} style={styles.icon}></Image>
                        <Text style={styles.text}>Scan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1 }]}>
                        <Image source={require('../assets/images/Doc-Management.png')} style={styles.icon}></Image>
                        <Text style={styles.text}>Doc Management</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1 }]}>
                        <Image source={require('../assets/images/Doc-Export.png')} style={styles.icon}></Image>
                        <Text style={styles.text}>Doc Export</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1, }]}>
                        <Image source={require('../assets/images/Recognition.png')} style={styles.icon}></Image>
                        <Text style={styles.text}>Text Recognition (OCR)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1, }]}>
                        <Image source={require('../assets/images/Security.png')} style={styles.icon}></Image>
                        <Text style={styles.text}>Security & backup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1, }]}>
                        <Image source={require('../assets/images/FeedBack.png')} style={styles.icon}></Image>
                        <Text style={styles.text}>Feedback</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1, }]}>
                        <Image source={require('../assets/images/Memory.png')} style={styles.icon}></Image>
                        <Text style={styles.text}>Free Up Memory </Text>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1 }]}>
                        <Image source={require('../assets/images/Activate.png')} style={styles.icon}></Image>
                        <Text style={styles.text}>Activate</Text>
                    </TouchableOpacity>
                    <View style={[styles.touchBox, { height: hp(7.2) }]}>

                    </View>

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
    headerTwo: {
        width: '100%',
        height: hp(9),
        backgroundColor: '#4fc9f0',
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: wp(4),
        paddingRight: wp(4)
    },
    firstColumn: {
        width: '50%',
        height: '70%',
        flexDirection: 'column',
        // backgroundColor: '#ff0'
    },
    textTwo: {
        fontSize: 16,
        color: 'white'
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
        height: hp(3.5),
        width: wp(7),
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

export default AllMenu;