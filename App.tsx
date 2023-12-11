/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import LoginComponent from "./components/LoginComponent";
import HomepageComponent from "./pages/HomepageComponent";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import RegisterPage from "./pages/RegisterPage";

type RootStackParamList = {
  Home: undefined; // No parameters expected for the Home route
  Register: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Register"
>;

// function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <HomepageComponent />
//     </View>
//   );
// }
// function RegisterScreen() {
//   return (
//     <View style={styles.container}>
//       <RegisterPage />
//     </View>
//   );
// }
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomepageComponent} />
          <Stack.Screen name="Register" component={RegisterPage} />
        </Stack.Navigator>
        // <SafeAreaView>

        // </SafeAreaView>
        //<LoginComponent />
        /*
   <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edited** <Text style={styles.highlight}>App.tsx</Text> to change
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
    */
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },

  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 18,
  },
});

export default App;
