import { StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { LensProvider, Theme } from '@lens-protocol/react-native-lens-ui-kit';

import Profiles from "/Users/user/Desktop/react-native-lens/Profiles.js"
import ProfileView from "/Users/user/Desktop/react-native-lens/ProfileView.js"
import ViewComments from "/Users/user/Desktop/react-native-lens/ViewComments.js"
import ViewFollowing from "/Users/user/Desktop/react-native-lens/ViewFollowing.js"

const Stack = createStackNavigator()

export default function App() {
  return (
    <LensProvider theme={Theme.dark}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Profiles}  />
          <Stack.Screen name="ViewProfile" component={ProfileView} />
        </Stack.Navigator>
      </NavigationContainer>
    </LensProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});