import { StatusBar } from "expo-status-bar";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
} from "react-native";

type Goal = { name: string; id: string };

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState(new Array<Goal>());

  const goalInputHandler = (input: string) => {
    setEnteredGoalText(input);
  };

  const addGoalHandler = () => {
    if (!enteredGoalText.trim()) return;

    setGoals((currentGoals) => [
      ...currentGoals,
      { name: enteredGoalText.trim(), id: Math.random().toString() },
    ]);
  };

  const renderItems = (item: ListRenderItemInfo<Goal>) => (
    <View style={styles.goalItemView}>
      <Text style={styles.goalItemIndexText}>{item.index}</Text>
      <Text style={styles.goalItemNameText}>{item.item.name}</Text>
      <Button title="Delete"></Button>
    </View>
  );

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={renderItems}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: { paddingTop: 50, paddingHorizontal: 15, flex: 1 },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalsContainer: { flex: 5 },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 10,
    padding: 10,
    width: "70%",
  },
  goalItemView: {
    flexDirection: "row",
    alignContent: "stretch",
    marginBottom: 5,
  },
  goalItemIndexText: {
    color: "white",
    marginRight: 10,
    backgroundColor: "grey",
    textAlignVertical: "center",
    padding: 5,
    borderRadius: 5,
  },
  goalItemNameText: {
    color: "white",
    flex: 6,
    backgroundColor: "grey",
    marginRight: 10,
    textAlignVertical: "center",
    padding: 5,
    borderRadius: 5,
  },
});
