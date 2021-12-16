import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import aleatorio from '../Screens/Aleatoria';
import varios from '../Screens/Conjunto';
import fhoy from '../Screens/Hoy';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator1(){
    return(
        <Drawer.Navigator
            initialRouteName="fhoy"
            drawerStyle={{
                backgroundColor:'#fff',
                width:'80%'
            }}
            drawerContentOptions={{
                activeTintColor:"#99FF99",
                inactiveTintColor:"#0066FF"
            }}     
        >
            <Drawer.Screen
                name="HOY"
                component={fhoy}
                options={{
                    headerShown:false,
                    drawerLabel:"Frase de hoy"                
                }}
            
            />
            <Drawer.Screen
                name="ALEATORIA"
                component={aleatorio}
                options={{
                    headerShown:false,
                    drawerLabel:"Frase aleatoria"
                }}
            />
                        <Drawer.Screen
                name="TODAS"
                component={varios}
                options={{
                    headerShown:false,
                    drawerLabel:"Todas las frases"
                }}
            />
        </Drawer.Navigator>
    )
}