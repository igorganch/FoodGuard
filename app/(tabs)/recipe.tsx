import { Image, StyleSheet, Platform } from 'react-native';
import {Text, View, } from 'react-native'

export default function RecipeScreen() {
  return (
  <View style={{flex: 1}}>
    <View style={styles.imageContainer}>

   <Image source={require('../../assets/images/recipe.png')} style={styles.image} />

    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
    borderRadius: 80,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
