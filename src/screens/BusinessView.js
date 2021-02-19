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
    ScrollView,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';



class BusinessView extends React.Component {
    static navigationOptions = {
        headerShown: false
    }; 

    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigation.toggleDrawer();
    };

    render() {
        const { navigate } = this.props.navigation;
        const goBack = () => {
            console.log('goBack function called')
        }
        return (
            <Fragment>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <View style={{ backgroundColor: '#fff', height: '100%', width: '100%', alignItems: "center" }}>
                    <View style={styles.header}>
                        <TouchableOpacity activeOpacity={0.6} onPress={this.toggleDrawer.bind(this)}>
                            <Image
                                source={require('../assets/images/Menu.png')}
                                style={{ height: 25, width: 50, resizeMode: 'contain', marginTop: hp(3.8), marginLeft: wp(0.6) }}
                            />
                        </TouchableOpacity>

                        <Text style={{ alignSelf: 'center', marginTop: hp(3.5), color: 'white', fontSize: 18, marginLeft: wp(4) }}>Business Version</Text>
                    </View>
                    <View style={{width: "100%", height: "88%"}}>
                        <ScrollView style={{width: "100%", height: "100%"}}>
                            <View style= {{width: "100%", alignItems: "center"}}>
                                <ImageBackground source={require('../assets/images/Background.png')} style={{width: "100%", height: 150, alignItems: "center",justifyContent: "center"}}>
                                    <Text style={{color: "#fff", textAlign: "center", fontSize: 16, fontWeight: "bold", marginTop: hp(-2)}}>Team Collabration</Text>
                                    <Text style={{color: "#fff", textAlign: "center", fontSize: 14, marginTop: hp(1)}}>Share and manages scanned documents</Text>
                                    <Text style={{color: "#fff", textAlign: "center", fontSize: 12,textDecorationLine: "underline", marginTop: 2}}>Instructions for Business version</Text>
                                </ImageBackground>

                                <View style={{width: 280, height: 300,backgroundColor:"#fff", alignItems: "center", zIndex: 50, marginTop: -20, elevation: 3, shadowColor: "#082c38", borderRadius: 5}}>
                                    <Text style={{width: "80%", marginTop: hp(2), fontSize: 16, fontWeight: "bold", textAlign: "center"}}>Scanned files are saved in one spot</Text>
                                    <Text style={{width: "88%", marginTop: hp(2), fontSize: 14, textAlign: "center"}}>Management across smart phone and PC web is suppoerted, and data synchronization and interworking.</Text>
                                    <Image
                                        source={require('../assets/images/4.png')}
                                        style={{ height: "40%", width: "80%", resizeMode: 'contain', marginTop: hp(1)}}
                                    />
                                    <Text style={{width: "80%", marginTop: hp(2), fontSize: 14, textAlign: "center"}}>Business web url:</Text>
                                    <Text style={{width: "80%", fontSize: 14, textAlign: "center"}}>https://www.scanner.com</Text>
                                </View>

                                <View style={{width: 280, height: 300,backgroundColor:"#fff", alignItems: "center",marginTop: hp(3), elevation: 3, shadowColor: "#082c38", borderRadius: 5}}>
                                    <Text style={{width: "80%", marginTop: hp(2), fontSize: 16, fontWeight: "bold", textAlign: "center"}}>Member and folder permission management</Text>
                                    <Text style={{width: "88%", marginTop: hp(2), fontSize: 14, textAlign: "center"}}>After creating a team, invite members to join theteam, and support collabrative management different members pulled from different folders.</Text>
                                    <Image
                                        source={require('../assets/images/1.png')}
                                        style={{ height: "50%", width: "80%", resizeMode: 'contain', marginTop: hp(1)}}
                                    />
                                </View>

                                <View style={{width: 280, height: 300,backgroundColor:"#fff", alignItems: "center",marginTop: hp(3), elevation: 3, shadowColor: "#082c38", borderRadius: 5}}>
                                    <Text style={{width: "80%", marginTop: hp(2), fontSize: 16, fontWeight: "bold", textAlign: "center"}}>Team organization structure management</Text>
                                    <Text style={{width: "88%", marginTop: hp(2), fontSize: 14, textAlign: "center"}}>Support the creation of the groups within the team, which can be set according to the organizational structure of the team.</Text>
                                    <Image
                                        source={require('../assets/images/2.png')}
                                        style={{ height: "60%", width: "80%", resizeMode: 'contain', marginTop: hp(1)}}
                                    />
                                    {/* <Text style={{width: "80%", marginTop: hp(2), fontSize: 14, textAlign: "center"}}>Business web url:</Text>
                                    <Text style={{width: "80%", fontSize: 14, textAlign: "center"}}>https://www.scanner.com</Text> */}
                                </View>

                                <View style={{width: 280, height: 300,backgroundColor:"#fff", alignItems: "center",marginTop: hp(3), elevation: 3, shadowColor: "#082c38", borderRadius: 5}}>
                                    <Text style={{width: "80%", marginTop: hp(2), fontSize: 16, fontWeight: "bold", textAlign: "center"}}>All advanced account functions of personal version</Text>
                                    <Text style={{width: "88%", marginTop: hp(2), fontSize: 14, textAlign: "center"}}>After the business version is officially purchased, it will enjoy all the functions of the general senior account.</Text>
                                    <Image
                                        source={require('../assets/images/3.png')}
                                        style={{ height: "60%", width: "80%", resizeMode: 'contain', marginTop: hp(1)}}
                                    />
                                    {/* <Text style={{width: "80%", marginTop: hp(2), fontSize: 14, textAlign: "center"}}>Business web url:</Text>
                                    <Text style={{width: "80%", fontSize: 14, textAlign: "center"}}>https://www.scanner.com</Text> */}
                                </View>

                                <TouchableOpacity style={{backgroundColor: "#4fc9f0", width: 280, height: hp(8), marginTop: hp(4), borderRadius: 5, alignItems: "center", justifyContent: 'center'}}>
                                <Text style={{width: "80%", fontSize: 14, fontWeight: "bold", textAlign: "center", color:"#fff"}}>APPLY FOR FREE TRIAL</Text>
                                </TouchableOpacity>
                                <View style={{width: "100%" ,height: hp(5)}}></View>
                            </View>
                        </ScrollView>
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

export default BusinessView;