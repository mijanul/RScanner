/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {DrawerActions} from 'react-navigation-drawer';
import MainContainer from './MainContainer';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

class MenuView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        sign: false,
        selectedMenu : "Screen1"
      };
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
    this.setState({
      selectedMenu: route
    });
  }

  render () {
    return (
      <Fragment>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <View style={[styles.container, {}]}>

        {this.state.sign == true ? (
          <View>
            <View style={styles.signedView}>
              <View style={{ height: 45, width: 45, borderRadius: 45, backgroundColor: "#c5e7f2", justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  source={require('../assets/images/Profile.png')}
                  style={styles.iconStyle}
                ></Image>
              </View>
              <View style={{ flexDirection: 'column', marginLeft: wp(4), height: hp(7.5), justifyContent: 'space-between', marginTop: hp(-0.5) }}>
                <View>
                  <Text style={{ color: '#fff', fontSize: 18 }}>7278343654</Text>
                </View>
                <TouchableOpacity style={{ width: wp(50), height: hp(3), borderRadius: 15, backgroundColor: "#2da9d2", justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#fff', fontSize: 13 }}>Upgrade to enjoy Premium</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style = {{width: '100%', height: hp(8), backgroundColor: '#4fc9f0', paddingLeft: wp(5), paddingRight: wp(2)}}>
              <View style = {{width: '100%', height: hp(4), flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
                <Text style = {{fontSize: 13, color: '#fff'}}>Cloud space: 0KB/200.00MB</Text>
                <TouchableOpacity style = {{flexDirection: 'row', height: hp(3), borderRadius: 12, width: wp(22), backgroundColor: '#2da9d2', alignItems: 'center', paddingLeft: wp(2), paddingRight: wp(2)}}>
                  <Image
                    source = {require('../assets/images/CrownWhite.png')}
                    style = {{height: 12, width: 12, resizeMode: 'contain'}}
                  ></Image>
                  <Text style = {{fontSize: 12, color: '#fff', marginLeft: wp(1)}}>Upgrade</Text>
                </TouchableOpacity>
              </View>
              <View style = {{width: '100%', height: 3, backgroundColor: '#fff', marginTop: hp(1)}}></View>
            </View>
            
          </View>
        ) : (
            <View style={styles.unsignedView}>
              <View style={{ height: 45, width: 45, borderRadius: 45, backgroundColor: "#c5e7f2", justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  source={require('../assets/images/Profile.png')}
                  style={styles.iconStyle}
                ></Image>
              </View>
              <View style={{ flexDirection: 'column', marginLeft: wp(4), height: hp(7.5), justifyContent: 'space-between', marginTop: hp(-0.5) }}>
                <TouchableOpacity onPress= {this.navigateToScreen('Login')}>
                  <Text style={{ color: '#fff', fontSize: 18 }}>Sign in/Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: wp(35), height: hp(3), borderRadius: 15, backgroundColor: "#2da9d2", justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#fff', fontSize: 13 }}>Sign in to sync docs</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

        <ScrollView style={{ height: '100%', width: '100%' }}>
          <TouchableOpacity style={styles.rowView} onPress= {this.navigateToScreen('Screen1')}>
            <Image
              source={require('../assets/images/FileManager-2.png')}
              style={styles.iconStyle}
            >

            </Image>
            {this.state.selectedMenu == "Screen1" ? (
              <Text style={[styles.textStyle, { color: '#4fc9f0' }]}>All docs</Text>
            ): (
              <Text style={[styles.textStyle, { color: '#000' }]}>All docs</Text>
            )}
            
          </TouchableOpacity>

          <TouchableOpacity style={[styles.rowView, { marginTop: hp(1) }]}>
            <Image
              source={require('../assets/images/Sync.png')}
              style={[styles.iconStyle, {}]}
            >

            </Image>
            {this.state.selectedMenu == "Screen2" ? (
              <Text style={[styles.textStyle, { color: '#4fc9f0' }]}>Cloud Files</Text>
            ): (
              <Text style={[styles.textStyle, { color: '#000' }]}>Cloud Files</Text>
            )}
            {/* <Text style={[styles.textStyle, {}]}></Text> */}
          </TouchableOpacity>

          <TouchableOpacity style={[styles.rowView, { marginTop: hp(1) }]} onPress= {this.navigateToScreen('Screen3')}>
            <Image
              source={require('../assets/images/SharedFolder.png')}
              style={[styles.iconStyle, {}]}
            >

            </Image>
            {this.state.selectedMenu == "Screen3" ? (
              <Text style={[styles.textStyle, { color: '#4fc9f0' }]}>Shared with me</Text>
            ): (
              <Text style={[styles.textStyle, { color: '#000' }]}>Shared with me</Text>
            )}
            {/* <Text style={[styles.textStyle, {}]}>Shared with me</Text> */}
          </TouchableOpacity>

          <TouchableOpacity style={[styles.rowView, { marginTop: hp(1) }]} onPress= {this.navigateToScreen('Screen4')}>
            <Image
              source={require('../assets/images/Tags.png')}
              style={[styles.iconStyle, {}]}
            >

            </Image>
            {this.state.selectedMenu == "Screen4" ? (
              <Text style={[styles.textStyle, { color: '#4fc9f0' }]}>Tags</Text>
            ): (
              <Text style={[styles.textStyle, { color: '#000' }]}>Tags</Text>
            )}
            {/* <Text style={[styles.textStyle, {}]}>Tags</Text> */}
          </TouchableOpacity>

          <View style={{ width: '100%', height: 0.7, backgroundColor: '#757575', marginTop: hp(3) }}></View>

          <TouchableOpacity style={[styles.touchTwo, {}]}>
            <Text style={[styles.textStyle, { marginLeft: 0, color: '#ffa200' }]}>Premium Free Trial</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.touchTwo, {}]} onPress= {this.navigateToScreen('Screen5')}>
            {this.state.selectedMenu == "Screen5" ? (
              <Text style={[styles.textStyle, { marginLeft: 0, color: '#4fc9f0'  }]}>Refer to Earn</Text>
            ): (
              <Text style={[styles.textStyle, {marginLeft: 0, color: '#000' }]}>Refer to Earn</Text>
            )}
            {/* <Text style={[styles.textStyle, { marginLeft: 0, }]}>Refer to Earn</Text> */}
            <Image
              source={require('../assets/images/fire.png')}
              style={styles.iconStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.touchTwo, {}]}>
            {this.state.selectedMenu == "Screen6" ? (
              <Text style={[styles.textStyle, { marginLeft: 0, color: '#4fc9f0'  }]}>Notifications</Text>
            ): (
              <Text style={[styles.textStyle, {marginLeft: 0, color: '#000' }]}>Notifications</Text>
            )}
            {/* <Text style={[styles.textStyle, { marginLeft: 0, }]}>Notifications</Text> */}
          </TouchableOpacity>

          <TouchableOpacity style={[styles.touchTwo, {}]} onPress= {this.navigateToScreen('Screen8')}>
            {this.state.selectedMenu == "Screen8" ? (
              <Text style={[styles.textStyle, { marginLeft: 0, color: '#4fc9f0'  }]}>Business version</Text>
            ): (
              <Text style={[styles.textStyle, {marginLeft: 0, color: '#000' }]}>Business version</Text>
            )}
            {/* <Text style={[styles.textStyle, { marginLeft: 0, }]}>Business version</Text> */}
            <TouchableOpacity style={{ width: wp(12), height: hp(3), justifyContent: 'center', alignItems: 'center', backgroundColor: '#4fc9f0', borderRadius: 10 }}>
              <Text style={{ color: '#fff', fontSize: 13 }}>New</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.touchTwo, {}]} onPress= {this.navigateToScreen('Screen9')}>
            {this.state.selectedMenu == "Screen9" ? (
              <Text style={[styles.textStyle, { marginLeft: 0, color: '#4fc9f0'  }]}>Settings</Text>
            ): (
              <Text style={[styles.textStyle, {marginLeft: 0, color: '#000' }]}>Settings</Text>
            )}
            {/* <Text style={[styles.textStyle, { marginLeft: 0, }]}>Settings</Text> */}
          </TouchableOpacity>

          <TouchableOpacity style={[styles.touchTwo, {}]} onPress= {this.navigateToScreen('Screen10')}>
            {this.state.selectedMenu == "Screen10" ? (
              <Text style={[styles.textStyle, { marginLeft: 0, color: '#4fc9f0'  }]}>Help</Text>
            ): (
              <Text style={[styles.textStyle, {marginLeft: 0, color: '#000' }]}>Help</Text>
            )}
            {/* <Text style={[styles.textStyle, { marginLeft: 0, }]}>Help</Text> */}
          </TouchableOpacity>

        </ScrollView>

      </View>
    </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  unsignedView: {
    width: '100%',
    height: hp(18),
    backgroundColor: '#4fc9f0',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: wp(5),
    paddingTop: hp(4)
  },
  signedView: {
    width: '100%',
    height: hp(14),
    backgroundColor: '#4fc9f0',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: wp(5),
    marginTop: hp(2)
  },
  iconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',

  },
  rowView: {
    flexDirection: 'row',
    paddingLeft: wp(5),
    marginTop: hp(2),
    width: wp(60),
    height: hp(6),
    // backgroundColor: '#ff0',
    // justifyContent: 'space-between',
    alignItems: 'center'
  },
  rowTwo: {
    flexDirection: 'row',
    paddingLeft: wp(5),
    marginTop: hp(1),
    width: '100%',
    height: hp(6),
    // backgroundColor: '#ff0',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: wp(8)
  },
  touchTwo: {
    flexDirection: 'row',
    paddingLeft: wp(5),
    marginTop: hp(1),
    width: '100%',
    height: hp(6),
    // backgroundColor: '#ff0',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: wp(8)
  },
  textStyle: {
    fontSize: 16,
    marginLeft: wp(8.5)
  },
  touchText: {
    paddingLeft: wp(5),
    marginTop: hp(3),
    height: hp(3.7)
  }

});



MenuView.propTypes = {
  navigation: PropTypes.object
};


export default MenuView;
