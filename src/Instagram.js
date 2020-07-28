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
                 <SimpleLineIcons name="camera" size={28} color="black" />
                </TouchableOpacity>

                <Text style={{fontWeight:"bold",fontSize:20}}>Instagram</Text>

                <TouchableOpacity>
                    <Feather name="send" size={28} color="black" />
                </TouchableOpacity>
                
            </View>
                
            <SafeAreaView>
                <Stories/>
            </SafeAreaView>

            <SafeAreaView >
                <Tus/>
            </SafeAreaView>


        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        marginTop:16,
        paddingHorizontal: 16,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: 52,
        backgroundColor: "#fff",
        borderBottomColor:"#ecf0f1",
        borderBottomWidth:1
        

    },
    
    
});
