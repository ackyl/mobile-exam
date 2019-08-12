import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import {Text, Button} from 'native-base'
import {connect} from 'react-redux'

import {onLogout} from '../store/actions'

import Fire from '../firebase'

class ProfileScreen extends Component {

    onPressLogout = async () => {
        // Logout dari firebase
        await Fire.auth().signOut()
        // Logout dari redux
        this.props.onLogout()
    }

    render() {
        return (
            <View>
                <Text>ProfileScreen</Text>
                <Button onPress ={this.onPressLogout}>
                    <Text>Logout</Text>
                </Button>
            </View>
        )
    }
}

export default connect(null, {onLogout})(ProfileScreen)