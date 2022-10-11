import React from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Style from "../assets/style";

const AddNotes = () => {
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ padding: 20, justifyContent: "space-around" }}>
            <TextInput
              style={[styles.input]}
              placeholder="Type Here..."
              multiline={true}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  addNoteContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 12,
    paddingBottom: 240,
    paddingTop: 2,
    width: "100%",
    fontSize: 19,
    color: "black",
    fontWeight: "600",
    opacity: 0.8,
    shadowColor: Style.color,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 15,
    backgroundColor: "white",
    borderColor: Style.color,
    borderWidth: 2,
    borderRadius: 5,
    height: 300,
  },
  button: {
    backgroundColor: Style.color,
    width: "40%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    alignSelf: "flex-end",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});
export default AddNotes;
