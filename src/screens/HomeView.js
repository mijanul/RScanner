import React, { Fragment, Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Platform,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    YellowBox,
    StatusBar,
    TextInput,
    FlatList,
    BackHandler,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { color } from 'react-native-reanimated';
import CameraRoll from "@react-native-community/cameraroll";
import Share from 'react-native-share';
import RNShareFile from 'react-native-share-pdf';
import ImgToBase64 from 'react-native-image-base64';
import RNHTMLtoPDF from 'react-native-html-to-pdf';


class HomeView extends Component {
    static navigationOptions = {
        headerShown: false
    };

    constructor(props) {
        super(props);
        this.state = {
            isDotPressed: false,
            forDropdown: false,
            text: 'All Docs (0)',
            FlatList: [],
            image: [],
            imageArr: [],
            allCount: 0,
            allImgArr: [],
            isImageView: false,
            scanImgUri: '',
            isAsPdf: false,
            html: '',
            imageBase: '',
            pdfPath: ''

        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentWillMount() {
        console.log("Will mount");
        this.getImage();
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        console.log("Will Unmount");
        this.focusListner.remove();
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick = () => {
        return true;
    }

    componentDidMount() {
        this.getImage();
        this.focusListner = this.props.navigation.addListener("didFocus", () => {
            // Update your data
            this.getImage();
            console.log("Is focused");
            this.setState({
                forDropdown: false,
                isDotPressed: false,
                isImageView: false
            })
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        });
    }

    getImage() {
        const fetchParams = {
            first: 35,
            groupTypes: 'SavedPhotos',
            assetType: 'Photos',
        };
        CameraRoll.getPhotos(fetchParams).then((data) => {
            this.appendAssets(data);
        }).catch((e) => {
            console.log(e);
        });
    }

    appendAssets(data) {
        this.setState({
            imageArr: []
        })
        const assets = data.edges;
        var arr = this.state.imageArr
        var allCount = 0
        this.setState({ allImgArr: assets });
        if (assets.length > 0) {
            for (let i = 0; i < assets.length; i++) {
                let val = assets[i].node.group_name
                if (val == "Book" || val == "Docs" || val == "ID Card" || val == "OCR" || val == "Question Book") {
                    arr.push(assets[i].node.image)
                    allCount = allCount + 1;
                    // console.log(assets[i].node.image)
                }
            }
        }

        this.setState({
            imageArr: arr,
            text: "All (" + allCount + ")"
        })
        var bookCount = 0
        var idCardCount = 0
        var docsCount = 0
        var ocrCount = 0
        var qusCount = 0
        if (assets.length > 0) {
            for (let i = 0; i < assets.length; i++) {
                let val = assets[i].node.group_name
                if (val == "Book") {
                    // arr.push(assets[i].node.image)
                    bookCount = bookCount + 1;
                }
                if (val == "ID Card") {
                    idCardCount = idCardCount + 1;
                }
                if (val == "Docs") {
                    docsCount = docsCount + 1;
                }
                if (val == "OCR") {
                    ocrCount = ocrCount + 1;
                }
                if (val == "Question Book") {
                    qusCount = qusCount + 1;
                }
            }
        }

        this.setState({
            FlatList: [
                {
                    value: 'All (' + allCount + ')',
                },
                {
                    value: 'Docs (' + docsCount + ')'
                },
                {
                    value: 'Book (' + bookCount + ')',
                },
                {
                    value: 'ID Card (' + idCardCount + ')',
                },
                {
                    value: 'OCR (' + ocrCount + ')',
                },
                {
                    value: 'Question Book (' + qusCount + ')',
                },
            ]
        })
    }

    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigation.toggleDrawer();
    };

    dotPressed() {
        if (this.state.isDotPressed == false) {
            this.setState({
                isDotPressed: true
            })
            this.setState({
                forDropdown: false
            })
        } else {
            this.setState({
                isDotPressed: false
            })
        }
    }

    dropdownPressed() {
        if (this.state.forDropdown == false) {
            this.setState({
                forDropdown: true
            })
        } else {
            this.setState({
                forDropdown: false
            })
        }
        if (this.state.isDotPressed == true){
            this.setState({
                isDotPressed: false
            })
        }

    }

    goScan() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
        this.props.navigation.navigate("Camera");
    }

    itemSelected = (item, index) => {
        this.setState({
            forDropdown: false,
            text: item.value,
            imageArr: []
        })
        if (index == 0) {
            this.setState({
                imageArr: []
            })

            var arr = []
            console.log(arr);
            if (this.state.allImgArr.length > 0) {
                for (let i = 0; i < this.state.allImgArr.length; i++) {
                    let val = this.state.allImgArr[i].node.group_name
                    if (val == "Book" || val == "Docs" || val == "ID Card" || val == "OCR" || val == "Question Book") {
                        arr.push(this.state.allImgArr[i].node.image)
                    }
                }
            }

            this.setState({
                imageArr: arr,
            })
        }
        if (index == 1) {
            this.setState({
                imageArr: []
            })
            var arr = []
            if (this.state.allImgArr.length > 0) {
                for (let i = 0; i < this.state.allImgArr.length; i++) {
                    let val = this.state.allImgArr[i].node.group_name
                    if ( val == "Docs") {
                        arr.push(this.state.allImgArr[i].node.image)
                    }
                }
            }
            this.setState({
                imageArr: arr,
            })
        }
        if (index == 2) {
            this.setState({
                imageArr: []
            })
            var arr = []
            if (this.state.allImgArr.length > 0) {
                for (let i = 0; i < this.state.allImgArr.length; i++) {
                    let val = this.state.allImgArr[i].node.group_name
                    if (val == "Book") {
                        arr.push(this.state.allImgArr[i].node.image)
                    }
                }
            }
            this.setState({
                imageArr: arr,
            })
        }
        if (index == 3) {
            this.setState({
                imageArr: []
            })
            var arr = []
            if (this.state.allImgArr.length > 0) {
                for (let i = 0; i < this.state.allImgArr.length; i++) {
                    let val = this.state.allImgArr[i].node.group_name
                    if (val == "ID Card") {
                        arr.push(this.state.allImgArr[i].node.image)
                    }
                }
            }
            this.setState({
                imageArr: arr,
            })
        }
        if (index == 4) {
            this.setState({
                imageArr: []
            })
            var arr = []
            if (this.state.allImgArr.length > 0) {
                for (let i = 0; i < this.state.allImgArr.length; i++) {
                    let val = this.state.allImgArr[i].node.group_name
                    if (val == "Docs") {
                        arr.push(this.state.allImgArr[i].node.image)
                    }
                }
            }
            this.setState({
                imageArr: arr,
            })
        }
        if (index == 5) {
            this.setState({
                imageArr: []
            })
            var arr = []
            if (this.state.allImgArr.length > 0) {
                for (let i = 0; i < this.state.allImgArr.length; i++) {
                    let val = this.state.allImgArr[i].node.group_name
                    if (val == "OCR") {
                        arr.push(this.state.allImgArr[i].node.image)
                    }
                }
            }
            this.setState({
                imageArr: arr,
            })
        }
        if (index == 6) {
            this.setState({
                imageArr: []
            })
            var arr = []
            if (this.state.allImgArr.length > 0) {
                for (let i = 0; i < this.state.allImgArr.length; i++) {
                    let val = this.state.allImgArr[i].node.group_name
                    if (val == "Question Book") {
                        arr.push(this.state.allImgArr[i].node.image)
                    }
                }
            }
            this.setState({
                imageArr: arr,
            })
        }
    }

    ItemSeparator = () => {
        return (
            //Item Separator
            <View
                style={{ marginTop: hp(0.5) }}
            />
        );
    };

    ItemSeparator1 = () => {
        return (
            //Item Separator
            <View
                style={{ marginTop: hp(2) }}
            />
        );
    };
    showItem = (item) => {
        // console.log(item, "***********")
        if (this.state.isImageView == true) {
            this.setState({
                isImageView: false,
                scanImgUri: item,
                html: '<img src="' + item + '" style = "height: 500px, width: 200px" />'
            })
        }
        else {
            this.setState({
                isImageView: true,
                scanImgUri: item,
                html: '<img src="' + item + '" style = "height: 500px, width: 200px" />'
            })
        }
        console.log(this.state.scanImgUri, "***********", this.state.html)
       this.setState({
           isAsPdf: false
       })

       if (this.state.isDotPressed == true) {
            this.setState({
                isDotPressed: false
            })
       }
       if (this.state.forDropdown == true){
            this.setState({
                forDropdown: false
            })
       }
    }
    closeView() {
        
        this.setState({
            isImageView: false,
            pdfPath: ''
        })
        
       
    }
    shareAsPng() {
        Share.open({
            message: "Share as PNG",
            url: `${this.state.scanImgUri}`,
            showAppsToview: true
        })

    }

    async shareAsPdf() {
        this.setState({
            isAsPdf: true
        })
        console.log(this.state.isAsPdf)

        ImgToBase64.getBase64String(this.state.scanImgUri)
            .then(base64String => {
                console.log(base64String);
                this.setState({
                    imageBase: base64String
                })
                // this.hello()
                this.savePDF()
                // console.log(this.state.imageBase, "*&*&*&*&")
            }
            )
            .catch(err => doSomethingWith(err));
    }

    // async hello() {
    //     console.log("hello")
    // }

    async savePDF() {
        if (this.state.pdfPath == "") {
        // console.log("hello")
            const options = {
                // html: this.state.html,
                html: '<div style="height: 100%; width: 100%; display: flex; align-items: center; justify-content: center;"> <img src="data:image/png;base64,'+this.state.imageBase+'" style = "width: 80%"/></div>',
                fileName: 'NewPDf',
                height: 1122,
                width: 794,
                // padding: 24,
            };

            // console.log(options, "*********************")

        

            await RNHTMLtoPDF.convert(options).then(filePath => {
                console.log('PDF generated ****', filePath.filePath);

            this.setState({
                isAsPdf: false
            })

            this.setState({
                pdfPath: filePath.filePath
            })
            this.pdfShare();

                // here to add function for sharing file
                console.log("Time to share file *****************************")
                
            });
        } else {
            this.setState({
                isAsPdf: false
            })
            this.pdfShare();
        }

        // this.props.navigation.goBack()
    }
    pdfShare(){
        Share.open({
            message: "Share As pdf",
            url: `file://${this.state.pdfPath}`,
            showAppsToview: true
        })
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <Fragment>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <View style={{ backgroundColor: '#fff', height: '100%', width: '100%' }}>
                    <View style={styles.header}>
                        <TouchableOpacity activeOpacity={0.6} onPress={this.toggleDrawer.bind(this)}>
                            <Image
                                source={require('../assets/images/Menu.png')}
                                style={{ height: 25, width: 50, resizeMode: 'contain', marginTop: hp(3.8), marginLeft: wp(0.6) }}
                            />
                        </TouchableOpacity>

                        <View style={{ width: wp(45), height: hp(12), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: 'white', marginTop: hp(3.5) }}>{this.state.text}</Text>
                            <TouchableOpacity onPress={() => this.dropdownPressed()}>
                                <Image
                                    source={require('../assets/images/DropDown.png')}
                                    style={{ height: 18, width: 18, resizeMode: 'contain', marginTop: hp(4), }}
                                ></Image>
                            </TouchableOpacity>
                        </View>


                        <TouchableOpacity>
                            <Image
                                source={require('../assets/images/Search.png')}
                                style={{ height: 15, width: 15, resizeMode: 'contain', marginTop: hp(3.8), marginLeft: wp(7) }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/images/Crown.png')}
                                style={{ height: 15, width: 15, resizeMode: 'contain', marginTop: hp(3.8), marginLeft: wp(6) }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image
                                source={require('../assets/images/Upload.png')}
                                style={{ height: 15, width: 15, resizeMode: 'contain', marginTop: hp(3.8), marginLeft: wp(5) }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.dotPressed()}>
                            <Image
                                source={require('../assets/images/Doted-Menu.png')}
                                style={{ height: 15, width: 15, resizeMode: 'contain', marginTop: hp(3.8), marginLeft: wp(4) }}
                            />
                        </TouchableOpacity>
                    </View>
                    {this.state.imageArr.length > 0 ? (
                        <View style={[styles.gridContainer, {}]}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: wp(0.7) }}>
                                    {this.state.imageArr.map((item, index) => {
                                        return (
                                            <TouchableOpacity style={{ height: hp(25), width: wp(32), marginTop: hp(1), marginRight: wp(0.7), borderWidth: 1, borderColor: "#4fc9f0", }} onPress={() => this.showItem(item.uri)}>
                                                <Image source={{ uri: item.uri }} style={{ height: '100%', width: '100%', resizeMode: 'contain' }}></Image>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </ScrollView>
                            {/* <FlatList
                                //data defined in constructor
                            data={this.state.imageArr}
                            showsVerticalScrollIndicator={false}

                            //Item Separator View
                            ItemSeparatorComponent={this.ItemSeparator1}

                            renderItem={({ item }) => (
                                // List Comes here which will be repeatative for the FlatListItems

                                <TouchableOpacity style={{ height: hp(15), width: wp(100),backgroundColor: "#e9ebf0", justifyContent: "center", alignItems: "center" }}>
                                    <Image source = {{uri: item.uri }} style={{height: "100%", width: "80%"}}/>
                                </TouchableOpacity>
                            )}
                        /> */}
                        </View>
                    ) : (null)}
                    {this.state.isDotPressed == true ? (
                        <View style={{ width: wp(70), height: hp(53), position: "absolute", backgroundColor: "#fff", elevation: 3, shadowColor: '#4fc9f0', marginLeft: wp(27), marginTop: hp(6), alignItems: "center" }}>
                            <View style={{ width: "88%", height: 40, alignItems: "flex-end", marginTop: 10 }}>
                                <TouchableOpacity onPress={() => this.dotPressed()}>
                                    <Image
                                        source={require('../assets/images/Cross2.png')}
                                        style={{ height: 20, width: 20, resizeMode: 'contain', right: wp(-1.7) }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: "100%", alignItems: "center", }}>
                                <TouchableOpacity style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 0 }}>
                                    <View style={{ width: "30%", alignItems: "center" }}>
                                        <Image
                                            source={require('../assets/images/Create-Folder.png')}
                                            style={{ height: 20, width: 20, resizeMode: 'contain' }}
                                        />
                                    </View>
                                    <View style={{ width: "70%" }}>
                                        <Text style={{ fontSize: 16 }}>Create new folder</Text>
                                    </View>

                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                                    <View style={{ width: "30%", alignItems: "center" }}>
                                        <Image
                                            source={require('../assets/images/Image.png')}
                                            style={{ height: 20, width: 20, resizeMode: 'contain' }}
                                        />
                                    </View>
                                    <View style={{ width: "70%" }}>
                                        <Text style={{ fontSize: 16 }}>Import from Gallery</Text>
                                    </View>

                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                                    <View style={{ width: "30%", alignItems: "center" }}>
                                        <Image
                                            source={require('../assets/images/Import-Files.png')}
                                            style={{ height: 20, width: 20, resizeMode: 'contain' }}
                                        />
                                    </View>
                                    <View style={{ width: "70%" }}>
                                        <Text style={{ fontSize: 16 }}>Import Files</Text>
                                    </View>

                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                                    <View style={{ width: "30%", alignItems: "center" }}>
                                        <Image
                                            source={require('../assets/images/Grid.png')}
                                            style={{ height: 20, width: 20, resizeMode: 'contain' }}
                                        />
                                    </View>
                                    <View style={{ width: "70%" }}>
                                        <Text style={{ fontSize: 16 }}>Grid View</Text>
                                    </View>

                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                                    <View style={{ width: "30%", alignItems: "center" }}>
                                        <Image
                                            source={require('../assets/images/Sort.png')}
                                            style={{ height: 20, width: 20, resizeMode: 'contain' }}
                                        />
                                    </View>
                                    <View style={{ width: "70%" }}>
                                        <Text style={{ fontSize: 16 }}>Sort by</Text>
                                    </View>

                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                                    <View style={{ width: "30%", alignItems: "center" }}>
                                        <Image
                                            source={require('../assets/images/Select.png')}
                                            style={{ height: 20, width: 20, resizeMode: 'contain' }}
                                        />
                                    </View>
                                    <View style={{ width: "70%" }}>
                                        <Text style={{ fontSize: 16 }}>Select</Text>
                                    </View>

                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                                    <View style={{ width: "30%", alignItems: "center" }}>
                                        <Image
                                            source={require('../assets/images/Cart.png')}
                                            style={{ height: 20, width: 20, resizeMode: 'contain' }}
                                        />
                                    </View>
                                    <View style={{ width: "70%" }}>
                                        <Text style={{ color: "#ffa200", fontSize: 16 }}>Premium</Text>
                                    </View>

                                </TouchableOpacity>

                            </View>
                        </View>
                    ) : (null)}

                    <TouchableOpacity
                        activeOpacity={0.72}
                        style={styles.FloatingCamera}
                        onPress={() => this.goScan()}
                    >
                        <Image
                            source={require('../assets/images/Camera.png')}
                            style={styles.CameraIconStyle}
                        />


                    </TouchableOpacity>

                    {this.state.forDropdown == true ? (
                        <View style={{ width: wp(70), height: hp(48.5), position: "absolute", backgroundColor: "#fff", elevation: 3, shadowColor: '#4fc9f0', marginLeft: wp(4), marginTop: hp(6), paddingLeft: wp(4) }}>
                            <FlatList
                                //data defined in constructor
                                data={this.state.FlatList}
                                showsVerticalScrollIndicator={false}

                                //Item Separator View
                                ItemSeparatorComponent={this.ItemSeparator}

                                renderItem={({ item, index }) => (
                                    // List Comes here which will be repeatative for the FlatListItems

                                    <TouchableOpacity style={{ height: hp(3.2), marginTop: hp(3) }} onPress={() => this.itemSelected(item, index)}>
                                        {this.state.text == item.value ? (
                                            <Text style={{ fontSize: 16, opacity: 0.8, color: '#4fc9f0' }}>{item.value}</Text>
                                        ) : (
                                                <Text style={{ fontSize: 16, opacity: 0.8 }}>{item.value}</Text>
                                            )}

                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    ) : (
                            null
                        )}

                    {this.state.isImageView == true ? (
                        <View style={{ height: hp(90), width: wp(93), backgroundColor: '#fff', elevation: 3, shadowColor: "#a3a0a0", shadowRadius: 0.5, borderWidth: 1, borderColor: "#4fc9f0", position: 'absolute', alignSelf: 'center', marginTop: hp(7) }}>
                            <View style={{ width: '100%', height: '7%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.closeView()}>
                                    <Image source={require('../assets/images/Cross2.png')} style={{ height: 30, width: 30, resizeMode: 'contain', marginRight: wp(2), marginTop: wp(2) }}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '90%', height: "70%", alignSelf: 'center', marginTop: hp(5) }}>
                                <Image
                                    source={{ uri: this.state.scanImgUri }}
                                    style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
                                />
                            </View>
                            <View style={{ width: '100%', height: '11%', marginTop: hp(3), paddingLeft: wp(2), paddingRight: wp(2), flexDirection: 'row', justifyContent: 'space-between' }}>
                                {this.state.isAsPdf == false ? (
                                    <View style = {{width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <TouchableOpacity style={{ height: "100%", width: "46%", backgroundColor: "#4fc9f0", justifyContent: "center", alignItems: "center", borderRadius: 10 }} onPress={() => this.shareAsPng()}>
                                            <Text style={{ color: "#fff", fontSize: 18 }}>Share as png</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ height: "100%", width: "46%", backgroundColor: "#4fc9f0", justifyContent: "center", alignItems: "center", borderRadius: 10 }} onPress={() => this.shareAsPdf()}>
                                            <Text style={{ color: "#fff", fontSize: 18 }}>Share as PDF</Text>
                                        </TouchableOpacity>
                                    </View>

                                ) : (
                                    <View style = {{width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: wp(2), paddingRight: wp(2)}}>
                                        <Text style = {{color: '#166883', fontSize: 18}}>Generating PDF , please wait..</Text>
                                        <ActivityIndicator size="large" color="#166883" />
                                    </View>
                                )}

                            </View>
                        </View>
                    ) : (
                            null
                        )}


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
        // justifyContent: 'space-between'
    },
    FloatingCamera: {
        position: 'absolute',
        height: 50,
        width: 50,
        borderRadius: 25,
        bottom: hp(5),
        right: wp(6),
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
    },
    gridContainer: {
        width: "100%",
        height: "86%",
        // alignItems: "center",
        marginTop: hp(1),
        // backgroundColor:"green"
    }
});

export default HomeView;