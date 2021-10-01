import React from "react";
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import SearchBar from "./components/SearchBar/SearchBar";
import product_data from './products.json';
import ProductCard from './components/ProductCard/ProductCard';


function App() {

  const renderProduct = ({ item }) => <ProductCard products={item} />

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <SearchBar style={styles.searchBar}/>
      <FlatList 
        data={product_data}
        renderItem={renderProduct}
        numColumns= {2}
        horizontal={false}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#77008E',
    paddingLeft: 13
  },
  searchBar: {
    padding: 10
  },
  row: {
    flex: 2,
    justifyContent: "space-between"
  }
})

export default App;