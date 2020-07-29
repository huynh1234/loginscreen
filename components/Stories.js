import React from 'react'
import STORIES from '../data/storiesdata'
import { Image, StyleSheet, FlatList, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
const renderStories = ({ item }) => {
    return(
        <TouchableOpacity style={{paddingVertical:4}}>
            <Image style={styles.stories} source={item.authorAvatar} styles={{ width: "100%", height: "100%" }} />
            <Text style={{fontSize:10,marginLeft: 16,}}>{item.authorName}</Text>
        </TouchableOpacity>
    );
}

export default function Stories() {
    
    return (
        <View>
            <FlatList
                data={STORIES}
                renderItem={renderStories}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{
                    marginLeft: 16,
                }}

            />
            <View
                style={{
                    marginTop:4,
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.2,
                    borderBottomColor:"#bdc3c7"
                }}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    stories: {
        width: 56,
        height: 56,
        borderWidth: 1.5,
        borderColor: "yellow",
        borderRadius: 28,
        overflow: "hidden",
        marginLeft:16

    }
})

