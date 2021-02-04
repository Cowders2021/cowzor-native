import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import Header from './components/Header';
import FkaToast from './components/Toast';
import ToastStore from './contexts/ToastContext';
import WeatherStore from './contexts/WeatherContext';
import CameraPage from './pages/Camera';
import Home from "./pages/Home";
import Login from './pages/Login';
import Weather from './pages/Weather';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <NativeRouter>
        <ToastStore>
          <Header />
          <Route exact path="/" component={Login} />
          <WeatherStore>
            <Route path="/home" component={Home} />
            <Route path="/weather" component={Weather} />
          </WeatherStore>
          <Route path="/camera" component={CameraPage} />
          <FkaToast />
        </ToastStore>
      </NativeRouter>
    </>
  );
}
