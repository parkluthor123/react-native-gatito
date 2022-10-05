import { StyleSheet } from 'react-native';
import Routes from './src/routes';
import TelaPadrao from './src/components/TelaPadrao';


export default function App() {
  return (
    <>
      <TelaPadrao>
        <Routes/>
      </TelaPadrao>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
