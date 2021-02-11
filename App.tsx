import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import Header from './components/Header';
import FkaToast from './components/Toast';
import AnalyzerStore from './contexts/AnalyzerContext';
import IssueStore from './contexts/IssueContext';
import SensorStore from './contexts/SensorContext';
import ToastStore from './contexts/ToastContext';
import WeatherStore from './contexts/WeatherContext';
import CameraPage from './pages/Camera';
import Cownter from './pages/Cownter';
import Dashboard from './pages/Dashboard';
import Fields from './pages/Fields';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Subscription from './pages/Subscription';
import Weather from './pages/Weather';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <NativeRouter>
        <ToastStore>
          <AnalyzerStore>
            <WeatherStore>
              <Header />
              <Route exact path="/" component={Subscription} />
              <Route path="/weather" component={Weather} />
              <Route path="/camera" component={CameraPage} />
              <SensorStore>
                <Route path="/dashboard" component={Dashboard} />
              </SensorStore>
              <Route path="/cownter" component={Cownter} />
              <Route path="/menu" component={Menu} />
              <IssueStore>
                <Route path="/fields" component={Fields} />
              </IssueStore>
            </WeatherStore>
            <FkaToast />
          </AnalyzerStore>
        </ToastStore>
      </NativeRouter>
    </>
  );
}
