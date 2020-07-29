import React from 'react'
import STORIES from '../data/storiesdata'
import { Image, StyleSheet, FlatList, View, Text, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native'
const renderStories = ({ item, index }) => {
    if (index % 2 == 0) {
        return (
            <TouchableOpacity style={{ paddingVertical: 4 }}>

                <Image style={styles.stories} source={item.authorAvatar} />
                <Text style={{ fontSize: 10, marginLeft: 16, }}>{item.authorName}</Text>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity style={{ paddingVertical: 4 }}>

                <Image style={styles.stories2} source={item.authorAvatar} />
                <Text style={{ fontSize: 10, marginLeft: 16, }}>{item.authorName}</Text>
            </TouchableOpacity>
        );
    }

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
                    marginTop: 4,
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.2,
                    borderBottomColor: "#bdc3c7"
                }}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    stories: {
        width: 56,
        height: 56,
        borderWidth: 2.5,
        borderColor: "#c40000",
        borderRadius: 28,
        overflow: "hidden",
        marginLeft: 16,
        // zIndex:1,
        // position: "absolute",
    },
    stories2: {
        width: 56,
        height: 56,
        borderWidth: 2.5,
        borderColor: "gray",
        borderRadius: 28,
        overflow: "hidden",
        marginLeft: 16,

    },
    backstories: {
        marginLeft: 12,
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: "hidden",
    }
})

