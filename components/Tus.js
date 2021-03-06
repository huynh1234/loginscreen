import React from 'react'
import { View, StyleSheet, Image, FlatList, Text, Dimensions, TouchableOpacity } from 'react-native'
import DATA from '../data/datatus'
import { Entypo } from '@expo/vector-icons';
import LikeandShare from './LikeandShare';
import Stories from './Stories';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Tus() {
    const renderItem = ({ item, index }) => {
        if(index===0){
            return <Stories/>;
        }else{
            return (

                <View>
                    <View style={styles.headertus}>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image style={styles.avatar} source={item.authorAvatar} styles={{ width: "100%", height: "100%" }} />
    
                            <Text style={styles.text} >{item.authorName}</Text>
                        </TouchableOpacity>
    
                        <TouchableOpacity>
                            <Entypo name="dots-three-vertical" size={16} color="black" />
                        </TouchableOpacity>
    
                    </View>
    
                    <Image source={item.image} style={styles.imagestyle} />
    
                    <LikeandShare />
    
                    <View style={{ flexDirection: "row", marginLeft: 16, marginTop: 4 }}>
                        {/* <Text> Có Quanghieus và {item.viewCount}  người thích</Text> */}
                        <Text>Có </Text>
                        <Text style={styles.text}>Quanghieus </Text>
                        <Text>và </Text>
                        <Text style={styles.text}>{item.viewCount} người khác </Text>
                        <Text>thích</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: 16, marginTop: 4, width: "100%" }}>
                        {/* <Text> Có Quanghieus và {item.viewCount}  người thích</Text> */}
                        <Text style={styles.text} >{item.authorName} <Text>{item.tus}</Text></Text>
    
                    </View>
                    <TouchableOpacity>
                        <Text style={{ color: "gray", marginLeft: 16, marginBottom: 8 }}>Xem tất cả 9 bình luận </Text>
                    </TouchableOpacity>
                </View>
    
    
            );
        }
        
    }
    return (
        <View>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
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
        paddingHorizontal: 16
    },
    text: {
        fontWeight: "bold",
    },
    avatar: {
        width: 32,
        height: 32,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 16,
        overflow: "hidden",
        marginRight: 4
    },
    imagestyle: {
        width: windowWidth,
        height: (windowWidth * 460) / 450,
    },
})
