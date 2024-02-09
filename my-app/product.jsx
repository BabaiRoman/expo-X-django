import React from "react"
import { Box, Button, Badge} from "native-base"



export default function Product({name,price}){
    return (
        <Box style={styles.container}>
            <Badge style={styles.nameBadge}>{name}</Badge>
            <Badge style={styles.priceBadge}>{price}</Badge>
            <Button style={styles.button}>Придбати</Button>
        </Box>
    )
}

const styles = {
    container: {
        
        borderWidth: 1, // Добавим границу для визуального отделения продукта
        borderColor: 'lightgray',
        borderRadius: 5,
        padding: 15,
        marginBottom: 10, // Отступ между продуктами
        flex: 1,
    },
    nameBadge: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    priceBadge: {
      backgroundColor: 'green',
      color: 'yellow',
      marginBottom: 10,
    },
    button: {
      alignSelf: 'center', // Центрируем кнопку
    }
  };