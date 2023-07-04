import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import { PlantSelect } from '../pages/PlantSelect';
import { MaterialIcons } from '@expo/vector-icons';
import { MyPlants } from '../pages/MyPlants';

const AppTabs = createBottomTabNavigator();

const AuthRoutes= () => {
    return(
        <AppTabs.Navigator
            tabBarOptions={{
                activeTintColor: colors.green,
                inactiveTintColor: colors.heading,
                labelPosition: 'beside-icon',
                style:{
                    paddingVertical: 20,
                    height: 80
                }
            }}>
                <AppTabs.Screen
                    name="Nova Planta"
                    component={PlantSelect}
                    options={{
                        tabBarIcon: (({ size, color }) =>( 
                            <MaterialIcons
                                name="add-circle-outline"
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                />

                <AppTabs.Screen
                    name="Minhas Planta"
                    component={MyPlants}
                    options={{
                        tabBarIcon: (({ size, color }) =>( 
                            <MaterialIcons
                                name={'format-list-bulleted'}
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                    />
            </AppTabs.Navigator>
    )
}

export default AuthRoutes;