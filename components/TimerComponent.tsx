import React, { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const TimerComponent: FC<{ title: string; timer: number }> = ({
  title,
  timer,
}) => {
  return (
    timer > 0 && (
      <View
        style={[
          styles.timerStyle,
          timer > 10
            ? { backgroundColor: "#0e8345" }
            : { backgroundColor: "#df2525" },
        ]}
      >
        <Text style={styles.timerTextStyle}>
          {title} {timer}{" "}
        </Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  timerStyle: {
    width: "95%",
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 10,
  },
  timerTextStyle: {
    color: "white",
    fontWeight: "bold",
  },
});

export default TimerComponent;
