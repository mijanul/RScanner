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


class TagView extends React.Component {
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
                    <View style={{flexDirection: "row", width: "80%", alignItems: "center", justifyContent: "space-between"}}>
                        <Text style={{ alignSelf: 'center', marginTop: hp(3.5), color: 'white', fontSize: 18, marginLeft: wp(1) }}>Tags</Text>
                        <Image
                            source={require('../assets/images/Edited.png')}
                            style={{ height: 20, width: 20, resizeMode: 'contain',marginTop: hp(3.8) }}
                        />
                    </View>
                </View>
                <View style={{height: "88%", width: "88%", marginTop: hp(4)}}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.touchBox}>
                        <View style={styles.icon}>
                            <Text></Text>
                        </View>
                        <Text style={styles.text}>Ungrouped</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1 }]}>
                        <View style={styles.icon}>
                                <Text style={{fontSize: 14}}>B</Text>
                        </View>
                        <Text style={styles.text}>Business Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1 }]}>
                        <View style={styles.icon}>
                                <Text style={{fontSize: 14}}>I</Text>
                        </View>
                        <Text style={styles.text}>ID Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1 }]}>
                        <View style={styles.icon}>
                                <Text style={{fontSize: 14}}>N</Text>
                        </View>
                        <Text style={styles.text}>Note</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1 }]}>
                        <View style={styles.icon}>
                                <Text style={{fontSize: 14}}>P</Text>
                        </View>
                        <Text style={styles.text}>PPT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.touchBox, { marginTop: 1 }]}>
                        <View style={styles.icon}>
                                <Text style={{fontSize: 14}}>W</Text>
                        </View>
                        <Text style={styles.text}>Whiteboard</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity = {0.72}
                        style = {styles.FloatingCamera}
                        onPress = {()=> navigate('TagView')}
                    >
                        <Image 
                            source = {require('../assets/images/Add.png')}
                            style = {styles.CameraIconStyle}
                        />
                            
                        
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
    },
    touchBox: {
        width: wp(100),
        height: hp(7.5),
        flexDirection: 'row',
        backgroundColor: '#fff',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginLeft: wp(8),
        fontSize: 14
    },
    icon: {
        height: hp(3.5),
        width: wp(7),
        alignItems: "center",
        justifyContent: "center"
        // marginLeft: wp(4)
    },
    FloatingCamera: {
        position: 'absolute',
        height: 50,
        width: 50,
        borderRadius: 25,
        bottom: hp(8),
        right: wp(2),
        backgroundColor: '#889291',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#c1c7c7',
        elevation: 3,
        shadowRadius: 3
    },
    CameraIconStyle: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    }
});

export default TagView;