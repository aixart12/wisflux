import React , {useState , useEffect} from 'react';
import axios from 'axios';

const ShowIngredient = () =>{

  const [ingredient , setIngredient] =useState([])

  useEffect(()=>{
    const getIngredientData = async ()=>{
      const { data } = await axios.get('/api/getAllIngredient')
      console.log(data)
      setIngredient(data)
    }
    getIngredientData()
  },[])

}

export default function AddIngredient() {
  return (
    <div>
      <h1>Add Ingredient</h1>
    </div>
  )
}
