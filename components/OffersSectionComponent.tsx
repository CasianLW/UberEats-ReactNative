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
const imageStyle = StyleSheet.absoluteFillObject;

const OfferComponent: React.FC<{
  text: string;
  image: any;
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
      {/* The Image component is positioned absolutely to cover the entire container */}
      <Image source={imageSource} style={[imageStyle, styles.image]} />

      {/* We added an overlay view to ensure text is visible on top of the image */}
      <View style={styles.textOverlay}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{limitCharacters(text, 30)}</Text>
          <View style={styles.buttonBackground}>
            <Text style={styles.buttonText}>{buttonText} →</Text>
          </View>
        </View>
      </View>
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
  buttonBackground: {
    backgroundColor: "white",
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 8,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flexDirection: "row",
  },
  offerContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 300,
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
    margin: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    alignSelf: "flex-start", // Aligns self to the content size
  },
  text: {
    color: "white",
    fontWeight: "bold",
    width: "100%",

    fontSize: 16,
    backgroundColor: "black",
    paddingTop: 20,
  },
  buttonText: {
    //marginBottom: 8,
    color: "black",
  },
  image: {
    //width: "100%",
    //height: 100,
    resizeMode: "cover",
  },
  textOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});

export default OffersSectionComponent;
