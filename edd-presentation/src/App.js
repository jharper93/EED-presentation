import logo from './logo.svg';
import React from 'react'
import './App.css';
import styled from 'styled-components'
import {BarGraph} from './components/barChart'
import axios from  'axios'

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
    <div className="App">
      <header className="App-header">
        <$Container >
          <$Header>Water level tester</$Header>
            <$BarGraphContainer>
                <BarGraph level={level}/>
            </$BarGraphContainer>
        </$Container>
        <button onClick={fetchData}>
          click
        </button>
      </header>
    </div>
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
