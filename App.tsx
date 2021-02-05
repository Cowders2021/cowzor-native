import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import Header from './components/Header';
import FkaToast from './components/Toast';
import ToastStore from './contexts/ToastContext';
import WeatherStore from './contexts/WeatherContext';
import CameraPage from './pages/Camera';
import Fields from './pages/Fields';
import Home from "./pages/Home";
import Login from './pages/Login';
import Weather from './pages/Weather';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <NativeRouter>
        <ToastStore>
          <WeatherStore>
            <Header />
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/weather" component={Weather} />
            <Route path="/camera" component={CameraPage} />
            <Route path="/fields" components={Fields}/>
          </WeatherStore>
          <FkaToast />
        </ToastStore>
      </NativeRouter>
    </>
  );
}
