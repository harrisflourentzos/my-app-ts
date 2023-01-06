import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

type Props = {
  itemIndex: string;
  itemName: string;
  itemId: string;
  onDeleteGoal: (goalId: string) => void;
};

const goalItem = (props: Props) => {
  return (
    <View style={styles.goalItemView}>
      <View style={styles.iosWrapper}>
        <Text style={styles.goalItemText}>
          {props.itemIndex + ". " + props.itemName}
        </Text>
      </View>
      <Button
        title="Delete"
        onPress={() => props.onDeleteGoal(props.itemId)}
        color="#ff3d77"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalItemView: {
    flexDirection: "row",
    alignContent: "stretch",
    marginBottom: 5,
  },
  goalItemText: {
    color: "white",
    backgroundColor: "#6ab1fc",
    textAlignVertical: "center",
    padding: 5,
    borderRadius: 6,
  },
  iosWrapper: {
    flex: 1,
    backgroundColor: "#6ab1fc",
    textAlignVertical: "center",
    marginRight: 10,
    padding: 5,
    borderRadius: 6,
  },
});

export default goalItem;
