
import { Link } from 'react-router-dom';


export default function Cart(props) {

  
    let cartStyle = {
        width: "75vh",
        height: "75vh",
        margin: "10px auto"
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
            <th scope="col">Remove</th>
            </tr>
        </thead>
        <tbody>
            {props.cartItem.length===0? "No cartItem to display":  
                
                props.cartItem.map((item)=>{
                    console.log(item.sno);
                    return (  
                        <tr>
                        <th scope="row">{++i}</th>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td><button className='btn btn-danger' onClick={()=>{props.onDelete(item)}}>Remove</button></td>
                        </tr> 
                    )
                })
                } 
        </tbody>
        </table>
        <div></div>
        {props.cartItem.length===0?<button className='btn btn-secondary' >No item in Cart</button>:
            <Link className='btn btn-success' onClick={()=>{props.onPurchase()}} to='/login' >Purchase</Link>}
    </div>
  )
}

