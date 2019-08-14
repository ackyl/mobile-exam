import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import {Container, Text, Textarea, Button, Item, Input} from 'native-base'

import DatePick from './components/DatePick'

class AddDiaryScreen extends Component {
    getDate = () => {
        alert('Function dari AddDiaryScreen')
    }

    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Text style={{fontSize: 20}}>Create Diary</Text>
                    <View style={styles.wrapper}>
                        <DatePick funDate={this.getDate}/>
                        <Item rounded>
                            <Input
                                placeholder='Title'
                            />
                        </Item>
                        <Textarea
                            placeholder = 'Your Story'
                            bordered
                            rowSpan = {15}
                        />
                        <View style={styles.button}>
                            <Button block>
                                <Text>Create Diary</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    wrapper: {
        width: '90%',
        marginTop: 15
    },
    button: {
        marginTop: 10
    }
})

export default AddDiaryScreen