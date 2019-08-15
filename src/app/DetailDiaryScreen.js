import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import {
    Container,
    Content,
    Card,
    CardItem,
    Text,
    Button
} from 'native-base'

// Untuk mengambil data dari navigate menggunakan
// navigation.getParam('nama parameternya') / 'data_diary'
class DetailDiaryScreen extends Component {
    render() {
        var diary = this.props.navigation.getParam('data_diary')
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header bordered style={styles.row}>
                            <Text style={styles.headerText}>{diary.title}</Text>
                            <Text>{diary.date}</Text>
                        </CardItem>
                        <CardItem>
                            <Text>{diary.diary}</Text>
                        </CardItem>
                        <View style={styles.button}>
                            <Button block onPress={this.onEditButton}><Text>Edit</Text></Button>
                            <Button block onPress={this.onDeleteButton}><Text>Delete</Text></Button>
                        </View>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    button: {
        height: 100,
        justifyContent: 'space-between',
        marginTop: 10
    }
})
export default DetailDiaryScreen