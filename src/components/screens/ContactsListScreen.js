import React, {Component} from "react";
import ContactList from "../ContactsList";
import AddContactButton from "../button/AddContactButton";

class ContactsListScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Home',
        headerRight: () => (
            <AddContactButton
                goToEditContact={() => navigation.push('editContact')}
            />
        )
    })
    goToContactDetails = contactId => {
        const { navigation } = this.props
        navigation.navigate('viewContact', { contactId })
    }
    render() {
        return <ContactList goToContactDetails={this.goToContactDetails}/>
    }
}
export default ContactsListScreen