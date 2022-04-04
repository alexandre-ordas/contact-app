import React, {Component} from "react";
import ContactList from "./ContactsList";
import AddContactButton from "./AddContactButton";

class ContactsListScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Home',
        headerRight: () => (
            <AddContactButton
                goToEditContact={() => navigation.push('editContact')}
            />
        )
    })
    goToContactDetails = contact => {
        const { navigation } = this.props
        navigation.navigate('viewContact', { contact })
    }
    render() {
        return <ContactList goToContactDetails={this.goToContactDetails}/>
    }
}
export default ContactsListScreen