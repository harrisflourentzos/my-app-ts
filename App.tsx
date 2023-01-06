import { setStatusBarBackgroundColor } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ListRenderItemInfo,
  Button,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import Goal from "./data/goal";

export default function App() {
  const [goals, setGoals] = useState(new Array<Goal>());
  const [startInputtingGoal, setStartInputtingGoal] = useState(false);

  const addGoalHandler = (goal: string) => {
    if (!goal.trim()) return;

    setGoals((currentGoals) => [
      ...currentGoals,
      { name: goal.trim(), id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id: string) => {
    setGoals((currentGoals) => currentGoals.filter((g) => g.id != id));
  };

  const renderItems = (item: ListRenderItemInfo<Goal>) => (
    <GoalItem
      itemIndex={(item.index + 1).toString()}
      itemName={item.item.name}
      itemId={item.item.id}
      onDeleteGoal={deleteGoalHandler}
    />
  );

  const startInputtingGoalHandler = () => {
    setStartInputtingGoal(true);
  };

  const stopInputtingGoalHandler = () => {
    setStartInputtingGoal(false);
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add Goal" onPress={startInputtingGoalHandler} />
      <GoalInput
        onAddGoal={addGoalHandler}
        startInputtingGoal={startInputtingGoal}
        cancelInputtingGoal={stopInputtingGoalHandler}
      />
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
  goalsContainer: { paddingVertical: 10 },
});
