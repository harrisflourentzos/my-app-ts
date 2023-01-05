import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

type Props = { itemIndex: string; itemName: string };

const goalItem = (props: Props) => {
  return (
    <View style={styles.goalItemView}>
      <Text style={styles.goalItemIndexText}>{props.itemIndex}</Text>
      <Text style={styles.goalItemNameText}>{props.itemName}</Text>
      <Button title="Delete"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default goalItem;
