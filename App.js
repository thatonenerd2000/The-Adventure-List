import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Screens
import Landing from './views/Landing';
import Travel from './views/Travel';

//ICON IMPORT
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Landing} options={{headerShown:false,}}/>
                <Stack.Screen name="Travel" component={Travel} options={{
                    headerShown:true,
                    headerTitle:"",
                    headerStyle:{
                        backgroundColor:"#1D1C1A",
                    }
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App