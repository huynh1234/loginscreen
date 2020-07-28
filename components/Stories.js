import React from 'react'
import DATA from '../data/datatus'
import { Image, StyleSheet, FlatList, View } from 'react-native'

export default function Stories() {
    const renderItem = ({ item }) => (
        <View style={styles.storiesbar}>
            <Image style={styles.stories} source={item.authorAvatar} styles={{ width: "100%", height: "100%" }} />
        </View>
    );
    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}

        />
    )
}
const styles = StyleSheet.create({
    storiesbar: {
        width:"100%",
        height:16,
        flexDirection:"row",
        backgroundColor:"red"

    },
    stories: {
        width: 32,
        height: 32,
        borderWidth: 1,
        borderColor: "yellow",
        borderRadius:16,
        overflow: "hidden",
        margin: 8
    }
})

