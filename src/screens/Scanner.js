import React, { Component } from "react"
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    ToastAndroid
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import {
    Grayscale,
    Sepia,
    Tint,
    ColorMatrix,
    concatColorMatrices,
    invert,
    contrast,
    saturate,
    brightness,
    grayscale,
    night,
} from 'react-native-color-matrix-image-filters';
import ViewShot from "react-native-view-shot";
import CameraRoll from "@react-native-community/cameraroll";
import ImgToBase64 from 'react-native-image-base64';
// import toPDF from './imageToPdf.js'
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from "react-native-share";
// import RNShareFile from 'react-native-share-pdf';



class Scanner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: '',
            scanImgUri: '',
            isEnable: false,
            category: '',
            number: 1,
            html: '',
            imageBase: '',
            isTrue: false,
            isSave: false,
            isShare: false,
            isImageSavedAsPng: false,
            isImageSavedAsPdf: false,
            pdfPath : '',
            mode: "update",
            alreadySave: false
        };
    }

    componentDidMount() {
        var image = this.props.navigation.state.params.image;
        var category = this.props.navigation.state.params.category;
        // console.log(image);
        this.setState({
            image: image,
            category: category,
        })

        setTimeout(()=>{
            //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
            this.setState({
                mode: "mount"
            })
      
        }, 2000);
    }

    onCapture = uri => {
        console.log("do something with ", uri);
        this.setState({
            scanImgUri: uri,
            html: '<img src="' + uri + '" style = "height: 500px, width: 200px" />'
        })
    }

    showToast = (message) => {
        if (Platform.OS === 'ios')
        {
            alert(message)
        }
        else 
        {
            ToastAndroid.showWithGravityAndOffset(
                message,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            );
        }
    };

    shareAsPng() {
        if (this.state.alreadySave == false) {
            this.setState({ isEnable: true });
            var tag = this.state.scanImgUri
        // console.log(tag);
            CameraRoll.save(tag, { type: "photo", album: this.state.category })
                .then(this.sharePng())
            this.setState({ alreadySave: true})
            this.showToast("Image Saved");
        } else {
            this.sharePng();
        }
    }
    pdfAsImageSave() {
        if (this.state.alreadySave == false){
            var tag = this.state.scanImgUri
            CameraRoll.save(tag, { type: "photo", album: this.state.category })
            this.showToast("Image Saved");
        }
    }

    saveImage(){
        if (this.state.alreadySave == false) {
            var tag = this.state.scanImgUri
            CameraRoll.save(tag, { type: "photo", album: this.state.category })
            this.setState({
                alreadySave: true,
            })

            setTimeout(()=>{
                //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
                this.setState({
                    isLoader: false
                })
                this.showToast("Image Saved");
          
            }, 2000);
        } else {
            this.setState({
                isLoader: false
            })
            this.showToast("Image already Saved");
        }
    }

    imageSavedAsPng() {
        var tag = this.state.scanImgUri
        CameraRoll.save(tag, { type: "photo", album: this.state.category })
        this.setState({
            isImageSavedAsPng: true
        })
    }

    sharePng() {
        Share.open({
            message: "Share as PNG",
            url: `file://${this.state.scanImgUri}`,
            showAppsToview: true
        })
    }

    indicatorFunction =(value) => {
        if (value == "pdf") {
            this.setState({
                isTrue: true
            })
        } else {
            this.setState({
                isLoader: true
            })
        }
    }

    async imageToBase64() {
        ImgToBase64.getBase64String(this.state.scanImgUri)
            .then(base64String => {
                // console.log(base64String);
                this.setState({
                    imageBase: base64String
                })
                this.generatePdf();
            }
            )
            .catch(err => doSomethingWith(err));


    }

    async generatePdf() {
        if (this.state.pdfPath == "") {
            const options = {
                html: '<div style="height: 100%; width: 100%; display: flex; align-items: center; justify-content: center;"> <img src="data:image/png;base64,' + this.state.imageBase + '" style = "width: 80%"/></div>',
                fileName: 'NewPDf',
                height: 1122,
                width: 794,
                // padding: 24,
            };

            await RNHTMLtoPDF.convert(options).then(filePath => {
                // console.log('PDF generated ****', filePath.filePath);

                this.setState({
                    isTrue: false
                })

                this.pdfAsImageSave();

                this.setState({
                    pdfPath: filePath.filePath
                })
                this.sharePdf();
                // console.log(this.state.isTrue, "#################.")

                // here to add function for sharing file
                // console.log("Time to share file *****************************")
            });
        } else {
            this.setState({
                isTrue: false
            })
            this.sharePdf();
        }


    }

    sharePdf(){
        Share.open({
            message: "This is to be shared",
            url: `file://${this.state.pdfPath}`,
            showAppsToview: true
        })
        .then((res)=> {console.log(res)})
        .catch((err) => { err && console.log(err); });
    }

    cancelFunction() {
        this.props.navigation.goBack()
    }

    render() {
        
        return (
            <View style={{ flex: 1, width: "100%", alignItems: "center", backgroundColor: '#fff' }}>
                <View style = {styles.header}>

                </View>
                <View style={styles.scanner}>
                    <ColorMatrix
                        matrix={concatColorMatrices([saturate(0.05), contrast(1.3), brightness(1.3)])}
                    >
                        <ViewShot onCapture={this.onCapture} captureMode={this.state.mode} style={styles.scanner}>
                            <View style={[styles.scanner, { height: '100%' }]}>
                                <ColorMatrix
                                    matrix={concatColorMatrices([saturate(0.05), contrast(1.3), brightness(1.3)])}
                                >

                                    <Image source={{ uri: this.state.image }} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                                </ColorMatrix>
                            </View>
                        </ViewShot>
                    </ColorMatrix>
                </View>

                <View style = {styles.footer}>
                    <TouchableOpacity style = {{flexDirection: 'column', height: '80%', justifyContent: 'space-around',  alignItems: 'center'}} onPress={() => this.shareAsPng()}>
                        <Image 
                            source = {require('../assets/images/Share2.png')}
                            style = {{height: hp(4), width: wp(8), resizeMode: 'contain'}}
                        >
                        </Image>
                        <Text style ={{fontSize: 12, color: '#fff'}}>Share as PNG</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {{flexDirection: 'column', height: '80%', justifyContent: 'space-around',  alignItems: 'center'}} onPress={() => {this.indicatorFunction("pdf"); this.imageToBase64();}}>
                        <Image 
                            source = {require('../assets/images/PDF.png')}
                            style = {{height: hp(4), width: wp(8), resizeMode: 'contain'}}
                        >
                        </Image>
                        <Text style ={{fontSize: 12, color: '#fff'}}>Share as PDF</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flexDirection: 'column', height: '80%', justifyContent: 'space-around',  alignItems: 'center'}} onPress={() => {this.indicatorFunction("save"); this.saveImage();}}>
                        <Image 
                            source = {require('../assets/images/Saved.png')}
                            style = {{height: hp(4), width: wp(8), resizeMode: 'contain'}}
                        >
                        </Image>
                        <Text style ={{fontSize: 12, color: '#fff'}}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flexDirection: 'column', height: '80%', justifyContent: 'space-around',  alignItems: 'center', marginTop: hp(0.5)}}  onPress={() => this.cancelFunction()}>
                        <Image 
                            source = {require('../assets/images/Cancel.png')}
                            style = {{height: hp(3), width: wp(6), resizeMode: 'contain'}}
                        >
                        </Image>
                        <Text style ={{fontSize: 12, color: '#fff'}}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                {this.state.isTrue == true ? (
                    <View style={styles.loaderView}>
                        <ActivityIndicator size="large" color="#166883" />
                        <Text style={{ marginTop: hp(2), color: '#166883', fontSize: 16 }}>Generating PDF, please wait..</Text>
                    </View>
                ) : (
                        null
                    )}

                {this.state.isLoader == true ? (
                    <View style={styles.loaderView}>
                        <ActivityIndicator size="large" color="#166883" />
                        {/* <Text style={{ marginTop: hp(2), color: '#166883', fontSize: 16 }}>Generating PDF, please wait..</Text> */}
                    </View>
                ) : (
                        null
                    )}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: hp(12),
        backgroundColor: '#4fc9f0',
    },
    scanner: {
        // flex: 1,
        width: "100%",
        height: "78%",
        backgroundColor: "#fff",
        // marginTop: hp(2),
        justifyContent: 'center',
        // alignItems: 'center',
        // alignContent: 'center',
        // backfaceVisibility: 'hidden'
    },
    footer: {
        width: '100%',
        height: hp(10),
        backgroundColor: '#4fc9f0',
        flexDirection: 'row',
        paddingLeft: wp(6),
        paddingRight: wp(6),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        alignSelf: "center",
        // position: 'absolute',
        height: 40,
        width: 40,
        borderRadius: 20,
        marginLeft: 25,
        // bottom: hp(6),
        // right: wp(8),
        backgroundColor: '#166883',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#c1c7c7',
        elevation: 3,
        // shadowRadius: 3.84
    },
    buttonTwo: {
        alignSelf: "center",
        position: "absolute",
        bottom: 32,
        backgroundColor: '#88e3d7',
        borderRadius: 8,
        height: hp(7),
        width: wp(30),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#c1c7c7',
        elevation: 6,
        shadowRadius: 3.84
    },
    buttonText: {
        fontSize: 18,
        opacity: 0.7,
        color: '#000',
        // fontWeight: '700'
    },
    preview: {
        // flex: 1,
        width: "100%",
        height: "80%",
        resizeMode: "cover",
    },
    permissions: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    CameraIconStyle: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    loaderView: {
        height: hp(44),
        width: wp(100),
        alignSelf: 'center',
        // backgroundColor: '#c5c9d1',
        marginTop: hp(50),
        position: 'absolute',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Scanner;
