import {
  View,
  Button,
  StyleSheet,
  TextInput,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

type Props = {
  onAddGoal: (goal: string) => void;
  startInputtingGoal: boolean;
  cancelInputtingGoal: () => void;
};

const goalInput = (props: Props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (input: string) => {
    setEnteredGoalText(input);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.startInputtingGoal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.goalImage}
          source={require("../assets/goalIcon.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          placeholderTextColor="white"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.cancelInputtingGoal}
              color="#ff3d77"
            />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" color="#026cf7" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#22263b",
  },
  goalImage: {
    width: 200,
    height: 200,
    margin: 20,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#4f95f0",
    backgroundColor: "#6ab1fc",
    borderRadius: 5,
    padding: 10,
    width: "90%",
    color: "white",
  },
  buttonContainer: {
    margin: 10,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});

export default goalInput;
