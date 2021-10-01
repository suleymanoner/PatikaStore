import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({products}) => {
    return(
    <View style={styles.container}>
        <View>
            <Image style={styles.image} source={{uri: products.imgURL}} />
            <Text style={styles.name}>{products.title}</Text>
            <Text style={styles.price}>{products.price}</Text>
            {!products.inStock && <Text style={styles.stock}>Out of Stock</Text>}
        </View>
    </View>
    );
}


export default ProductCard;