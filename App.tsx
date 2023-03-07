import { NavigationContainer } from '@react-navigation/native';
import {View, Text} from 'react-native'
import Login from './src/pages/Login';
import SigInRoutes from './src/routes/SigIn.routes';

export default function App() {
  return (
    <NavigationContainer>
      <SigInRoutes />
    </NavigationContainer>
  );
}
