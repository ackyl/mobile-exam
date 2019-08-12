import React, { Component } from 'react'
import {Container, Button, Text, Form, Item, Input, Label} from 'native-base'
import Fire from '../firebase/index'

class AuthScreen extends Component {

    state = {
        email: '',
        password: ''
    }

    // Function yang akan di jalanakna ketika klik button register
    authRegister = async () => {
        let email = this.state.email
        let password = this.state.password

        if(password.length < 6){
            alert('Password harus minimal 6 karakter')
        } else {
            let res = await Fire.auth()
                            .createUserWithEmailAndPassword(email, password)
            
            console.log(res.user.email)
            console.log(res.user.uid)
        }
        
        
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
                            onChangeText={(text) => this.setState({email: text})}
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