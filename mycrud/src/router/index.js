import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import { Routes, Route } from 'react-router-dom';
import Student from '../pages/student';
import Form from '../pages/form';
import { useState } from 'react';

function MyRouter(){
    const [rows,setRows]=useState([
        {id:'1',name:"Manohara",email:"eample@gmail.com",phno:'7760070298'},
        {id:'1',name:"Manohara",email:"eample@gmail.com",phno:'7760070298'},
        {id:'1',name:"Manohara",email:"eample@gmail.com",phno:'7760070298'},
      ]);

    const handleDeleteRow =(targetIndex)=>{
        setRows(rows.filter((_, idx)=>idx!==targetIndex));
    }

    const handleSubmit =(newRow)=>{
        setRows([...rows,newRow])
    }
    
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/About us" element={<About/>}/>
            <Route path="/contact us" element={<Contact />}/>
            <Route path="/Student" element={<Student rows={rows} deleteRow={handleDeleteRow}/>}/>
            <Route path="/form" element={ <Form onSubmit={handleSubmit} />}/>
        </Routes>
    );
}

export default MyRouter;