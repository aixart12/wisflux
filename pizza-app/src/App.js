import './App.css';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Header from './Components/Header';
import React , {useState , useEffect} from 'react';
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";
import AddIngredient from './admin/AddIngredient';
import Login from './Components/Login';
import Orders from './Components/Orders';

function App() {

  const [options , setOption] = useState([])
  
  const [cartItem , setcartItem] = useState([]);

  const [orderItem , setorderItem] = useState([]);

  useEffect(()=>{
    const getIngredientData = async ()=>{
      const { data } = await axios.get('/api/getAllIngredient')
      console.log(data)
      setOption(data)
    }
    const getCartData = async ()=>{
      const { data } = await axios.get('/api/getaAllCartItem')
      console.log(data)
      setcartItem(data)
      

    }
    const getOrdersData = async ()=> {
      const { data } = await axios.get('/api/getOrders')
      setorderItem(data);
    }
    getIngredientData()
    getCartData()
    getOrdersData()
  },[])

  

  const onAdd = async (item)=>{
    console.log("I am on adding item" , item);

    const data = {
      title : item.title,
      price : item.price
    }
    await axios.post('/api/addCartItem' , data)
    console.log(data);
    
  }


  const onDelete = async (item)=>{
    console.log(" I om on delete of Item" , item)
    await axios.delete(`/api/deleteCartItem/${item.id}`) // to remove the single item
    setcartItem(cartItem.filter((e) => {
      return e !== item;
    }));
  } 
  const onPurchase = async() =>{
    console.log("I am on purchase")    
    //  function to push cart Item data
    // console.log(orderItem);
    cartItem.map( async (item)=>{
      const data ={
        title : item.title,
        price: item.price
      }
      await axios.post('/api/addOrderItem' , data)
    })
    await axios.delete('/api/deleteAllCartItem' )// to clean the table once puchase button is clicked

  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home options={options} onAdd={onAdd}/>} />
        <Route path="/cart" element={<Cart cartItem={cartItem} onDelete={onDelete} onPurchase={onPurchase}/>} />
        <Route path="/addIngredient" element={<AddIngredient/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/orders" element={<Orders orderItem={orderItem}/>}/>
    </Routes>
      <Footer />
    </div>
  );
}

export default App;
