import React, { Component } from "react";
import {
  Button,
  Switch,
  StyleSheet,
  TextInput,
  Alert,
  Text,
  View,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default class App extends Component {
  state = {
    email: "",
    password: "",
    isValidEmail: true,
    isValidPassword: true,
  };

  handleEmailChange = (text) => {
    this.setState({ email: text });
    const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = regex.test(text);
    this.setState({ isValidEmail });
  };

  handlePasswordChange = (text) => {
    this.setState({ password: text });
    const isValidPassword = text.length >= 8;
    this.setState({ isValidPassword });
  };

  handleSubmit = () => {
    if (!this.state.isValidEmail) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (!this.state.isValidPassword) {
      Alert.alert(
        "Invalid Password",
        "Password must be at least 8 characters long."
      );
      return;
    }

    Alert.alert("Successful Login", "You have been logged in successfully!");
  };

  render() {
    const { email, password, isValidEmail, isValidPassword } = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("./assets/p1.jpg")} />
        <Text style={styles.subTitle}>Sign In to your account</Text>
        <TextInput
          placeholder="email@email.com"
          style={[
            styles.textInput,
            isValidEmail ? styles.validInput : styles.invalidInput,
          ]}
          onChangeText={this.handleEmailChange}
          value={email}
        />
        <TextInput
          placeholder="password"
          style={[
            styles.textInput,
            isValidPassword ? styles.validInput : styles.invalidInput,
          ]}
          onChangeText={this.handlePasswordChange}
          value={password}
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Log In"
            onPress={this.handleSubmit}
            style={styles.loginButton}
            //disabled={!isValidEmail || !isValidPassword}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 80,
    color: "#000",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    color: "gray",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "80%",
    marginTop: 20,
    borderRadius: 30,
  },
  validInput: {
    borderColor: "green",
  },
  invalidInput: {
    borderColor: "red",
  },
  buttonContainer: {
    marginTop: 20,
    width: "50%",
  },
  loginButton: {
    width: "100%", // Establece la anchura del botón
  },
  logo: {
    width: 200, // Ancho deseado
    height: 100, // Alto deseado
  },
});
