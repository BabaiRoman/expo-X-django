import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {NativeBaseProvider, Box, ScrollView} from 'native-base'
import { useState } from 'react';
import Product from "./product"

const host = "https://radieyshn.pythonanywhere.com"
const token = '3559dc7d681669e5eb18c80324a6623a15a716fd'

export default function App() {
  const [productList, setProductList] = useState([])

  function fetchProduct(){
    fetch(`${host}/api/products/`,{
      headers: {
        "Authorization": `Token ${token}`
      }
    })
    .then(responce => {
        return responce.json()
    })
    .then(data => {
      setProductList(data)
    })
  }

  fetchProduct()
  return (
    <NativeBaseProvider>
      <ScrollView bgColor={"muted.700"}>
        <Box alignItems = {"center"} paddingTop={50} bg = {'muted.400'}>
          {productList.map(product => (
            <Product name = {product.name} price = {product.price} alignItems = {"center"} color = {"red"}/>
          ))}
        </Box>
      </ScrollView>
    </NativeBaseProvider> 
  );
}