import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'
import {
    Container,
    Content,
    Card,
    CardItem,
    Text,
    Button
} from 'native-base'

import Fire from '../firebase'

// Untuk mengambil data dari navigate menggunakan
// navigation.getParam('nama parameternya') / 'data_diary'
class DetailDiaryScreen extends Component {

    state = {
        diary: this.props.navigation.getParam('data_diary')
    }

    onDeleteButton = async () => {
        // Menghapus data
       await Fire.database().ref(`diary/${this.props.uid}/${this.state.diary.id}`).remove()
        // kembali ke halaman sebelumnya. 
       this.props.navigation.goBack()
    }
    render() {
        // Mengambil data yang di kirim dari navigate
        var diary = this.state.diary
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

const mapStateToProps = state => {
    return {
        uid: state.auth.uid
    }
}
export default connect(mapStateToProps)(DetailDiaryScreen)