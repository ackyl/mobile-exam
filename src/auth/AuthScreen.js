import React, { Component } from 'react'
import {View} from 'react-native'
import {Container, Button, Text} from 'native-base'

class AuthScreen extends Component {

    pindahScreen = () => {
        this.props.navigation.navigate('Kesini')
    }

    render() {
        return (
            <Container>
                <Text>AuthScreen</Text>
                <Button onPress={this.pindahScreen}>
                    <Text>
                        PINDAH
                    </Text>
                </Button>
            </Container>
        )
    }
}

export default AuthScreen