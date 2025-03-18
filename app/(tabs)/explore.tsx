import { StyleSheet, Image, Platform, View, Text } from 'react-native';



export default function TabTwoScreen() {
  return (
   <View style={styles.container}>
    <Text>Dashboard Screen</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'

  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
