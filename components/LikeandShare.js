import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign, Fontisto, Feather } from '@expo/vector-icons';


export default function LikeandShare() {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 4 }}>
            <View style={styles.iconbar}>
                <TouchableOpacity>
                    <AntDesign name="hearto" size={28} color="black" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Fontisto name="hipchat" size={28} color="black" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="send" size={28} color="black" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View>
                <Feather name="bookmark" size={28} color="black" style={styles.icon} />
            </View>


        </View>

    )
}
const styles = StyleSheet.create({
    iconbar: {
        marginTop: 12,
        flexDirection: "row"
    },
    icon: {
        marginLeft: 4,
        marginRight: 12,
    }
});
