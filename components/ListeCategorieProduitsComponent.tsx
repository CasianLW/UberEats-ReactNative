import React, { FC } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
//import categoriesProductsData from '@/content/categoriesProducts.json';
import categoriesProductsData from "../content/categoriesProducts.json";
import useOpeningStatus from "./customHooks/useOpeningStatus";

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
  const isOpen = useOpeningStatus(openingHours);

  return (
    <View style={styles.product}>
      {/* <ImageBackground
      source={{
        uri:
          image ??
          "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3Jlc2l6ZWQvODQwMWZmZDQwMjk3MjIxMjdmM2NlZTNjYjg3NjExYmEtdzU1MC1mNi5qcGc=",
      }}
      style={styles.product}
      resizeMode="cover" // This will ensure the image covers the full width
    > */}
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
      {/* </ImageBackground> */}
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
    // width: "100%", // Take the full width of the container
    height: "50%", // Take the full height of the container
    // backgroundColor: "red", // fix
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    zIndex: -10,
    width: "100%", // fix later
    height: "100%", // fix later
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
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 14,
  },
  ratingContainer: {
    color: "black",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingBadge: {
    backgroundColor: "grey", // fix
    borderRadius: 50,
    padding: 4,
    marginBottom: 8,
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
    color: "black",
    fontSize: 12,
  },
  ratingText: {
    color: "black",
    fontSize: 12,
  },
});

export default ListeCategoriesProduitsComponent;
