import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notes from "./components/Notes";
import AddNotes from "./components/AddNotes";
import DeletedNotes from "./components/DeletedNotes";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notes">
          {(props) => <Notes {...props} />}
        </Stack.Screen>
        <Stack.Screen name="AddNotes">
          {(props) => <AddNotes {...props} />}
        </Stack.Screen>
        <Stack.Screen name="DeletedNotes">
          {(props) => <DeletedNotes {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
