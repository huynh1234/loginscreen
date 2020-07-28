import React from 'react'
import { View, StyleSheet, Image, FlatList, Text, Dimensions, TouchableOpacity } from 'react-native'
import DATA from '../data/datatus'
import { Entypo } from '@expo/vector-icons';
import LikeandShare from './LikeandShare';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Tus() {
    const renderItem = ({ item }) => (
        <View>
          <View style={styles.headertus}>
              <View style={{flexDirection:"row",alignItems:"center"}}>
                 <Image style={styles.avatar} source={item.authorAvatar} styles={{ width: "100%", height: "100%" }} />

                <Text style={styles.text} >{item.authorName}</Text>
              </View>
               

                <Entypo name="dots-three-vertical" size={24} color="black" />
            </View>

            <Image source={item.image} style={styles.imagestyle} />

            <LikeandShare />

            <View style={{flexDirection:"row",marginLeft:16,marginTop:4}}>
                {/* <Text> Có Quanghieus và {item.viewCount}  người thích</Text> */}
                <Text>Có </Text>
                <Text style={styles.text}>Quanghieus </Text>
                <Text>và </Text>
                <Text style={styles.text}>{item.viewCount} người khác </Text>
                <Text>thích</Text>
            </View>
            <View style={{flexDirection:"row",marginLeft:16,marginTop:4,width:"100%"}}>
                {/* <Text> Có Quanghieus và {item.viewCount}  người thích</Text> */}
                <Text style={styles.text} >{item.authorName} <Text>{item.tus}</Text></Text>
                
            </View>
            <TouchableOpacity>
                <Text style={{color:"gray",marginLeft:16}}>Xem tất cả 9 bình luận </Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}

        />
        </View>
        
    )

}
const styles = StyleSheet.create({
    headertus: {
        width: "100%",
        height: 44,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop:16

    },
    text: {
        fontWeight: "bold",
    },
    avatar: {
        width: 36,
        height: 36,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 18,
        overflow: "hidden",
        margin: 8
    },
    imagestyle: {
        width: windowWidth,
        height: (windowWidth * 460) / 750,
    },
})
