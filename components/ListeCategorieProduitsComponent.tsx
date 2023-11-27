import React, { FC, useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
//import categoriesProductsData from '@/content/categoriesProducts.json';
import categoriesProductsData from "../content/categoriesProducts.json";

interface ProductType {
  title: string;
  image: any; // In React Native, we often require images or use { uri: 'imagepath' }
  greenMessage: string;
  uberOne: boolean;
  fraisDeLivraison: number;
  rating: number;
  openingHours: {
    open: string;
    close: string;
  };
}

interface CategorieProps {
  title: string;
  productInfo: ProductType[] | undefined;
}

const ListeCategoriesProduitsComponent: FC = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator
      horizontal={false}
      style={styles.listContainer}
    >
      <ProductListComponent
        title={
          categoriesProductsData.productCategories.recemmentConsultees
            .categoryName
        }
        productInfo={
          categoriesProductsData.productCategories.recemmentConsultees.products
        }
      />
    </ScrollView>
  );
};

const ProductListComponent: FC<CategorieProps> = ({ title, productInfo }) => {
  return (
    <View style={styles.productList}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal={false}>
        {productInfo &&
          productInfo.map((product, index) => (
            <ProductComponent
              key={index}
              title={product.title}
              image={product.image}
              greenMessage={product.greenMessage}
              uberOne={product.uberOne}
              fraisDeLivraison={product.fraisDeLivraison}
              rating={product.rating}
              openingHours={product.openingHours}
            />
          ))}
      </ScrollView>
    </View>
  );
};

const ProductComponent: FC<ProductType> = ({
  title,
  image,
  greenMessage,
  uberOne,
  fraisDeLivraison,
  rating,
  openingHours,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const checkIfOpen = () => {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();

    const [openHours, openMinutes] = openingHours.open.split(":").map(Number);
    const [closeHours, closeMinutes] = openingHours.close
      .split(":")
      .map(Number);

    const isOpenNow =
      (currentHours > openHours ||
        (currentHours === openHours && currentMinutes >= openMinutes)) &&
      (currentHours < closeHours ||
        (currentHours === closeHours && currentMinutes < closeMinutes));

    setIsOpen(isOpenNow);
  };

  useEffect(() => {
    const interval = setInterval(checkIfOpen, 1000); // Check every second
    checkIfOpen(); // Initial check
    // console.log("checkIfOpen: ", isOpen);
    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.product}>
      {!isOpen && (
        <View style={styles.overlayStyle}>
          <Text style={styles.closedTextStyle}>Closed</Text>
        </View>
      )}
      <Image
        style={styles.image}
        source={
          image
            ? { uri: image }
            : require("../assets/homepage/productsList.png")
        }
      />

      <Text style={styles.greenMessage}>{greenMessage}</Text>
      {/* The rest of your component */}
      <View style={styles.ratingContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>
      <View style={styles.deliveryInfo}>
        {uberOne && (
          <Image
            style={styles.uberIcon}
            source={require("../assets/homepage/uberOne.png")}
          />
        )}
        <Text style={styles.deliveryText}>
          • Frais de Livraison : {fraisDeLivraison}€
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    zIndex: 1, // Ensures the overlay is above other content
  },
  closedTextStyle: {
    color: "white",
    fontSize: 20,
    // Add more styles if needed for the "Closed" text
  },
  listContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  productList: {
    marginRight: 16,
  },
  product: {
    marginRight: 16,
    height: "50%", // fix later
    backgroundColor: "red", // fix
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%", // fix later
    height: 100, // fix later
    justifyContent: "center",
    alignItems: "center",
  },
  greenMessage: {
    backgroundColor: "green", // fix
    color: "white",
    paddingHorizontal: 8,
    marginVertical: 12,
    borderRadius: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 14,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingBadge: {
    backgroundColor: "grey", // fix
    borderRadius: 50,
    padding: 4,
    //width: 'fit-content',
    textAlign: "center",
    fontSize: 12,
  },
  deliveryInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  uberIcon: {
    width: 16,
    height: 16,
  },
  deliveryText: {
    fontSize: 12,
  },
  ratingText: {
    fontSize: 12,
  },
});

export default ListeCategoriesProduitsComponent;
