import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import Header from './components/Header';
import FkaToast from './components/Toast';
import ToastStore from './contexts/ToastContext';
import WeatherStore from './contexts/WeatherContext';
import Home from "./pages/Home";
import Login from './pages/Login';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <NativeRouter>
        <ToastStore>
          <Header />
          <WeatherStore>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
          </WeatherStore>
          <FkaToast />
        </ToastStore>
      </NativeRouter>
    </>
  );
}
