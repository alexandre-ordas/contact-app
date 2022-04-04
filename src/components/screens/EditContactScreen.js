import React, {Component} from "react";
import { Button } from "react-native";
import ContactName from "../ContactName";
import SaveContactButton from "../button/SaveContactButton"
import EditContact from "../EditContact"

class EditContactScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const contactId = navigation.getParam('contactId')
        const closeEdition = () => navigation.pop()
        return {
            headerTitle: () => (
                <ContactName contactId={contactId} defaultTitle="Create contact" />
            ),
            headerLeft: () => <Button onPress={closeEdition} title="Cancel" />,
            headerRight: () => (
                <SaveContactButton contactId={contactId} closeEdition={closeEdition}/>
            )
        }
    }
    goToTakePicture = () => {
        const { navigation } = this.props
        navigation.navigate('takePicture')
    }
    render() {
        return <EditContact goToTakePicture={this.goToTakePicture} />
    }
}

export  default EditContactScreen