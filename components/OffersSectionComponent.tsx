import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import offersData from "../content/offersData.json";
import { limitCharacters } from "../utils/toolbox";
import { offre1Homepage } from "../assets";

const OfferComponent: React.FC<{
  text: string;
  image: any; // Correct type based on your image import
  buttonText: string;
  link: string;
  hexColor?: string;
}> = ({ text, image, buttonText, hexColor }) => {
  const imageSource = image ? { uri: image } : offre1Homepage; // Assuming `image` is a URI
  return (
    <TouchableOpacity
      style={[
        styles.offerContainer,
        { backgroundColor: hexColor || "#f9f9f9" },
      ]}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{limitCharacters(text, 30)}</Text>
        <Text style={styles.buttonText}>{buttonText} →</Text>
      </View>
      <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
};

const OffersSectionComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {offersData.map((offer, index) => (
          <OfferComponent
            key={index}
            text={offer.text}
            image={offer.image}
            buttonText={offer.buttonText}
            link={offer.link}
            hexColor={offer.hexColor}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexDirection: "row",
  },
  offerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 300, // set this to the width of the viewable area
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonText: {
    color: "black",
  },
  image: {
    width: "100%", // Adjust the width as necessary
    height: 100, // Adjust the height as necessary
    resizeMode: "contain",
  },
});

export default OffersSectionComponent;
