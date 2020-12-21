import React, { useState } from 'react'
import './Style.css'
const ListItem = (props) => {

    const  [edit,setEdit] = useState(false);
    const editEnable =()=>{
        setEdit(true);
    }
    const enterText= ()=>{
        setEdit(false);
    }

    let list = (<li onClick={props.liItemClick} >{props.value}</li>) ;
    let enterButton=null;
    if(edit===true)
    {
    list=(<li><input  type="text" onChange={(e)=>props.onEditText(e,props.id,props.typeOfBlock)} value={props.value}></input></li>)
    enterButton=(<button onClick={enterText} >Enter</button>);
    }
    
    return (
        <ul>
            <div className="ul_item">
            {list}
            <div >
            <button  className="edit_button" onClick={editEnable}>Edit</button>
            {enterButton}
            </div>
            </div>
        </ul>
    )
}

export default ListItem
