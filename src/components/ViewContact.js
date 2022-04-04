import React, { Component } from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'

class ViewContact extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired
    }

    render() {
        const { contact } = this.props
        return (
            <>
                <View style={styles.pictureContainer}>
                    {contact.photo ? (
                        <Image style={styles.picture} source={contact.photo} />
                    ) : (
                        <Image style={styles.picture} source={require("../images/user.png")}/>
                    )}
                </View>
                <View style={styles.contactDetails}>
                    <Text style={styles.nameLabel}>Name</Text>
                    <Text>{contact.name}</Text>
                </View>
                <View style={styles.contactDetails}>
                    <Text style={styles.nameLabel}>Phone Number</Text>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    contactDetails: {
        padding: 16,
        flexDirection: 'row'
    },
    pictureContainer: {
        marginTop: 16,
        marginBottom: 14,
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 50

    },
    picture: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    nameLabel: { marginRight: 16, fontWeight: 'bold' }
})

export default ViewContact
