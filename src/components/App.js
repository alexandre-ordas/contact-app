import React from "react";
import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import ContactsListScreen from "./screens/ContactsListScreen";
import ViewContactScreen from "./screens/ViewContactScreen";
import EditContactScreen from "./screens/EditContactScreen";
import {Provider} from "react-redux";
import store from "../store";
import TakePictureScreen from "./screens/TakePictureScreen";

const Navigator = createStackNavigator(
    {
    main: createStackNavigator({
        contactsList: ContactsListScreen,
        viewContact: ViewContactScreen,
    }),
    editContact: createStackNavigator({
        editContact: EditContactScreen,
        takePicture: TakePictureScreen
    })

},
    {
        mode: 'modal',
        headerMode: 'none'
    }
)

const AppContainer = createAppContainer(Navigator)

export default () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
)