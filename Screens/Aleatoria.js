import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Context } from '../Context/Context';


export default function Faleatoria() {
    const { ApiAle } = useContext(Context);
    return (
        <View style={styles.container}>
            <Text>Frase aleatoria</Text>
            <Text> </Text>
            {ApiAle.map((c) => <Text> {c.q} </Text> ) }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CCCC33',
      alignItems: 'center',
      justifyContent: 'space-around',
    }
  });
  