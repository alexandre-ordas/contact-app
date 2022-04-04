import React, {Component} from "react";
import {View, Text, TouchableHighlight, StyleSheet, Image} from "react-native";

class ContactListItem extends Component {
    onPress = () => {
        const { openDetails } = this.props
        openDetails()
    }
    render() {
        const { contact } = this.props
        return (
            <TouchableHighlight onPress={this.onPress}>
                <View style={styles.contact}>
                    <View style={styles.pictureContainer}>
                    {contact.photo ? (
                        <Image style={styles.picture} source={contact.photo} />
                    ) : (
                        <Image style={styles.picture} source={require("../images/user.png")}/>
                    )}
                    </View>
                    <Text style={styles.nameLabel}>{contact.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    contact: {
        paddingBottom: 16,
        paddingTop: 16,
        paddingLeft: 32,
        paddingRight: 32,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        flexDirection: "row"
    },
    pictureContainer: {
        marginTop: 16,
        marginBottom: 14,
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 50

    },
    picture: {
        width: 48,
        height: 48,
        borderRadius: 50
    },
    nameLabel: {
        paddingLeft: 16,
        lineHeight: 75,
        textAlign: "center"
    }
})

export default ContactListItem