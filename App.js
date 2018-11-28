import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Firebase from "firebase";

export default class App extends React.Component {
  state = {
    email: "",
    pass: ""
  };

  componentDidMount = () => {
    var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };
    Firebase.initializeApp(config);

    //get data from firebase database
    //once to get data 1 time only and ON to get data when the data changes
    Firebase.database()
      .ref("users")
      .once("value", data => {
        console.log("fire data", data.toJSON());
      });

    //Add data to firebase database

    Firebase.database()
      .ref("users/03")
      .set({
        name: "kuku",
        age: 23
      })
      .then(() => {
        console.log("Inserted");
      })
      .catch(error => {
        console.log("error", error);
      });

    //Update data to firebase database

    // Firebase.database()
    //   .ref("users/02")
    //   .update({ name: "sharma" });

    //Remove data from firebase database
    Firebase.database()
      .ref("users/02/name")
      .remove();
  };

  handleSubmit = () => {
    let { email, pass } = this.state;
    let auth = Firebase.auth();
    auth
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        alert("you are logged in ");
      })
      .catch(error => {
        console.log("login error", error);
        alert("No user exist");
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Firebase shru krte h</Text>
        <Text>Email</Text>
        <TextInput onChangeText={email => this.setState({ email })} />
        <Text>Password</Text>
        <TextInput onChangeText={pass => this.setState({ pass })} />

        <Button title="Login" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
