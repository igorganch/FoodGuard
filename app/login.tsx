import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const Login = () => {
  const [mode, setMode] = useState("login"); // "login" or "Sign Up"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = () => {
    // simply log the input values.
    console.log({ name, email, password });
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="bg-white p-5 w-full max-w-md rounded-lg shadow-md">
        <Text className="text-2xl font-bold mb-4">
          {mode === "Sign Up" ? "Create Account" : "Login"}
        </Text>
        <Text className="text-sm text-gray-500 mb-6">
          Please {mode === "Sign Up" ? "sign up" : "log in"} to check your food's expiration date
        </Text>

        {mode === "Sign Up" && (
          <View className="w-full mb-5">
            <Text className="text-sm text-gray-800 mb-2">Full Name</Text>
            <TextInput
              className="w-full p-2 text-sm border border-gray-300 rounded"
              value={name}
              onChangeText={setName}
              placeholder="Full Name"
            />
          </View>
        )}

        <View className="w-full mb-5">
          <Text className="text-sm text-gray-800 mb-2">Email</Text>
          <TextInput
            className="w-full p-2 text-sm border border-gray-300 rounded"
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>

        <View className="w-full mb-5">
          <Text className="text-sm text-gray-800 mb-2">Password</Text>
          <TextInput
            className="w-full p-2 text-sm border border-gray-300 rounded"
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />
        </View>

        <TouchableOpacity onPress={onSubmitHandler} className="w-full py-3 bg-teal-400 rounded">
          <Text className="text-white text-lg font-bold text-center">
            {mode === "Sign Up" ? "Create Account" : "Login"}
          </Text>
        </TouchableOpacity>

        <Text className="text-sm text-gray-500 mt-8 text-center">
          {mode === "Sign Up"
            ? "Already have an account? "
            : "Don't have an account? "}
          <Text
            className="text-teal-400 underline font-bold"
            onPress={() => setMode(mode === "Sign Up" ? "login" : "Sign Up")}
          >
            {mode === "Sign Up" ? "Login here" : "Sign up here"}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
