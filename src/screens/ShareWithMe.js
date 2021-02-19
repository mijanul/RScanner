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


class ShareWithMe extends React.Component {
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
                            <Text style={{ alignSelf: 'center', marginTop: hp(3.5), color: 'white', fontSize: 18, marginLeft: wp(1) }}>Share With Me</Text>
                            <Image
                                source={require('../assets/images/GridV.png')}
                                style={{ height: 20, width: 20, resizeMode: 'contain',marginTop: hp(3.8) }}
                            />
                        </View>
                    </View>
                    <View style={{ width: '88%', height: "88%", marginTop: 0, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/images/Grid.png')}
                            style={{ height: 40, width: 40, resizeMode: 'contain', marginTop: hp(-3) }}
                        />
                        <Text style={{textAlign: "center", color: '#47504f', fontSize: 15, marginTop: hp(3) }}>Open a document in 'My Doc' and start inviting friends to view and comment on it</Text>
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

export default ShareWithMe;