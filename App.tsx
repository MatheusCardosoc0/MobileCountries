import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/context/AuthContextUser';
import Routes from './src/routes';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='#000' style='light' translucent={false} />
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}
