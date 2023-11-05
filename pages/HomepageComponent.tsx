import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CategoriesSectionComponent from './components/homepage/CategoriesSectionComponent.tsx';
import OffersSectionComponent from './components/homepage/OffersSectionComponent.tsx';
import ListeCategoriesProduitsComponent from './components/homepage/ListeCategoriesProduitsComponent.tsx';

const HomepageComponent: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <CategoriesSectionComponent />
        <OffersSectionComponent />

        <Text>Contenu de la page</Text>
        <View style={styles.contentGrid}>
          <View style={styles.filterColumn}>
            <Text>filtres</Text>
          </View>
          <View style={styles.productsColumn}>
            <ListeCategoriesProduitsComponent />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  contentGrid: {
    flexDirection: 'row',
    width: '100%',
  },
  filterColumn: {
    flex: 3,
    backgroundColor: '#e2e2e2', // gray color
  },
  productsColumn: {
    flex: 9,
  },
});
