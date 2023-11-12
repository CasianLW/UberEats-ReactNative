import React, { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SvgUri } from "react-native-svg";
// import UberLogo from "../assets/UberLogo.svg";
// import PanierIcon from "../assets/panierIcon.svg";

const NavComponent: FC<{ cartItemCount: number }> = ({ cartItemCount }) => {
  return (
    <View style={styles.navContainer}>
      <View style={styles.menuContainer}>
        {/* Replace with your actual menu items */}
        <Text>Menu</Text>
      </View>
      <View style={styles.logoContainer}>
        {/* Replace with your actual logo */}
        <Text>
          Uber Eats
          {/* <Image source={require("./UberIcon.svg")}></Image> */}
          {/* <SvgUri
            width="100%"
            height="100%"
            uri={require("../assets/UberLogo.svg")}
          /> */}
          {/* <UberLogo width="100%" height="100%" /> */}
        </Text>
      </View>
      <View style={styles.cartContainer}>
        <View style={styles.cartIcon}>
          {/* Replace with your actual cart icon */}
          <Text style={styles.cartText}>🛒</Text>
          {/* <Text style={styles.cartText}> */}
          {/* <SvgUri
              width="100%"
              height="100%"
              uri={require("../assets/panierIcon.svg")}
            /> */}
          {/* <PanierIcon width="100%" height="100%" /> */}
          {/* </Text> */}
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

export default NavComponent;
