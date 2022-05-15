import React,{useState} from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';
import { Card, CardHeader } from '../components';
import * as ImagePicker from 'expo-image-picker';
import header from '../assets/accesoImagenes.png'

const { width } = Dimensions.get('screen');
let datosIniciales= {
  title: 'Vista previa de imagen',
  image: 'https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?fit=crop&w=1947&q=80',
  cta: '', 
  horizontal: true
}
let encabezado= {
  title: 'Acceso a la galeria de imagenes',
  image: header,
  cta: 'header', 
  horizontal: true
}

export default function Home() {
  const [image, setImage] = useState(null);
  const [datos,setDatos] = useState(datosIniciales)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setDatos({image: result.uri})
      
    }
  };

    return (
      <Block flex center style={styles.home}>
         <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.articles}>          
          <Block flex>
            <Card item={encabezado} full  />
            
          </Block>
          <Block flex>
            
            <Card item={datos} full pickImage= {pickImage} />
          </Block>
        </ScrollView>
      </Block> 
    )
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});


