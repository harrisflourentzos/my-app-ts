import { View, Button, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

type Props = { addGoalHandler: (goal: string) => void };

const goalInput = (props: Props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (input: string) => {
    setEnteredGoalText(input);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button onPress={addGoalHandler} title="Add Goal" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 10,
    padding: 10,
    width: "70%",
  },
});

export default goalInput;
