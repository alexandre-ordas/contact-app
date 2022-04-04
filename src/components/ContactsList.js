import React, { Component } from "react";
import {FlatList} from "react-native";
import PropTypes from "prop-types"
import ContactListItem from "./ContactListItem";
import { connect } from "react-redux";
import { actions } from "../store";

class ContactList extends Component {
    static propTypes = {
        goToContactDetails: PropTypes.func.isRequired,
        loadContacts: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        contacts: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    componentDidMount() {
        const { loadContacts } = this.props
        loadContacts()
    }

    render() {
        const { goToContactDetails, loading, loadContacts, contacts } = this.props
        return (<FlatList
                data={contacts}
                keyExtractor={contact => String(contact.id)}
                refreshing={loading}
                onRefresh={() => loadContacts()}
                renderItem={({ item: contact}) => (
                    <ContactListItem
                        contact={contact}
                        openDetails={() => goToContactDetails(contact.id)}

                    />
                )}
            />
        )
    }
}


const mapStateToProps = state => ({
    loading: state.loading,
    contacts: state.contacts
})

const mapDispatchToProps = {
    loadContacts: actions.loadContacts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList)