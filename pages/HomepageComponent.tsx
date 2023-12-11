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
import { HomeScreenNavigationProp } from "../App";

type HomepageComponentProps = {
  navigation: HomeScreenNavigationProp;
};

const HomepageComponent: FC<HomepageComponentProps> = ({ navigation }) => {
  const remainingTime = useTimer(500);

  const timerRef = useRef(0); // Initialize ref
  useTimerRef(30, timerRef);

  const [cartItemCount, setCartItemCount] = useState(0);
  const addItemToCart = () => {
    setCartItemCount(cartItemCount + 1);
  };
  const removeItemFromCart = () => {
    setCartItemCount(cartItemCount - 1);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <NavComponent cartItemCount={cartItemCount} />

        <CategoriesSectionComponent />
        <TimerComponent
          timer={remainingTime}
          title={"Votre offre expire en:"}
        />

        <Button
          color={"black"}
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />

        <DishesListComponent
          addToCart={addItemToCart}
          removeFromCart={removeItemFromCart}
          cartItemCount={cartItemCount}
        />
        <TimerComponent
          timer={timerRef.current}
          title={"Livraison offerte! Depechez-vous:"}
        />
        <OffersSectionComponent />

        {/* <Text>Contenu de la page</Text> */}
        <View style={styles.contentGrid}>
          {/* <View style={styles.filterColumn}>
            <Text>filtres</Text>
          </View> */}
          <View style={styles.productsColumn}>
            <ListeCategoriesProduitsComponent />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomepageComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 12,
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
