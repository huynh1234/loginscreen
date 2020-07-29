import React from 'react'
import { View, StyleSheet, Text, Image, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
// import DATA from '../data/datatus'
import Tus from '../components/Tus'
import { SimpleLineIcons,Feather } from '@expo/vector-icons';
import Stories from '../components/Stories';


export default function Instagram() {   
    return (
        <View>
            <View style={styles.header} >
                <TouchableOpacity>
                 <SimpleLineIcons name="camera" size={24} color="black" />
                </TouchableOpacity>

                <Image source= {require('../image/logo.png')} style={styles.logo}/>

                <TouchableOpacity>
                    <Feather name="send" size={24} color="black" />
                </TouchableOpacity>
                
            </View>
                
           

            <SafeAreaView >
                <Tus/>
            </SafeAreaView>
            <View style={{width:"100%",height:100}}/>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        marginTop:24,
        paddingHorizontal: 16,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: 48,
        backgroundColor: "#f9fafc",
        borderBottomColor:"#ecf0f1",
        borderBottomWidth:1,       
     },
     logo:{
         width:80,
         height:24
     }
        

    
    
    
});
