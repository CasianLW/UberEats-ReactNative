import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  Alert,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    padding: 16,
    borderRadius: 25,
    width: "100%",
  },
  input: {
    backgroundColor: "#ffffff",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 0,
    marginTop: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 16,
    borderRadius: 8,
    overflow: "hidden",
  },

  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

const RegisterComponent: React.FC = () => {
  const nameRef = useRef("");
  const surnameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateInputs = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    // Regex patterns
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // Validate name
    if (!nameRegex.test(nameRef.current)) {
      newErrors.name = "Invalid name (no special characters allowed)";
      isValid = false;
    }
    // Validate surname
    if (!nameRegex.test(surnameRef.current)) {
      newErrors.surname = "Invalid surname (no special characters allowed)";
      isValid = false;
    }

    // Validate email
    if (!emailRegex.test(emailRef.current)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Validate password
    if (!passwordRegex.test(passwordRef.current)) {
      newErrors.password =
        "Password must be at least 8 characters, with at least one uppercase letter, one lowercase letter, and one number";
      isValid = false;
    }

    // Validate confirm password
    if (passwordRef.current !== confirmPasswordRef.current) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      // Proceed with registration logic
      Alert.alert("Registration Successful");
    } else {
      Alert.alert("Registration Failed", "Please correct the errors");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) => (nameRef.current = text)}
        placeholder="Name"
      />
      {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

      <TextInput
        style={styles.input}
        onChangeText={(text) => (surnameRef.current = text)}
        placeholder="Surname"
      />
      {errors.surname ? (
        <Text style={styles.errorText}>{errors.surname}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        onChangeText={(text) => (emailRef.current = text)}
        placeholder="Email"
        keyboardType="email-address"
      />
      {errors.email ? (
        <Text style={styles.errorText}>{errors.email}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        onChangeText={(text) => (passwordRef.current = text)}
        placeholder="Password"
        secureTextEntry
      />
      {errors.password ? (
        <Text style={styles.errorText}>{errors.password}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        onChangeText={(text) => (confirmPasswordRef.current = text)}
        placeholder="Confirm Password"
        secureTextEntry
      />
      {errors.confirmPassword ? (
        <Text style={styles.errorText}>{errors.confirmPassword}</Text>
      ) : null}

      <View style={styles.buttonContainer}>
        <Button color={"#0e8345"} title="Register" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default RegisterComponent;
