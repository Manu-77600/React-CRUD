import {Link} from 'react-router-dom'
import React,{ useEffect} from 'react';
import axios from 'axios';

function Student(){

    useEffect(()=>{
        axios.get('').then(res=>{

        });

    },[])
    return(
        <div class="cintainer mt-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Student list
                                <Link to="/" class="btn btn-primary float-end">Add Student</Link>
                            </h4>
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Ph.No</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>

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
