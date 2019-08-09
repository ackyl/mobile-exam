import React, { Component } from 'react'
import {Container, Button, Text, Form, Item, Input, Label} from 'native-base'
import Fire from '../firebase/index'

class AuthScreen extends Component {

    state = {
        email: '',
        password: ''
    }

    // Function yang akan di jalanakna ketika klik button register
    authRegister = () => {
        let email = this.state.email
        let password = this.state.password

        // REGISTER
        Fire.auth().createUserWithEmailAndPassword(email, password)
    }
    

    render() {
        return (
            <Container>
                <Form>
                    {/* style: stackedLabel */}
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input 
                            // Update state dg text yang di ketik
                            onChangeText={(input) => this.setState({email: input})}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label>Password</Label>
                        <Input 
                            // Agar yang kita ketik akan di hide
                            secureTextEntry
                            // Update state dg text yang di ketik
                            onChangeText={(input) => this.setState({password: input})}
                        />
                    </Item>
                </Form>
                {/* Memanggil function ketika di click */}
                <Button onPress={this.authRegister}>
                    <Text>REGISTER</Text>
                </Button>
            </Container>
        )
    }
}

export default AuthScreen