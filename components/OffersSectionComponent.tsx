import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Animated, StyleSheet } from 'react-native';
import offersData from '@/app/content/offersData.json';
import { limitCharacters } from '@/app/utils/toolbox';
import { offre1HomepageSalad } from '@/app/assets'; 

const imageMap: { [key: string]: any } = { // Replace 'any' with correct type, needs to fix
  offre1HomepageSalad: offre1HomepageSalad,
};

const OffersSectionComponent: React.FC = () => {
  const [translateX, setTranslateX] = useState(new Animated.Value(0));

  const prevSlide = () => {
    if (translateX._value < 0) {
      Animated.spring(translateX, {
        toValue: translateX._value + 50,
        useNativeDriver: true,
      }).start();
    }
  };

  const nextSlide = () => {
    if (translateX._value > -50) {
      Animated.spring(translateX, {
        toValue: translateX._value - 50,
        useNativeDriver: true,
      }).start();
    } else if (translateX._value > -150) {
      Animated.spring(translateX, {
        toValue: translateX._value - 100,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        {offersData.map((offer, index) => (
          <OfferComponent
            key={index}
            text={offer.text}
            image={imageMap[offer.image] || offre1HomepageSalad}
            buttonText={offer.buttonText}
            link={offer.link}
            hexColor={offer.hexColor}
          />
        ))}
      </Animated.View>
      <TouchableOpacity
        onPress={prevSlide}
        style={styles.prevButton}
        disabled={translateX._value === 0}
      >
        <Text>&lt;&lt;</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={nextSlide}
        style={styles.nextButton}
        disabled={translateX._value <= -150}
      >
        <Text>&gt;&gt;</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OffersSectionComponent;

interface OfferProps {
  text: string;
  image: any; // fix  if needed
  buttonText: string;
  link: string;
  hexColor?: string;
}

const OfferComponent: React.FC<OfferProps> = ({
  text,
  image,
  link,
  buttonText,
  hexColor,
}) => {
  return (
    <TouchableOpacity style={[styles.offerContainer, { backgroundColor: hexColor || '#f9f9f9' }]}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{limitCharacters(text, 30)}</Text>
        <Text style={styles.buttonText}>{buttonText} →</Text>
      </View>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
};

// Add the styles below
const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  animatedContainer: {
    flexDirection: 'row',
    width: '500%', // fix later
  },
  prevButton: {
    position: 'absolute',
    left: 0,
    top: '50%',
  },
  nextButton: {
    position: 'absolute',
    right: 0,
    top: '50%',
  },
});
