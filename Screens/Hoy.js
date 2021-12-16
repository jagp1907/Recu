import React, {useContext} from 'react';
import { StyleSheet, Text, Button, View } from 'react-native'
import { Context }  from '../Context/Context';

export default function fhoy() {
    const { Apidehoy } = useContext(Context);
    return (
        <View style={styles.container}>
            <Text>Frase de hoy:</Text>
            <Text> </Text>
            {Apidehoy.map((c) => <Text> {c.q}</Text> ) }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#99FF99',
      alignItems: 'center',
      justifyContent: 'space-around',
    }
});