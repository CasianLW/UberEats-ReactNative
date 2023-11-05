import React, { FC } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
//import {dealsHomepageCategory,groceryHomepageCategory,convenienceHomepageCategory,bakeryHomepageCategory,} from "../assets";

import { dealsHomepageCategory, groceryHomepageCategory } from "../assets";

const CategoriesSectionComponent: FC = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <CategorieComponent
        name={"Offres"}
        image={"https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png"}
      />
      <CategorieComponent
        name={"Courses"}
        image={"https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png"}
      />
      {/* ... other categories */}
    </ScrollView>
  );
};

export default CategoriesSectionComponent;

interface CategorieProps {
  name: string;
  image: any;
}

const CategorieComponent: FC<CategorieProps> = ({ name, image }) => {
  return (
    <View style={styles.categorieContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 4,
  },
  categorieContainer: {
    alignItems: "center",
    marginRight: 16,
  },
  image: {
    borderRadius: 40,
    width: 80,
    height: 80,
    marginBottom: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
