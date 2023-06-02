import React,{Fragment} from 'react'
import {Image,Text} from 'react-native'
import styles from './style';

const imagem = Math.floor(Math.random() * 4 + 1);

export default function BannerMovies(){
        return(
                <>
                <Text style = {styles.textBanner}>Para adoção</Text>
                <Image style ={styles.imageBanner} source = {require(`../../Img/${imagem}.jpg`)} />
                </>
                
        );
}