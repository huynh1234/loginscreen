import React from 'react'
import DATA from '../data/datatus'
import { Image, StyleSheet, FlatList, View, Text, SafeAreaView } from 'react-native'

export default function Stories() {
    const renderItem = ({ item }) => (
        <View style={{paddingVertical:4}}>
            <Image style={styles.stories} source={item.authorAvatar} styles={{ width: "100%", height: "100%" }} />
            <Text style={{fontSize:10,marginLeft: 16,}}>{item.authorName}</Text>
        </View>
    );
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginLeft: 16,
                }}

            />
            <View
                style={{
                    marginTop:4,
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.2,
                    borderBottomColor:"gray"
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
        marginLeft:12

    }
})

