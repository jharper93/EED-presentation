import React from 'react'
import './App.css';
import styled from 'styled-components'
import {BarGraph} from './components/barChart'
import axios from  'axios'
import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode
} from "@react-firebase/database";


const config = {
  apiKey: "AIzaSyDUY89t3eTe709M0hm3kUKsDaUsKxovMsQ",
  authDomain: "dhi-water-level-sensor.firebaseapp.com",
  databaseURL: "https://dhi-water-level-sensor-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dhi-water-level-sensor",
  storageBucket: "dhi-water-level-sensor.appspot.com",
  messagingSenderId: "801580174142",
  appId: "1:801580174142:web:415306920273bdc0583a6f",
  measurementId: "G-Y95C4WH5HY"
};

const App = () => {

  const [level, setLevel] = React.useState(0)

  const fetchData = async () => {


    try { 
      const {data} = await axios.get("https://cors-anywhere.herokuapp.com/https://csrng.net/csrng/csrng.php?min=5&max=95")

     
      setLevel(data[0].random)

    } catch(err){
      setLevel(50)
    }

        
  }

  return (
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <FirebaseDatabaseNode
            path="range/"
            limitToFirst={level}
         
          >




{data => {
  console.log(data)
              return (
                <div className="App">
                <header className="App-header">
                  <$Container >
                    <$Header>Water level tester</$Header>
                      <$BarGraphContainer>
                          <BarGraph level={data.value.value}/>
                      </$BarGraphContainer>
                  </$Container>
                  <button onClick={fetchData}>
                    click
                  </button>
                </header>
              </div>)
            }}

  
    </FirebaseDatabaseNode>
    </FirebaseDatabaseProvider>
  );
}

const $Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 50px;
width: 70%;
min-height: 700px; 
color:  #282c34;
background-color: white;
border-radius: 5px;
`

const $Header = styled.div`
font-size: '24px';
font-weight: bold;
`
const $BarGraphContainer = styled.div`
width: 80%;
height: 200px;
margin: 50px 0 50px -50px;
`

export default App;
