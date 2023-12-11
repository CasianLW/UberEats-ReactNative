import React, { FC, useRef, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import CategoriesSectionComponent from "../components/CategoriesSectionComponent";
import OffersSectionComponent from "../components/OffersSectionComponent";
import ListeCategoriesProduitsComponent from "../components/ListeCategorieProduitsComponent";
import NavComponent from "../components/NavComponent";
import DishesListComponent from "../components/DishesListComponent";
import TimerComponent from "../components/TimerComponent";
import useTimer from "../components/customHooks/useTimer";
import useTimerRef from "../components/customHooks/useTimerRef";
import RegisterComponent from "../components/RegisterComponent";
import { RegisterScreenNavigationProp } from "../App";

type RegisterPageProps = {
  navigation: RegisterScreenNavigationProp;
};
const RegisterPage: FC<RegisterPageProps> = ({ navigation }) => {
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <NavComponent cartItemCount={cartItemCount} />
        <RegisterComponent />
        <Button
          color={"black"}
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </ScrollView>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 12,
    gap: 12,
  },
  contentGrid: {
    flexDirection: "row",
    width: "100%",
  },
  filterColumn: {
    flex: 3,
    backgroundColor: "#e2e2e2", // gray color
  },
  productsColumn: {
    flex: 12,
    width: "100%",

    // flex: 9,
  },
});
