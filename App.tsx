import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import Home from "./pages/Home";
import Login from './pages/Login';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NativeRouter>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </NativeRouter>
    </>
  );
}
