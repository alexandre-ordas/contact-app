import React from 'react'
import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { actions } from '../store'
import {TouchableOpacity} from "react-native-gesture-handler";
import { withNavigation } from 'react-navigation'


const EditContact = ({ contact, updateContact, navigation }) => {
    return (
        <>
            <TouchableOpacity
                style={styles.pictureContainer}
                onPress={() => navigation.push('takePicture')}
            >
                {contact.photo ? (
                    <Image style={styles.picture} source={contact.photo} />
                ) : (
                    <Image style={styles.picture} source={require("../images/user.png")}/>
                )}
            </TouchableOpacity>
            <View style={styles.editForm}>
                <Text style={styles.nameLabel}>Name</Text>
                <TextInput
                    style={styles.nameInput}
                    value={contact.name || ''}
                    onChangeText={name => updateContact({...contact, name})}
                    autofocus
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    editForm: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 16
    },
    nameLabel: {
        marginRight: 16,
        fontWeight:'bold',
        lineHeight: 30,
        textAlign: "center"
    },
    nameInput:{

    },
    pictureContainer: {
        marginTop: 16,
        marginBottom: 14,
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: 'transparent'
    },
    picture: {
        width: 98,
        height: 98,
        borderRadius: 50
    },

})

const mapStateToProps = state => ({
    contact: state.contactToEditInfos
})

const mapDispatchToProps = {
    updateContact: actions.updateContactToEdit
}

export default withNavigation(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(EditContact),
)
