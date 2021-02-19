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
    FlatList,
    StatusBar,

} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
// import Torch from 'react-native-torch';
import { RNCamera } from 'react-native-camera';
import AmazingCropper from 'react-native-amazing-cropper';
class CameraLike extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flash: RNCamera.Constants.FlashMode.off ,
            FlatList: [
                {
                    value: "OCR"
                },
                {
                    value: "Docs"
                },
                {
                    value: "ID Card"
                },
                {
                    value: "Book"
                },
                {
                    value: "Question Book"
                },
            ],
            itemIndex: 3,
            imageCrop: '',
            imgHeight: null,
            imgWidth: null,
            categorySelected: ''
        }
    }

    componentDidMount() {
        this.setState({
            categorySelected: this.state.FlatList[this.state.itemIndex].value
        })

        console.log(this.state.FlatList[this.state.itemIndex].value);
    }

    itemSelected = (index) => {
        this.setState({
            itemIndex: index,
            categorySelected: this.state.FlatList[index].value
        });
        console.log(this.state.FlatList[index].value);
    }

    flashHandle = () => {
        if (this.state.flash == RNCamera.Constants.FlashMode.off) {
            this.setState({
                flash: RNCamera.Constants.FlashMode.on
            })
        } else {
            this.setState({
                flash: RNCamera.Constants.FlashMode.off
            })
        }
        console.log("Flash pressed")
    }

    

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 1.0, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data);
            // this.cropImage(data);
            this.setState({
                imageCrop: data.uri,
                imgHeight: data.height,
                imgWidth: data.width
            })
        }
    };

    onDone = (croppedImageUri) => {
        console.log('croppedImageUri = ', croppedImageUri);
        // send image to server for example
        this.props.navigation.navigate("Scanner", { image: croppedImageUri, category: this.state.categorySelected });
        this.onCancel();
    }

    onCancel = () => {
        console.log('Cancel button was pressed');
        this.setState({
            imageCrop: '',
            imgWidth: null,
            imgHeight: null
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Fragment>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                {this.state.imageCrop != "" ?
                    (
                        <AmazingCropper
                            onDone={this.onDone}
                            // onError={this.onError}
                            onCancel={this.onCancel}
                            imageUri={this.state.imageCrop}
                            imageWidth={this.state.imgWidth}
                            imageHeight={this.state.imgHeight}
                            NOT_SELECTED_AREA_OPACITY={0.3}
                            BORDER_WIDTH={20}
                        />
                    ) : (
                        <View style={{ backgroundColor: '#fff', flex: 1, alignItems: "center" }}>
                            <View style={styles.header}>
                                <TouchableOpacity activeOpacity={0.6}
                                    onPress={()=> this.flashHandle()}
                                >
                                    {this.state.flash == RNCamera.Constants.FlashMode.off ? (
                                         <Image
                                        source={require('../assets/images/flashOff.png')}
                                        style={[styles.headerIcon, {tintColor: '#fff', height: hp(4), width: wp(8)}]}
                                    />
                                    ):(
                                        <Image
                                        source={require('../assets/images/flashOn.png')}
                                        style={[styles.headerIcon, {tintColor: '#fff'}]}
                                    />
                                    )}
                                   
                                </TouchableOpacity>

                                {/* <TouchableOpacity activeOpacity={0.6}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: wp(5) }}>HD</Text>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.6}>
                                    <Image
                                        source={require('../assets/images/Scan2.png')}
                                        style={styles.headerIcon}
                                    />
                                </TouchableOpacity> */}

                                {/* <TouchableOpacity activeOpacity={0.6}>
                                    <Image
                                        source={require('../assets/images/Advance.png')}
                                        style={styles.headerIcon}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.6}>
                                    <Image
                                        source={require('../assets/images/Doted-Menu.png')}
                                        style={styles.headerIcon}
                                    />
                                </TouchableOpacity> */}


                            </View>

                            {/* <View style={{}}> */}
                            <RNCamera
                                ref={ref => {
                                    this.camera = ref;
                                }}
                                style={{
                                    // flex: 1,
                                    width: '100%',
                                    height: hp(64),
                                    marginTop: hp(0),
                                    overflow: "hidden"
                                }}
                                // type={RNCamera.Constants.Type.back}
                                flashMode={this.state.flash}

                            >
                            </RNCamera>
                            {/* </View> */}
                            <View style={styles.MiddleTab}>
                                <FlatList
                                    //data defined in constructor
                                    data={this.state.FlatList}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}

                                    //Item Separator View
                                    ItemSeparatorComponent={this.ItemSeparator}

                                    renderItem={({ item, index }) => (
                                        // List Comes here which will be repeatative for the FlatListItems


                                        <TouchableOpacity
                                            onPress={() => this.itemSelected(index)}
                                            style={{ height: '100%', flexDirection: 'row', marginRight: wp(8), marginLeft: wp(1) }}>
                                            {this.state.itemIndex == index ? (
                                                <View style={{ height: hp(6), justifyContent: 'center', borderTopWidth: 1.5, borderTopColor: "#0b5980" }}>
                                                    <Text style={{ color: '#0b5980', fontSize: wp(3.7), }}>{item.value}</Text>
                                                </View>
                                            ) : (
                                                    <View style={{ height: hp(6), justifyContent: 'center', }}>
                                                        <Text style={{ color: 'white', fontSize: wp(3.7) }}>{item.value}</Text>
                                                    </View>
                                                )}
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>

                            <View style={styles.LastView}>
                                {/* <TouchableOpacity>
                                    <Image
                                        source={require('../assets/images/Image2.png')}
                                        style={styles.headerIcon}
                                    />
                                </TouchableOpacity> */}
                                <TouchableOpacity style={{ backgroundColor: '#0b5980', height: 40, width: 40, borderRadius: 40, justifyContent: 'center', alignItems: 'center', left: wp(19) }} onPress={this.takePicture.bind(this)}>
                                    <Image
                                        source={require('../assets/images/Camera.png')}
                                        style={styles.headerIcon}
                                    />
                                </TouchableOpacity>
                                {/* <TouchableOpacity style={{ marginLeft: wp(12) }}>
                                    <Image
                                        source={require('../assets/images/Image2.png')}
                                        style={styles.headerIcon}
                                    />
                                </TouchableOpacity> */}
                                {/* <TouchableOpacity style={{ marginLeft: wp(7), height: hp(3), width: wp(7.5), borderRadius: 4, backgroundColor: 'white' }}>
                                   
                                </TouchableOpacity> */}
                            </View>
                        </View>
                    )
                }

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
        // justifyContent: 'center',
        justifyContent: 'space-between',
        paddingLeft: wp(4),
        paddingRight: wp(2),
        paddingTop: hp(3.8),
    },
    headerIcon: {
        height: hp(3.5),
        width: wp(7),
        resizeMode: 'contain'
    },
    MiddleTab: {
        // position: 'absolute',
        width: '100%',
        height: hp(6),
        backgroundColor: '#4fc9f0',
        // marginTop: hp(65),
        flexDirection: 'row',
        // backgroundColor: '#ff0',
        alignItems: 'center',
        bottom: hp(0)
    },
    LastView: {
        // position: 'absolute',
        width: '100%',
        height: hp(18),
        backgroundColor: '#4fc9f0',
        // marginTop: hp(70),
        // justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: wp(24),
        // alignContent: 'center'
        bottom: hp(0)
    }
})

export default CameraLike;