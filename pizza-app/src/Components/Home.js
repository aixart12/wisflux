import React from 'react'; 
import { useState } from 'react';

export default function Home(props) { 
    // const [ title , setTitle] = useState("");
    // const [ cost , setCost] = useState("");

    // const addItem = (e) =>{
    //     e.preventDefault();
    //     props.addtoCart(title , cost);
    // }


    let homeStyle = {
        height: "75vh",
        margin: "10px auto"
    }
    // let ims = "./images/mushroom.jpeg" 
  return (

    <div className='container' style={homeStyle}> 
    <div className="row mt-5 row-cols-1 row-cols-md-5 g-4"> 
        {props.options.length===0? "No Options to display": 
            
            props.options.map((option)=>{
                console.log(option.sno);
                return (
                <div className="col">
                <div className="card h-100">
                <img src={option.ims} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"  >{option.title}</h5>
                    <p className="card-text">Cost <span className='cost'  >{option.cost}</span> ruppe</p>
                    <button className="btn btn-sm btn-success" onClick={()=>{props.onAdd(option.title ,option.cost)}}>Add</button> 
                </div>
                </div>
        
            </div>   
                )
            })
           
        }
         </div>
    </div>
  )
}

