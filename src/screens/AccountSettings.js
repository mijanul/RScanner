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


class AccountSettings extends React.Component {

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
                                style={{ height: 25, width: 50, resizeMode: 'contain', marginTop: hp(3.8), marginLeft: wp(0.6) }}
                            />
                        </TouchableOpacity>
                        <Text style={{ alignSelf: 'center', marginTop: hp(3.5), color: 'white', fontSize: 18, marginLeft: wp(1) }}>Account Settings</Text>
                        <TouchableOpacity activeOpacity={0.6}>
                            <Image
                                source={require('../assets/images/Doted-Menu.png')}
                                style={{ height: 15, width: 40, resizeMode: 'contain', marginTop: hp(3.8), marginLeft: wp(35) }}
                            />
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={{ height: '100%', width: '100%' }} showsVerticalScrollIndicator={false}>

                        <View style={styles.box}>
                            <View style={{ width: '65%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ height: hp(6.5), width: wp(11.7), resizeMode: 'contain', borderRadius: 25, backgroundColor: '#bbbdbf', alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        source={require('../assets/images/Profile.png')}
                                        style={{ height: '40%', width: '40%', resizeMode: 'contain', }}
                                    ></Image>
                                </View>
                                <View style={{ flexDirection: 'column', height: '60%', paddingBottom: hp(0.1), width: '70%', justifyContent: 'space-between' }}>
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <Text style={[styles.greyText, { fontSize: 16 }]}>(Add nickname)</Text>
                                    </TouchableOpacity>
                                    <Text style={[styles.greyText, { color: '#000', opacity: 0.7 }]}>7235649822</Text>
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Text style={styles.greyText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.box, { marginTop: 1, paddingLeft: wp(3) }]}>
                            <View style={{ height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                                <View style={{ flexDirection: 'column', height: '60%', paddingBottom: hp(0.1), justifyContent: 'space-between', }}>
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <Text style={[styles.greyText, { fontSize: 16, color: '#000', opacity: 0.7 }]}>Account Type</Text>
                                    </TouchableOpacity>
                                    <Text style={[styles.greyText, { paddingBottom: hp(1) }]}>Basic</Text>
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Text style={[styles.greyText, { color: '#ffa200' }]}>Upgrade to enjoy Premium</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.box, { marginTop: 1, paddingLeft: wp(3), height: hp(8) }]}>
                            <TouchableOpacity>
                                <Text style={[styles.greyText, { fontSize: 16, color: '#000', opacity: 0.7 }]}>Change Password</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.boxTwo}>
                            <View style={{ height: '80%', justifyContent: 'space-between', flexDirection: 'column' }}>
                                <Text style={styles.greyText}>Cloud Space</Text>
                                <View>
                                    <Text style={[styles.greyText, { fontSize: 15, color: '#000', opacity: 0.7 }]}>Used Space</Text>
                                    <Text style={[styles.greyText, { fontSize: 15, color: '#000', opacity: 0.7 }]}>0KB/200.00MB</Text>
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Text style={[styles.greyText, {}]}>Redeem for 1GB of cloud space</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.boxTwo, { marginTop: 1 }]}>
                            <View style={{ height: '80%', justifyContent: 'space-between', flexDirection: 'column' }}>
                                <Text style={styles.greyText}>Recharge</Text>
                                <View>
                                    <Text style={[styles.greyText, { fontSize: 15, color: '#000', opacity: 0.7 }]}>Balance</Text>
                                    <Text style={[styles.greyText, { fontSize: 15, color: '#000', opacity: 0.7 }]}>0KB/200.00MB</Text>
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Text style={[styles.greyText, {}]}>Recharge 3000 points</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.boxTwo, { marginTop: 1 }]}>
                            <View style={{ height: '80%', justifyContent: 'space-between', flexDirection: 'column' }}>
                                <Text style={styles.greyText}>Fax</Text>
                                <View>
                                    <Text style={[styles.greyText, { fontSize: 15, color: '#000', opacity: 0.7 }]}>Fax Balance</Text>
                                    <Text style={[styles.greyText, { fontSize: 13, color: '#000', opacity: 0.7 }]}>0 Pages</Text>
                                </View>
                            </View>

                        </View>

                        <View style={[styles.boxTwo, { flexDirection: 'row', height: hp(6), justifyContent: 'flex-start' }]}>
                            <TouchableOpacity>
                                <Text style={[styles.greyText, { fontSize: 15, color: '#000', opacity: 0.7, }]}>Switch app icon</Text>
                            </TouchableOpacity>
                            <Image
                                source={require('../assets/images/Crown.png')}
                                style={{ height: hp(3), width: wp(6), resizeMode: 'contain', marginLeft: wp(3) }}
                            >

                            </Image>
                        </View>
                        <TouchableOpacity activeOpacity={0.8} style={{ height: hp(7), width: wp(92), borderRadius: 5, backgroundColor: '#4fc9f0', alignSelf: 'center', marginTop: hp(3), justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 17, color: '#fff' }}>SIGN OUT</Text>
                        </TouchableOpacity>

                        <View style = {{height: hp(2), width: '100%', marginTop: hp(1)}}></View>

                    </ScrollView>

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
        height: hp(3.5),
        width: wp(7),
        resizeMode: 'contain',
        marginLeft: wp(4)
    },
    text: {
        marginLeft: wp(8),
        fontSize: 14
    },
    box: {
        backgroundColor: '#fff',
        height: hp(12),
        width: wp(90),
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: hp(4),
        paddingLeft: wp(5),
        paddingRight: wp(5),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    greyText: {
        fontSize: 14,
        color: '#8e939c'
    },
    boxTwo: {
        width: '100%',
        height: hp(14),
        backgroundColor: '#fff',
        marginTop: hp(2.5),
        flexDirection: 'row',
        paddingLeft: wp(7.5),
        paddingRight: wp(9.5),
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default AccountSettings;