import React from 'react';
import "../../App.css";
import {useDispatch} from "react-redux";
import {addMessage,removeMessage} from "../../redux/action/Action";

export default function Index() {
    const datas =[
        {id:1,data:"this is jan month"},
        {id:2,data:"this is fab month"},
        {id:3,data:"this is Mar month"}

    ]
    const dispatch = useDispatch();
  return (
    <div className='indexDiv'>
        <div>
            {datas.map((el)=>(
                <div className='mainContainer'>
                    <h3>{el.id}</h3>
                    <h5>{el.data}</h5>
                    <button onClick={()=>{
                      dispatch(addMessage())  
                    }}>add</button>

                    <button onClick={()=>{
                      dispatch(removeMessage())  
                    }}>remove</button>
                </div>
            ))}
        </div>
    </div>
  )
}
