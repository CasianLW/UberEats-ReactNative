import React, { FC } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import recommandedDishesData from "../content/recommandedDishes.json";
const DishesListComponent: FC<{
  addToCart: () => void;
  removeFromCart: () => void;
  cartItemCount: number;
}> = ({ cartItemCount, addToCart, removeFromCart }) => {
  return (
    <View style={styles.sectionContainer}>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "black",
          }}
        >
          Recommended Dishes
        </Text>
      </View>

      <ScrollView style={{ paddingVertical: 16 }} horizontal>
        {/* <View> */}
        {recommandedDishesData.map((product, index) => (
          <DishItem
            key={index}
            cartItemCount={cartItemCount}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            image={product.image}
            title={product.name}
            price={product.price}
            owner={product.owner}
          />
        ))}
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

const DishItem: FC<{
  cartItemCount: number;

  addToCart: () => void;
  removeFromCart: () => void;
  image: string;
  title: string;
  price: number;
  owner: string;
}> = ({
  cartItemCount,
  addToCart,
  removeFromCart,
  image,
  title,
  price,
  owner,
}) => {
  return (
    <View style={styles.dishComponent}>
      <View style={styles.dishTopContainer}>
        <Image
          style={styles.dishImage}
          width={100}
          height={100}
          source={{ uri: image }}
        />
        <View style={styles.buttonContainer}>
          {cartItemCount > 0 && (
            <TouchableOpacity
              onPress={removeFromCart}
              style={styles.dishButtons}
            >
              <Text>-</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={addToCart} style={styles.dishButtons}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        {/* Rest of your code */}
        <Text style={styles.dishPrice}>€{price}</Text>
      </View>
      <View>
        <Text style={styles.dishTitle}>{title}</Text>
        <Text style={styles.dishOwner}>{owner}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dishComponent: {
    marginRight: 10,
    width: 150,
    display: "flex",
    flexDirection: "column",
    // height: 200,
    // width: "100%",
  },
  sectionContainer: {
    // flexDirection: "row",
    textAlign: "left",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    // height: 200,
  },
  dishImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    marginLeft: "auto",
    flexDirection: "row",
    marginBottom: 60,
    // justifyContent: "space-between",
    // width: "100%",
  },
  overlayContent: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  dishPrice: {
    borderRadius: 15,
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.65)",
    color: "white",
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginRight: 4,
    marginBottom: 4,
    // width: "100%",
  },
  dishTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dishOwner: {},
  dishTopContainer: {
    // height: 100,
  },
  dishButtons: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    borderRadius: 15,
    backgroundColor: "white",
    color: "white",
    fontSize: 16,
    fontWeight: "900",
  },
});

export default DishesListComponent;
