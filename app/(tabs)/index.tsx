import { Image, StyleSheet, Platform} from 'react-native';
import { CameraView, CameraType, useCameraPermissions} from 'expo-camera'
import {Text, View, Button } from 'react-native'
import {useState, useEffect, useRef } from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  const [permission, setPermission] = useCameraPermissions(); 
  const [facing, setFacing] = useState<CameraType>('back'); 
  const [photos, setPhotos] = useState<string[]>([]); 
  const [showCamera, setShowCamera] = useState(false);
  const cameraRef = useRef<CameraView>(null)

  if (!permission) {
    return <View/>;
  }
  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text>We need your permission to take a picture</Text>
        <Button onPress={setPermission} title='Grant permission' />
      </View>
    )
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync(); 
      if (photo) {
        setPhotos((prevPhoto) => [...prevPhoto, photo.uri]); 
        setShowCamera(false); 
      }
    }
  };

  const openCamera = () => {
    setShowCamera(true)
  }
  const closeCamera = () => {
    setShowCamera(false); 
  }
  

  return (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    {showCamera ? (
       <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
       <View style={styles.buttonContainer}>
         <FontAwesome name="camera" size={35} onPress={takePicture}/>
         <FontAwesome name="close" size={35} onPress={closeCamera} />
       </View>
     </CameraView>
    ) : (
      <View>
         <Text style={styles.title}>Products Screen</Text>
        <Button onPress={openCamera} title="Take Photo" /> 
        <Button title="Add Manually" />
      </View>
    )
  }
    
  </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex:1, 
    backgroundColor: 'transparent', 
    flexDirection: 'row', 
    margin: 30,
    justifyContent: 'space-between', 
    alignItems: 'flex-end'

  }, 
  camera: {
    flex: 0.5,
    width: 420,
    height: 100,
    borderRadius: 3

  },

  permissionContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'

  },
  title: {
    fontSize: 35
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
