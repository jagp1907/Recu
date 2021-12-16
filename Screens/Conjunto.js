import React,{useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Context } from '../Context/Context';

export default function ConjuntoF() {
    const { Aconjunto } = useContext(Context);
    return (
        <ScrollView>
            <View style={styles.container}>
            <Text>Conjunto</Text>
            <Text> </Text>
            {Aconjunto.map((c) => <Text>{c.q}</Text>)}
        </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF6600',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: 35,
    }
});
  