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


class LoginQuick extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        const goBack = () => {
            console.log('goBack function called')
        }
        return (
            <Fragment>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <View style={{ backgroundColor: '#fff', height: '100%', width: '100%' }}>
                    <View style={styles.header}>
                        <TouchableOpacity activeOpacity={0.6} onPress={this.props.navigation.goBack()}>
                            <Image
                                source={require('../assets/images/LeftArrow.png')}
                                style={{ height: 25, width: 50, resizeMode: 'contain', marginTop: hp(3.8), marginLeft: wp(0.6) }}
                            />
                        </TouchableOpacity>

                        <Text style={{ alignSelf: 'center', marginTop: hp(3.5), color: 'white', fontSize: 18, marginLeft: wp(1) }}>Register/Sign In</Text>
                    </View>
                    <Text style={{ opacity: 0.7, width: wp(88), alignSelf: 'center', textAlign: 'left', flexWrap: 'wrap', fontSize: 22, marginTop: hp(2) }}>Confirm the country/region and your phone number</Text>
                    <Text style={{ opacity: 0.6, width: wp(88), alignSelf: 'center', textAlign: 'left', flexWrap: 'wrap', fontSize: 14, marginTop: hp(2) }}>New phone number or Email will be registered automatically</Text>
                    <View style={{ flexDirection: 'row', width: '88%', height: hp(8), marginTop: hp(5), justifyContent: 'space-between', alignSelf: 'center', }}>
                        <View style={{ height: '100%', width: '15%', borderBottomColor: '#403b3b', borderBottomWidth: 0.4 }}>
                            <TextInput
                                placeholder="+91"
                                style={{ alignSelf: 'center', }}
                                keyboardType={"default"}
                                maxLength={4}
                                fontSize={16}
                            />
                        </View>
                        <View style={{ height: '100%', width: '78%', borderBottomColor: '#403b3b', borderBottomWidth: 0.4 }}>
                            <TextInput
                                placeholder="India"
                                style={{ alignSelf: 'flex-start', }}
                                keyboardType={"ascii-capable"}
                                fontSize={16}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '88%', height: hp(8), marginTop: hp(1), alignSelf: 'center' }}>
                        <View style={{ height: '100%', width: '100%', borderBottomColor: '#403b3b', borderBottomWidth: 0.4, justifyContent: 'space-between', flexDirection: 'row', }}>
                            <TextInput
                                placeholder="7278340967"
                                style={{ alignSelf: 'flex-start', width: '100%', }}
                                secureTextEntry={true}
                                fontSize={16}
                            />
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={{ height: hp(7), width: wp(88), borderRadius: 5, backgroundColor: '#4fc9f0', alignSelf: 'center', marginTop: hp(6), justifyContent: 'center', alignItems: 'center' }} onPress={() => navigate("HomeView")}>
                        <Text style={{ fontSize: 17, color: '#fff' }}>NEXT</Text>
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
    }
});

export default LoginQuick;