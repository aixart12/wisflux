import React , {useState , useEffect} from 'react';
import axios from 'axios';

export default function Cart(props) {

  
    let cartStyle = {
        width: "75vh",
        margin: "10px auto",
        color: "#f8f9fa",
        maxHeight: "fit-content"
    }
    let i = 0;
  return (
    <div className='cart' style={cartStyle}>
      <table className="table mt-5" >
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Time</th>
            </tr>
        </thead>
        <tbody>
            {props.orderItem.length===0? "No orderItem to display":  
                
                props.orderItem.map((item)=>{
                    console.log(item.sno);
                    return (  
                        <tr>
                        <th scope="row">{++i}</th>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.createdAt}</td>
                        </tr> 
                    )
                })
                } 
        </tbody>
        </table>
    </div>
  )
}
