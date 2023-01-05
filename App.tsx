import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import Goal from "./data/goal";

export default function App() {
  const [goals, setGoals] = useState(new Array<Goal>());

  const addGoalHandler = (goal: string) => {
    if (!goal.trim()) return;

    setGoals((currentGoals) => [
      ...currentGoals,
      { name: goal.trim(), id: Math.random().toString() },
    ]);
  };

  const renderItems = (item: ListRenderItemInfo<Goal>) => (
    <GoalItem itemIndex={item.index.toString()} itemName={item.item.name} />
  );

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
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
  goalsContainer: { flex: 5 },
});
