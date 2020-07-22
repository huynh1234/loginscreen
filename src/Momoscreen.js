import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default class Momoscreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#ff1493", flex: 1 }}>
                <StatusBar style="light"/>
                <View style={styles.container}>
                    <View style={{ marginTop: 80 }}>
                        <Text style={styles.xinchao} >Xin chào!</Text>
                        <Text style={styles.Textcenter} >Nguyễn Đức Huynh</Text>
                        <Text style={styles.Textcenter} >0386164071</Text>
                    </View>
                    <View>
                        <TextInput style={styles.input}
                            placeholder="Password"
                            returnKeyType='go'
                            secureTextEntry
                            autoCorrect={false}
                            maxLength = {8}
                        />
                    </View>
                    <TouchableOpacity style={styles.Buttondangnhap}>
                        <View style={{ marginTop: 12 }}>
                            <Text style={styles.Textcenter} >Đăng nhập</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 16 }}>
                        <Text style={styles.Textcenter}>Mở khóa bằng vân tay</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 8 }}>
                    <TouchableOpacity >
                        <Text style={styles.Textcenter} >Quên mật khẩu </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.Textcenter}>Thoát tài khoản</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        //   flex: 1,
        //   backgroundColor: '#ff1493',
        alignItems: 'center',

    },
    input: {
        margin: 12,
        height: 52,
        width: 340,
        borderRadius: 26,
        backgroundColor: "#f0f8ff",
        textAlign:"center",
        fontSize:20
    },
    xinchao:{
        fontWeight:"bold",
        color: "#f0f8ff",
        textAlign: "center",
        fontSize:26,
    },
    Textcenter: {
        fontSize: 20,
        color: "#f0f8ff",
        textAlign: "center"
    },
    Buttondangnhap: {
        // marginTop:,
        height: 52,
        width: 340,
        borderRadius: 26,
        backgroundColor: "#8d015a",

    }
});
