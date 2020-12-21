import React, { useEffect, useState } from 'react' ;
import ListItem from './components/ListItem';
import './components/Style.css'

function App() {
   
   const [Items , setItems] = useState(["Hey" ,"i am first list Item","Hey I am the" ,"second List Item"]);
   const [outputData , setOutputData] = useState(["This is Random output" , "This is Dummy Data"]);
   
   useEffect(()=>{},[Items,outputData]);

  const  moveLiHandler = (index)=>{
      setOutputData([...outputData,Items[index]]);
      Items.splice(index,1);
  }

   let list=null ,outcome=null ;
   
   const onChangeHandler = (event ,index , type)=>{
     if(type===0){
    Items[index]=event.target.value;
    setItems([...Items]);
     }
     else
     {
      outputData[index]=event.target.value;
      setOutputData([...outputData]);
     }
   }

   list = (
       <div className="main_block" >
       <h3>Suggession</h3>
       <div>
    {Items.map((e,index)=> 
    <ListItem  id={index} liItemClick={()=>moveLiHandler(index)} onEditText={(e)=>onChangeHandler(e,index,0)} typeOfBlock={0} value={e}/>)}
       </div>
       </div>
   )

   outcome = (
     <div className="main_block" >
     <h3>Output</h3>
     <div>
       {outputData.map((e,index)=><ListItem  id={index} liItemClick={null} onEditText={(e)=>onChangeHandler(e,index,1)} typeOfBlock={1} value={e}/>     )}
       </div>
     </div>
   )
  return(
    <div >
      {list}
      {outcome}
    </div>
  )
   
}

export default App;
