import React, { Component } from 'react'
import {View, BackHandler, StyleSheet} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {connect} from 'react-redux'
import {Button, Text, Container} from 'native-base'

import Fire from '../firebase'

class DiaryScreen extends Component {

    state = {
        snapShot: {}
    }

    onBackButton = () => {
        alert('Tombol back di tekan')
        // Menonaktifkan default function (kembali ke halaman sebelumnya)
        return true
    }

    onAddDiary = () => {
        this.props.navigation.navigate('AddDiary')
    }

    getData = () => {
        // Get data
        Fire.database().ref(`diary/${this.props.uid}`)
        .once('value', (snapShot) => {
            // Cek apakah data di temukan
            if(snapShot.exists()){
                this.setState({snapShot: snapShot.val()})
            }
        })
    }

    renderList = () => {
        // array of id dari setiap diary
        let keysDiary = Object.keys(this.state.snapShot)
        let listDiary = []

        keysDiary.forEach((key) => {
            listDiary.push({
                title : this.state.snapShot[key].title,
                diary : this.state.snapShot[key].diary,
                date : this.state.snapShot[key].date
            })
        })

        console.log(this.state.snapShot)
        console.log(listDiary)
    }

    render() {
        return (
            <Container>
                <NavigationEvents
                    // ComponentDidMount
                    onDidFocus = {() => {
                        BackHandler.addEventListener('hardwareBackPress', this.onBackButton)
                        this.getData()
                    }}

                    // ComponentWillUnmount
                    onWillBlur = {() => {
                        BackHandler.removeEventListener('hardwareBackPress', this.onBackButton)
                    }}
                />

                <View style={styles.container}>
                    <Text>DiaryScreen</Text>
                    
                    <View style={styles.button}>
                        <Button onPress={this.renderList}>
                            <Text>Nyoba bikin arrey</Text>
                        </Button>
                    </View>
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

const mapStateToProps = state => {
    return {
        uid: state.auth.uid
    }
}

export default connect(mapStateToProps)(DiaryScreen)