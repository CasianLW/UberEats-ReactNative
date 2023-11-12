import React, { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Example: FC<{ cartItemCount: number }> = ({ cartItemCount }) => {
  return (
    <View style={styles.navContainer}>
      <View style={styles.menuContainer}>
        <Text>Menu</Text>
      </View>
      <View style={styles.logoContainer}>
        <Text>Uber Eats</Text>
      </View>
      <View style={styles.cartContainer}>
        <View style={styles.cartIcon}>
          <Text style={styles.cartText}>🛒</Text>
        </View>
        <Text style={styles.cartItemCount}>{cartItemCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  menuContainer: {
    // Style for your menu container
  },
  logoContainer: {
    // Style for your logo container
  },
  cartContainer: {
    backgroundColor: "black",
    borderRadius: 15,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  cartIcon: {
    marginLeft: 5,
  },
  cartText: {
    color: "white",
  },
  cartItemCount: {
    color: "white",
    marginLeft: 5,
    marginRight: 5,
    // Additional styling if needed
  },
});

export default Example;
