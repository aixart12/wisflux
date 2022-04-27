import React from 'react';

export default function Home(props) { 

    let homeStyle = {
        maxHeight: "fit-content",
        margin: "10px auto"
        
    }

  return (

    <div className='container' style={homeStyle}> 
    <div className="row mt-5 row-cols-1 row-cols-md-5 g-4"> 
        {props.options.length===0? "No Options to display":  // checking the length or options and implementing ternary operator
            
            props.options.map((option)=>{ // ittrating though options array
                console.log(option.sno);
                return (
                <div className="col">
                <div className="card h-100">
                <img src={`http://localhost:8080/${option.image}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"  >{option.title}</h5>
                    <p className="card-text">Cost : $ <span className='cost'  >{option.price}</span></p>
                    <button className="btn btn-sm btn-success" onClick={()=>{props.onAdd(option)}}>Add</button> 
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

