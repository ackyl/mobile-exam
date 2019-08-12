import React, { Component } from 'react'
import {Container, Button, Text, Form, Item, Input, Label} from 'native-base'
import {connect} from 'react-redux'
import Fire from '../firebase/index'
import {onLogin} from '../store/actions/index'

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
            this.props.onLoginUser(
                res.user.uid,
                res.user.email
            )
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

const mapDispatchToProps = dispatch => {
    return {
        onLoginUser: (uid, email) => {dispatch(onLogin(uid, email))}
    }
}

export default connect(null, mapDispatchToProps)(AuthScreen)