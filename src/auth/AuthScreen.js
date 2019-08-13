import React, { Component } from 'react'
import {Container, Button, Text, Form, Item, Input, Label} from 'native-base'
import {connect} from 'react-redux'
import Fire from '../firebase/index'
import {onLogin} from '../store/actions/index'

class AuthScreen extends Component {

    state = {
        email: '',
        password: '',
        confirm: '',
        login: true
    }

    onSwitch = () => {
        this.setState({login: !this.state.login})
    }



    componentDidMount(){
        // Cek apakah ada user yang sedang login
        Fire.auth().onAuthStateChanged((user) => {
            // jika user ditemukan
            if(user){
                // login ke redux
                this.props.onLoginUser(
                    user.uid, user.email
                )

                // Pindah ke halaman utama
                this.props.navigation.navigate('Main')
            }
        })
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

            this.props.navigation.navigate('Main')
        }
        
        
    }
    

    render() {
        let titleTopButton, form

        if(!this.state.login){
            // RENDER REGISTER
            titleTopButton = 'Switch to Login'
            titleBotBottom = 'Register'
            form = (
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
                            onChangeText={(text) => this.setState({password: text})}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label>Confirm Password</Label>
                        <Input 
                            // Agar yang kita ketik akan di hide
                            secureTextEntry
                            // Update state dg text yang di ketik
                            onChangeText={(text) => this.setState({confirm: text})}
                        />
                    </Item>
                </Form>
            )
        } else {
            // RENDER LOGIN
            titleTopButton = 'Switch to Register'
            titleBotBottom = 'Login'
            form = (
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
                            onChangeText={(text) => this.setState({password: text})}
                        />
                    </Item>
                </Form>
            )
            
        }

        return (
            <Container>
                <Text>Authentication Screen</Text>
                
                <Button onPress={this.onSwitch}>
                    <Text>{titleTopButton}</Text>
                </Button>

                {form}
            
                <Button onPress={this.authRegister}>
                    <Text>{titleBotBottom}</Text>
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