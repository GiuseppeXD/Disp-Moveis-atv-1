import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  texto1: {
    color: '#f8f8ff',
    fontSize: 24,
    padding: 30
  },
  texto2: {
    color: '#fffaf0',
    fontSize: 16,
    padding: 30
  },
  texto3: {
    color: '#f0ffff',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 2,
    padding: 30,
    backgroundColor: '#000000',
  },
  texto4: {
    color: '#800000',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 2,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#f0ffff",
    padding: 10
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 10
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#FFF',
    fontWeight: 'bold',
    borderRadius: 3,
  },
  button: {
    width: 300,
    height: 42,
    backgroundColor: "#cd853f",
    marginTop: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",

  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#800000'
  }
});

  //make this component available to the app
  export default styles ;