import { View, Button, StyleSheet, TextInput, Modal } from "react-native";
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
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.cancelInputtingGoal} />
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
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 10,
    width: "90%",
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
