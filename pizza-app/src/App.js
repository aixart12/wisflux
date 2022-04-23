import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Header from './Components/Header';
import React, { useState } from 'react';

function App() {

  const onAdd = (title , cost)=>{
    console.log("I am on adding item" , title , cost);
  }
  const [options , setOption] = useState([{
    sno:1,
    title: "Option 1",
    ims : "./images/mushroom.jpeg",
    cost : "50"
    },
    {
      sno:2,
      title: "Option 2",
      ims : "./images/mushroom.jpeg",
      cost: "30"
    },
    {
      sno:3,
      title: "Option 3",
      ims : "./images/mushroom.jpeg",
      cost: "30"
    },
    {
      sno:4,
      title: "Option 4",
      ims : "./images/mushroom.jpeg",
      cost: "30"
    },
    {
      sno:5,
      title: "Option 5",
      ims : "./images/mushroom.jpeg",
      cost: "30"
    }


  ]);
  const [cartItem , setcartItem] = useState([
    {

    }
  ]);
  return (
    <div className="App">
      <Header />
      <Home options={options} onAdd={onAdd}/>
      <Footer />
    </div>
  );
}

export default App;
