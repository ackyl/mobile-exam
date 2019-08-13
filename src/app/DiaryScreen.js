import React, { Component } from 'react'
import {View, Text, BackHandler} from 'react-native'
import {NavigationEvents} from 'react-navigation'

class DiaryScreen extends Component {

    onBackButton = () => {
        alert('Tombol back di tekan')
        // Menonaktifkan default function (kembali ke halaman sebelumnya)
        return true
    }

    render() {
        return (
            <View>
                <NavigationEvents
                    // ComponentDidMount
                    onDidFocus = {() => {
                        BackHandler.addEventListener('hardwareBackPress', this.onBackButton)
                    }}

                    // ComponentWillUnmount
                    onWillBlur = {() => {
                        BackHandler.removeEventListener('hardwareBackPress', this.onBackButton)
                    }}
                />
                <Text>DiaryScreen</Text>
            </View>
        )
    }
}

export default DiaryScreen