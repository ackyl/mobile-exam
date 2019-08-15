import React, { Component } from 'react'
import {View,TouchableOpacity, StyleSheet} from 'react-native'
import {Text} from 'native-base'

class ListDiary extends Component {
    render() {
        return(
            <TouchableOpacity>
                <View style={styles.list}>
                    <Text>{this.props.data.item.title}</Text>
                    <Text>{this.props.data.item.date}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'rgb(241, 210, 247)',
        padding : 10,
        marginVertical: 5,
    }
})

export default ListDiary