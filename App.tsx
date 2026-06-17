import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DetailsScreen from './src/screens/DetailsScreen';
import UniListScreen from './src/screens/UniListScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './src/navigation/navs';
import { colors } from './src/theme/colors';

function App() {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.background}
        />
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colors.background },
            headerTintColor: colors.text,
            headerTitleStyle: { color: colors.text, fontWeight: '600' },
          }}
        >
          <Stack.Screen
            name="List"
            component={UniListScreen}
            options={{ title: 'University List' }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;
