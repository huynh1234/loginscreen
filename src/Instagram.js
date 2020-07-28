import React from 'react'
import { View, StyleSheet, Text, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
// import DATA from '../data/datatus'
import Tus from '../components/Tus'
import { SimpleLineIcons,Feather } from '@expo/vector-icons';


export default function Instagram() {   
    return (
        <View>
            <View style={styles.header} >
                <TouchableOpacity>
                 <SimpleLineIcons name="camera" size={32} color="black" />
                </TouchableOpacity>

                <Text style={{fontWeight:"bold",fontSize:20}}>Instagram</Text>

                <TouchableOpacity>
                    <Feather name="send" size={32} color="black" />
                </TouchableOpacity>
                
            </View>
            

            <SafeAreaView>
                <Tus/>
            </SafeAreaView>


        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        padding: 8,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: 60,
        backgroundColor: "#fff",
        borderBottomColor:"gray",
        borderBottomWidth:1

    },
    
    
});
