import React from "react";
import { Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const ContactName = ({ contactId, defaultTitle, contacts }) => {
    const contact = contactId ? contacts.find(c => c.id === contactId) : null
    return <Text style={styles.contactTitle} >{( contact && contact.name) || defaultTitle }</Text>
}

const mapStateToProps = state => ({ contacts: state.contacts })

const styles = StyleSheet.create({
    contactTitle: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: 'bold'
    }
})


export default connect(mapStateToProps)(ContactName)