import React, { FC, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import CategoriesSectionComponent from "../components/CategoriesSectionComponent";
import OffersSectionComponent from "../components/OffersSectionComponent";
import ListeCategoriesProduitsComponent from "../components/ListeCategorieProduitsComponent";
import NavComponent from "../components/NavComponent";
import DishesListComponent from "../components/DishesListComponent";

const HomepageComponent: FC = () => {
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
        <DishesListComponent
          addToCart={addItemToCart}
          removeFromCart={removeItemFromCart}
          cartItemCount={cartItemCount}
        />
        <OffersSectionComponent />

        <Text>Contenu de la page</Text>
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
