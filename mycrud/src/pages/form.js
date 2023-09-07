import React,{useState} from "react";



function Form({onSubmit}){
    const [formState,setFormState]=useState({
        id:"",
        name:"",
        email:"",
        password:"",
        phno:"",
    });
    const handleChange=(e)=>{
        setFormState({
            ...formState,
            [e.target.name]:e.target.value,
        });
    }
    const validation =()=>{
        if (formState.id && formState.name && formState.email && formState.password && formState.phno){
            return true
        }
        else{
            return false
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!validation()) return;
        onSubmit(formState);
        window.alert("Data saved Succesfully");
    }  
    return(
        <form>
            <div class="m-4">
                <label  class="form-label">Id</label>
                <input name="id" type="text" class="form-control" value={formState.id} onChange={handleChange}/>
            </div>
            <div class="m-4">
                <label class="form-label">Name</label>
                <input name="name" type="text" class="form-control" value={formState.name} onChange={handleChange}/>
            </div>
            <div class="m-4">
                <label class="form-label">Email</label>
                <input name="email" type="email" class="form-control" value={formState.email} onChange={handleChange}/>
            </div>
            <div class="m-4">
                <label class="form-label">Password</label>
                <input name="password" type="password" class="form-control" valuealue={formState.password} onChange={handleChange} />
            </div>
            <div class="m-4">
                <label class="form-label">Phno</label>
                <input name="phno" type="tel" class="form-control" value={formState.phno} onChange={handleChange}/>
            </div>
            <button type="submit" class="btn btn-primary m-4" onClick={handleSubmit}>Submit</button>
        </form>
    )
}
export default Form;