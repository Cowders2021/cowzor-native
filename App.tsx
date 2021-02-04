import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NativeRouter>
        <Route exact path="/" component={Home} />
      </NativeRouter>

    </>
  );
}
