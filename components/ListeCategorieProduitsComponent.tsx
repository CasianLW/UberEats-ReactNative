import React from "react";
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
}

interface CategorieProps {
  title: string;
  productInfo: ProductType[] | undefined;
}

const ListeCategoriesProduitsComponent: React.FC = () => {
  return (
    <ScrollView horizontal={true} style={styles.listContainer}>
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

const ProductListComponent: React.FC<CategorieProps> = ({
  title,
  productInfo,
}) => {
  return (
    <View style={styles.productList}>
      <Text style={styles.title}>{title}</Text>
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
          />
        ))}
    </View>
  );
};

const ProductComponent: React.FC<ProductType> = ({
  title,
  image,
  greenMessage,
  uberOne,
  fraisDeLivraison,
  rating,
}) => {
  return (
    <View style={styles.product}>
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
