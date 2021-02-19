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



class HelpView extends React.Component {
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
                                style={{ height: 15, width: 15, resizeMode: 'contain', marginTop: hp(3.8), marginLeft: wp(6) }}
                            />
                        </TouchableOpacity>

                        <Text style={{ alignSelf: 'center', marginTop: hp(3.5), color: 'white', fontSize: 18, marginLeft: wp(4) }}>Help</Text>
                    </View>
                    <View style={{width: "100%", height: "88%", alignItems: "center"}}>
                        <View style= {{width: "88%", height: hp(6), flexDirection: "row", alignItems: "center"}}>
                            <Image
                                source={require('../assets/images/Search.png')}
                                style={{ height: 15, width: 15, resizeMode: 'contain', marginLeft: wp(2),tintColor: "#889291"}}
                            />
                            <TextInput
                                placeholder="Please enter key words"
                                style={{height: "100%", width: "80%", marginLeft: wp(2) }}
                                keyboardType={"default"}
                                fontSize={14}
                            />
                        </View>
                        
                        <View style= {{width: "100%", height: hp(10), alignItems: "center", borderBottomColor: "#403b3b", borderBottomWidth: 0.4}}>
                            <View style= {{width: "88%", height: "100%", flexDirection: "row", alignItems: "center"}}>
                            <Image
                                source={require('../assets/images/HotQuestion.png')}
                                style={{ height: 20, width: 20, resizeMode: 'contain', marginLeft: wp(2),tintColor: "#889291"}}
                            />
                            <Text style={{fontSize: 16, marginLeft: wp(2), color: "#47504f"}}>Hot Questions</Text>
                            </View>
                        </View>

                        <View style= {{width: "100%", height: hp(10), alignItems: "center"}}>
                            <View style= {{width: "88%", height: "100%", flexDirection: "row", alignItems: "center"}}>
                            {/* <Image
                                source={require('../assets/images/HotQuestion.png')}
                                style={{ height: 20, width: 20, resizeMode: 'contain', marginLeft: wp(2),tintColor: "#889291"}}
                            /> */}
                            <Text style={{fontSize: 16, marginLeft: wp(2), color: "#47504f"}}>I've purchased Scanner license, why can't I use the app after installing? </Text>
                            </View>
                        </View>
                        <View style= {{width: "100%", height: hp(10), alignItems: "center"}}>
                            <View style= {{width: "88%", height: "100%", flexDirection: "row", alignItems: "center"}}>
                                <Text style={{fontSize: 16, marginLeft: wp(2), color: "#47504f"}}>How to remove the "Scanned by Scanner" mark?</Text>
                                {/* <Image
                                    source={require('../assets/images/HotQuestion.png')}
                                    style={{ height: 20, width: 20, resizeMode: 'contain', marginLeft: wp(2),tintColor: "#889291"}}
                                /> */}
                            </View>
                        </View>

                        <View style= {{width: "100%", height: hp(10), alignItems: "center", borderBottomColor: "#403b3b", borderBottomWidth: 0.4}}>
                            <View style= {{width: "88%", height: "100%", flexDirection: "row", alignItems: "center"}}>
                                
                                <Image
                                    source={require('../assets/images/QuestionType.png')}
                                    style={{ height: 20, width: 20, resizeMode: 'contain', marginLeft: wp(2),tintColor: "#889291"}}
                                />
                                <Text style={{fontSize: 16, marginLeft: wp(3), color: "#47504f"}}>Question Type</Text>
                            </View>
                        </View>

                        <View style= {{width:"88%", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                            <View style={{width: "48%", height: "100%", alignItems:"center"}}>
                                <TouchableOpacity style= {{justifyContent:"center", alignItems:"center", width: "60%", marginTop: hp(3)}}>
                                    <Image
                                        source={require('../assets/images/Download.png')}
                                        style={{ height: 30, width: 30, resizeMode: 'contain', marginLeft: wp(2),tintColor: "#889291"}}
                                    />
                                    <Text style={{fontSize: 14, color: "#47504f", textAlign:"center"}}>Download & Purchase </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style= {{justifyContent:"center", alignItems:"center", width: "60%",marginTop: hp(3)}}>
                                    <Image
                                        source={require('../assets/images/File.png')}
                                        style={{ height: 30, width: 30, resizeMode: 'contain', marginLeft: wp(2),tintColor: "#889291"}}
                                    />
                                    <Text style={{fontSize: 14, color: "#47504f", textAlign:"center"}}>Create file & Store</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style= {{justifyContent:"center", alignItems:"center", width: "60%",marginTop: hp(3)}}>
                                    <Image
                                        source={require('../assets/images/Share.png')}
                                        style={{ height: 30, width: 30, resizeMode: 'contain', marginLeft: wp(2),tintColor: "#889291"}}
                                    />
                                    <Text style={{fontSize: 14, color: "#47504f", textAlign:"center"}}>Share & Upload & Fex</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{height: "80%", width: 1, backgroundColor: "#47504f"}}></View>
                            <View style={{width: "48%", height: "100%",alignItems:"center"}}>
                                <TouchableOpacity style= {{justifyContent:"center", alignItems:"center", width: "60%", marginTop: hp(3)}}>
                                    <Image
                                        source={require('../assets/images/Registerd-account.png')}
                                        style={{ height: 30, width: 30, resizeMode: 'contain', marginLeft: wp(2),tintColor: "#889291"}}
                                    />
                                    <Text style={{fontSize: 14, color: "#47504f", textAlign:"center"}}>Download & Purchase </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style= {{justifyContent:"center", alignItems:"center", width: "60%",marginTop: hp(3)}}>
                                    <Image
                                        source={require('../assets/images/Edit.png')}
                                        style={{ height: 30, width: 30, resizeMode: 'contain', marginLeft: wp(2),tintColor: "#889291"}}
                                    />
                                    <Text style={{fontSize: 14, color: "#47504f", textAlign:"center"}}>Create file & Store</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style= {{justifyContent:"center", alignItems:"center", width: "60%",marginTop: hp(3)}}>
                                    <Image
                                        source={require('../assets/images/Backup.png')}
                                        style={{ height: 30, width: 30, resizeMode: 'contain', marginLeft: wp(2),tintColor: "#889291"}}
                                    />
                                    <Text style={{fontSize: 14, color: "#47504f", textAlign:"center"}}>Share & Upload & Fex</Text>
                                </TouchableOpacity>
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
    }
});

export default HelpView;