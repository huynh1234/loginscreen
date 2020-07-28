import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, StatusBar, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Facebookscreen() {
    return (
        <View style={{flex:1}}>
            <StatusBar style="light" />
            <View style={{flex:0.3}} >
                <Image style={styles.Image} source={require('../assets/fb1.png')} />
            </View>
            
            <View style={{justifyContent:"space-between",flex:0.7}}>
                <View style={styles.container}>
                    <View style={styles.input1}>
                        <TextInput style={styles.input} placeholder="Số điện thoại hoặc Email" />
                        <TextInput style={[styles.input2, styles.input]}
                            placeholder="Mật khẩu"
                            returnKeyType='go'
                            secureTextEntry
                            autoCorrect={false}
                        />
                    </View>


                    <TouchableOpacity style={styles.signin} >
                        <Text style={{ color: "#fff", fontWeight: "bold" }}>Đăng nhập </Text>
                    </TouchableOpacity>



                    <View>
                        <TouchableOpacity>
                            <Text style={styles.text}>Quên mật khẩu?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[styles.text, styles.textcomback]}>Quay lại  </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                
            
                <View style={styles.container}>

                     <View style={{  flexDirection: "row" }}>
                        <Text numberOfLines={1} style={{ color: "#e0e0e0" }}> ──────── </Text>
                        <Text > HOẶC </Text>
                        <Text numberOfLines={1} style={{ color: "#e0e0e0" }}> ──────── </Text>
                    </View>

                    <View style={styles.signup}>
                        <TouchableOpacity >
                            <Text style={{ color: "blue" }}>
                                Tạo tài khoản mới
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding:32
    },
    text: {
        color: "#286fdd", fontWeight: "bold", marginTop: 8
    },
    textcomback: {
        textAlign: "center"
    },
    Image: {
        width: windowWidth,
        height: (windowWidth * 460) / 750,
    },
    input1: {
        borderRadius: 4,
        marginTop: 16,
        borderColor: "#d9d9d9",
        borderWidth: 1,
        width: "100%"
    },
    input: {
        paddingLeft: 8,
        height: 48,
        fontSize: 20,
    },
    input2: {

        borderTopColor: "#d9d9d9",
        borderTopWidth: 0.5,

    },
    signin: {
        borderRadius: 8,
        marginTop: 16,
        justifyContent: "center",
        alignItems: "center",
        height: 48,
        backgroundColor: "#1977f3",
        width: "100%"
    },
    signup: {
        marginTop:16,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        height: 48,
        width: "100%",
        backgroundColor: "#e7f3ff",
    }
});
