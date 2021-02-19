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


class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showPassword: true
        }
    }

    isSignInPressed() {
        global.isSignIn[0] = "false"
    }

    signInBtnPressed() {
        this.props.navigation.navigate('HomeView')
    }

    showPassword(){
        if (this.state.showPassword == true) {
            this.setState({
                showPassword: false
            })
        } else {
            this.setState({
                showPassword: true
            })
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Fragment>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <View style={{ backgroundColor: '#fff', height: '100%', width: '100%' }}>
                    <View style={styles.header}>
                        <TouchableOpacity activeOpacity={0.6} onPress= {()=> this.props.navigation.goBack()}>
                            <Image
                                source={require('../assets/images/LeftArrow.png')}
                                style={{ height: 25, width: 50, resizeMode: 'contain', marginTop: hp(3.8), marginLeft: wp(0.6) }}
                            />
                        </TouchableOpacity>

                        <Text style={{ alignSelf: 'center', marginTop: hp(3.5), color: 'white', fontSize: 18, marginLeft: wp(1) }}>Phone</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '88%', height: hp(8), marginTop: hp(6), justifyContent: 'space-between', alignSelf: 'center' }}>
                        <View style={{ height: '100%', width: '15%', borderBottomColor: '#403b3b', borderBottomWidth: 0.4 }}>
                            <TextInput
                                placeholder="+91"
                                style={{ alignSelf: 'center',height: "100%" }}
                                keyboardType={"numbers-and-punctuation"}
                                maxLength={4}
                                fontSize={16}
                            />
                        </View>
                        <View style={{ height: '100%', width: '78%', borderBottomColor: '#403b3b', borderBottomWidth: 0.4 }}>
                            <TextInput
                                placeholder="7278340967"
                                style={{ alignSelf: 'flex-start', }}
                                keyboardType={"numeric"}
                                fontSize={16}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '88%', height: hp(8), marginTop: hp(1.5), alignSelf: 'center' }}>
                        <View style={{ height: '100%', width: '100%', borderBottomColor: '#403b3b', borderBottomWidth: 0.4, justifyContent: 'space-between', flexDirection: 'row', }}>
                            <TextInput
                                placeholder="Password"
                                style={{ alignSelf: 'flex-start', width: '85%',height:"100%" }}
                                secureTextEntry={this.state.showPassword}
                                fontSize={16}
                            />
                            <TouchableOpacity activeOpacity={0.6} style={{ width: '20%', height: '100%', justifyContent: 'center' }} onPress={()=> this.showPassword()}>
                                <Image
                                    source={require('../assets/images/View.png')}
                                    style={{ height: 20, width: "100%", resizeMode: 'contain', }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={{ height: hp(7), width: wp(88), borderRadius: 5, backgroundColor: '#4fc9f0', alignSelf: 'center', marginTop: hp(6), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 17, color: '#fff' }}>SIGN IN</Text>
                    </TouchableOpacity>
                    <View style={{ width: wp(88), alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: hp(2) }}>
                        <TouchableOpacity activeOpacity = {0.6} onPress = {()=> navigate('LoginQuick')}> 
                            <Text style={{ fontSize: 16, opacity: 0.5 }}>Quick login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity = {0.6}>
                            <Text style={{ opacity: 0.7, fontSize: 16 }}>Forgot Password?</Text>
                        </TouchableOpacity>

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
    }
});

export default Login;