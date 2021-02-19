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
    TextInput,
    ScrollView
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';


class Refer extends React.Component {


    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigation.toggleDrawer();
    };
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
                        <TouchableOpacity activeOpacity={0.6} onPress={this.toggleDrawer.bind(this)}>
                            <Image
                                source={require('../assets/images/Menu.png')}
                                style={{ height: 17, width: 40, resizeMode: 'contain', marginTop: hp(3.8), marginLeft: wp(0.6) }}
                            />
                        </TouchableOpacity>
                        <Text style={{ alignSelf: 'center', marginTop: hp(3.5), color: 'white', fontSize: 18, marginLeft: wp(1) }}>Refer to Earn</Text>
                        <TouchableOpacity activeOpacity={0.6}>
                            <Image
                                source={require('../assets/images/Edited.png')}
                                style={{ height: 20, width: 40, resizeMode: 'contain', marginTop: hp(3.8), marginLeft: wp(46) }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: '100%', width: '100%', backgroundColor: '#187e9f' }} showsVerticalScrollIndicator={false}>
                        <View style={{ width: wp(92), height: hp(14), marginTop: hp(2), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ height: '79%', width: '33%', flexDirection: 'column', }}>
                                <View style={{ width: '44%', height: '100%', justifyContent: 'space-between', }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 24, fontWeight: 'bold' }}>0</Text>
                                    <Text style={{ color: 'white', fontSize: 16, }}>Invited</Text>
                                </View>

                            </View>
                            <View style={{ height: '100%', width: '33%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', }}>
                                <Text style={{ width: '100%', textAlign: 'center', color: 'white', fontSize: 24, fontWeight: 'bold' }}>0</Text>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ width: '100%', textAlign: 'center', color: 'white', fontSize: 16, }}>Cloud space</Text>
                                    <Text style={{ width: '100%', textAlign: 'center', color: 'white', fontSize: 16, }}>obtained(MB)</Text>
                                </View>
                            </View>
                            <View style={{ height: '100%', width: '33%', flexDirection: 'column', }}>
                                <View style={{ justifyContent: 'space-between', height: '100%', width: '60%', alignSelf: 'flex-end' }}>
                                    <Text style={{textAlign: 'center', color: '#ffa200', fontSize: 24, fontWeight: 'bold' }}>0</Text>
                                    <View style={{ width: '100%' }}>
                                        <Text style={{textAlign: 'center', color: 'white', fontSize: 16, }}>Days of</Text>
                                        <Text style={{textAlign: 'center', color: 'white', fontSize: 16, }}>Premium</Text>
                                    </View>
                                </View>

                            </View>
                        </View>

                        <View style={styles.cardOne}>
                            <Text style = {styles.greyText}>Newbie task</Text>

                            <View style = {styles.rowView}>
                                <View style = {styles.iconView}>
                                    <Image
                                        source = {require('../assets/images/User.png')}
                                        style = {styles.icon}
                                    ></Image>
                                </View>
                                <View style = {styles.colView}>
                                    <Text style = {styles.textDescription}>Register for CamScanner</Text>
                                    <View style = {{flexDirection: 'row', width: wp(18), justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Image
                                            source = {require('../assets/images/OnDrive.png')}
                                            style = {styles.icon}
                                        ></Image>
                                        <Text style = {styles.greyText}>200M</Text>
                                    </View>
                                </View>
                                <View style = {styles.RgstrBtn}>
                                    <Text style = {styles.RgstrTxt}>Register</Text>
                                </View>
                            </View>

                            <View style = {styles.rowView}>
                                <View style = {[styles.iconView,{backgroundColor: '#ffa200'}]}>
                                    <Image
                                        source = {require('../assets/images/Education.png')}
                                        style = {[styles.icon, {}]}
                                    ></Image>
                                </View>
                                <View style = {styles.colView}>
                                    <Text style = {styles.textDescription}>Educational Users Registration</Text>
                                    <View style = {{flexDirection: 'row', width: wp(18), justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Image
                                            source = {require('../assets/images/OnDrive.png')}
                                            style = {styles.icon}
                                        ></Image>
                                        <Text style = {styles.greyText}>400M</Text>
                                    </View>
                                </View>
                                <View style = {styles.RgstrBtn}>
                                    <Text style = {styles.RgstrTxt}>Register</Text>
                                </View>
                            </View>
                        </View>


                        <View style={[styles.cardOne,{height: hp(20), marginTop: hp(2)}]}>
                            <Text style = {styles.greyText}>Sign in to unlock rewards</Text>

                           

                            <View style = {styles.rowView}>
                                <View style = {[styles.iconView,{backgroundColor: '#ffa200'}]}>
                                    <Image
                                        source = {require('../assets/images/VideoCamera.png')}
                                        style = {[styles.icon, {}]}
                                    ></Image>
                                </View>
                                <View style = {styles.colView}>
                                    <Text style = {styles.textDescription}>Lucky draw</Text>
                                    <View style = {{flexDirection: 'row', width: wp(24), justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Image
                                            source = {require('../assets/images/OnDrive.png')}
                                            style = {styles.icon}
                                        ></Image>
                                        <Text style = {styles.greyText}>5 - 200M</Text>
                                    </View>
                                </View>
                                <View style = {styles.RgstrBtn}>
                                    <Text style = {styles.RgstrTxt}>Complete</Text>
                                </View>
                            </View>
                        </View>

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

    icon: {
        height: hp(2.5),
        width: wp(5),
        resizeMode: 'contain',
        
    },
    text: {
        marginLeft: wp(8),
        fontSize: 16
    },

    greyText: {
        fontSize: 15,
        color: '#8e939c'
    },
    cardOne: {
        backgroundColor: '#fff',
        height: hp(29),
        width: wp(92),
        borderRadius: 4,
        alignSelf: 'center',
        marginTop: hp(4),
        paddingLeft: wp(4),
        paddingRight: wp(4),
        paddingTop: wp(3)
    },
    rowView: {
        width: '100%',
        height: hp(8),
        // backgroundColor: '#ff0',
        marginTop: hp(2),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconView: {
        height: hp(4),
        width: wp(7),
        backgroundColor: '#8e939c',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    colView: {
        width: '57%',
        flexDirection: 'column',
        height: '80%',
        // backgroundColor: '#f00',
        justifyContent: 'space-between'
    },
    RgstrBtn: {
        width: '28%',
        height: hp(4),
        backgroundColor: '#8e939c',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    RgstrTxt: {
        color: '#fff',
        fontSize: 14
    },
    textDescription: {
        textAlign: 'left',
        width: '100%',
        flexWrap: 'wrap',
        fontSize: 15

    }
});

export default Refer;