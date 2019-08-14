import React, { Component } from 'react'
import {View, BackHandler, StyleSheet} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {Button, Text, Container} from 'native-base'

class DiaryScreen extends Component {

    onBackButton = () => {
        alert('Tombol back di tekan')
        // Menonaktifkan default function (kembali ke halaman sebelumnya)
        return true
    }

    onAddDiary = () => {
        this.props.navigation.navigate('AddDiary')
    }

    render() {
        return (
            <Container>
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

                <View style={styles.container}>
                    <Text>DiaryScreen</Text>
                    {/* render list */}
                    <View style={styles.button}>
                        <Button onPress={this.onAddDiary}>
                            <Text>Add Diary</Text>
                        </Button>
                    </View>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginVertical: 20
    }
})

export default DiaryScreen