import React from 'react'
import { TextInput,View,TouchableOpacity } from 'react-native'
import styles from './style'


export default function Search(){

    return(
          <View  style = {styles.containerSearch}>
              <TextInput
               placeholder="Pesquise"
               style = {styles.inputSearch}
               >
                   
               </TextInput>
          </View>      

        );

}