import React from "react";
import "./App.css";
import styled, { css } from "styled-components";
import { BarGraph } from "./components/barChart";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from "@react-firebase/database";

const config = {
  apiKey: "AIzaSyDUY89t3eTe709M0hm3kUKsDaUsKxovMsQ",
  authDomain: "dhi-water-level-sensor.firebaseapp.com",
  databaseURL:
    "https://dhi-water-level-sensor-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dhi-water-level-sensor",
  storageBucket: "dhi-water-level-sensor.appspot.com",
  messagingSenderId: "801580174142",
  appId: "1:801580174142:web:415306920273bdc0583a6f",
  measurementId: "G-Y95C4WH5HY",
};

const App = () => {
  const [initialLevel, setInitialLevel] = React.useState(0);
  const [currentLevel, setCurrentLevel] = React.useState(0);

  React.useEffect(() => {
    setCurrentLevel(initialLevel);
  }, [initialLevel]);

  const volume = (initialLevel = 0, currentLevel = 0) => {
    return 0.1 * 0.15 * (currentLevel - initialLevel);
  };

  return (
    <div className="App">
      <header className="App-header">
        <FirebaseDatabaseProvider firebase={firebase} {...config}>
          <FirebaseDatabaseNode path="range/" limitToFirst={0}>
            {(data = 0) => {
              data.value?.value && setCurrentLevel(data.value?.value ?? 0);
              console.log("data", data.value?.value);

              return (
                <>
                  <$Container>
                    <$Header>Water level tester</$Header>
                    <$BarGraphContainer>
                      <BarGraph level={data.value?.value} />
                    </$BarGraphContainer>
                  </$Container>
                </>
              );
            }}
          </FirebaseDatabaseNode>
        </FirebaseDatabaseProvider>
      </header>
    </div>
  );
};

const $Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  width: 70%;
  min-height: 700px;
  color: #282c34;
  background-color: white;
  border-radius: 5px;
`;

const $Header = styled.div`
  font-size: "24px";
  font-weight: bold;
`;
const $BarGraphContainer = styled.div`
  width: 90%;
  height: 200px;
  margin: 50px 0 50px -50px;
`;

export default App;
