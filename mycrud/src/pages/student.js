import {Link} from 'react-router-dom'


import {BsFillPencilFill,BsFillTrashFill,} from 'react-icons/bs'                           
function Student({rows,deleteRow}){
    return(
        <div class="cintainer mt-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Student list
                                <Link to="/form" class="btn btn-primary float-end">Add Student</Link>
                            </h4>
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead style={{textAlign:'center'}}>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>PhNo</th>
                                        <th>Delete</th>
                                        <th>Edit</th>                            
                                    </tr>
                                </thead>
                                <tbody style={{textAlign:'center'}}>
                                    {
                                        rows.map((row,idx)=>{
                                            return <tr key={idx}>
                                                <td>{row.id}</td>
                                                <td>{row.name}</td>
                                                <td>{row.email}</td>    
                                                <td>{row.phno}</td>
                                                <td style={{color:'red',cursor:'pointer'}} onClick={()=>deleteRow(idx)}><BsFillTrashFill/></td>
                                                <td style={{color:'blue',cursor:'pointer'}}><BsFillPencilFill/></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Student;
