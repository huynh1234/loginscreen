import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, StatusBar } from 'react-native'


export default function Facebookscreen() {
    return (
        <View >
                <StatusBar style="light"/>
                <View >
                    <Image style={styles.Image} source={require('../assets/fb1.png')} />
                </View>
                <View style={styles.container}>
                    <View style={styles.input1}>
                        <TextInput style={styles.input}  placeholder=" Số điện thoại hoặc Email" />
                        <TextInput style={styles.input2}
                            placeholder=" Mật khẩu" 
                            returnKeyType='go'
                            secureTextEntry
                            autoCorrect={false}/>
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
                        <TouchableOpacity>
                           <Text style={{color:"blue",fontWeight:"bold",marginTop:8,textAlign:"center"}}>Quay lại  </Text>
                        </TouchableOpacity>                  
                    </View>
                    <View style={{marginTop:120,marginBottom:32,flexDirection:"row"}}>
                        <Text numberOfLines={1} style={{color:"gray"}}> ──────── </Text>
                        <Text style={{color:"gray"}}> HOẶC </Text>
                        <Text numberOfLines={1} style={{color:"gray"}}> ──────── </Text>
                    </View>
                    <View style={{marginBottom:16}}>
                        <TouchableOpacity style={styles.signup} >
                            <Text style={{color:"blue"}}>
                                Tạo tài khoản mới 
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        marginTop:8,
    },
    Image: {
        width: "100%",
        height: 220
    },
    input1:{
        borderRadius:4,
        marginTop:16,
        borderColor:"gray",
        borderWidth:1
    },
    input:{      
        width:300,
        height:40,
        fontSize:20
    },
    input2:{
        borderTopColor:"gray",
        borderTopWidth:1,
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
        backgroundColor:"#045eeb"
    },
    signup :{
        borderRadius:4,
        justifyContent:"center",
        alignItems:"center",
        height:40,
        width:300,
        backgroundColor:"#dcedfa"
    }
});
