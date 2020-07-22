import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput } from 'react-native'

export default class Facebookscreen extends Component {
    render() {
        return (
            <View >
                <View>
                    <Image style={styles.Image} source={require('../image/fb.jpg')} />
                </View>
                <View style={styles.container}>
                    <View style={{flexDirection: "row"}}>
                        <Text>English </Text>
                        <Text> 英语(英語) </Text>
                        <TouchableOpacity>
                            <Text style={{ color: "blue" }}> Thêm...</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:64}}>
                        <TextInput style={styles.input}  placeholder="Số điện thoại hoặc Email" />
                        <TextInput style={styles.input} placeholder="Mật khẩu"/>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.signin}>
                            <Text style={{color:"#fff",fontWeight:"bold"}}>Đăng nhập </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                           <Text style={{color:"blue",fontWeight:"bold",marginTop:8}}>Quên mật khẩu?</Text>
                        </TouchableOpacity>                  
                    </View>
                    <View style={{marginTop:80}}>
                        <Text style={{color:"gray"}}>──────────── Hoặc ────────────</Text>
                    </View>
                    <View style={{marginTop:32}}>
                        <TouchableOpacity style={styles.signup} >
                            <Text style={{fontWeight:"bold",color:"#fff"}}>
                                Tạo tài khoản facebook mới 
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        marginTop:8
    },
    Image: {
        width: "100%",
        height: 220
    },
    input:{
        borderBottomColor:"gray",
        borderBottomWidth: 1,
        marginTop:8,
        width:300,
        height:40,
        fontSize:20
    },
    signin:{
        borderRadius:4,
        marginTop:16,
        justifyContent:"center",
        alignItems:"center",
        height:40,
        width:300,
        backgroundColor:"blue"
    },
    signup :{
        borderRadius:4,
        marginTop:64,
        justifyContent:"center",
        alignItems:"center",
        height:40,
        width:300,
        backgroundColor:"#00b33c"
    }
});


