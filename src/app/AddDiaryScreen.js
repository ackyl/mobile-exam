import React, { Component } from 'react'
import {View} from 'react-native'
import {Container, Text, Textarea, Button, Item, Input} from 'native-base'

class AddDiaryScreen extends Component {
    render() {
        return (
            <Container>
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
                <View>
                    <Button>
                        <Text>Create Diary</Text>
                    </Button>
                </View>
            </Container>
        )
    }
}

export default AddDiaryScreen