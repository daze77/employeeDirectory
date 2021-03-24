import React from "react";

function TableHeaders(props){

    return (
        
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col" >
                    First Name <i class="fas fa-sort" onClick={props.sort} ></i>
                </th>
                <th scope="col">Last Name </th>
                <th scope="col">Email</th>
                <th scope="col">Nationality</th>
                <th scope="col">Country</th>
                <th scope="col">Phone</th>
                <th scope="col">Mobile</th>
                <th scope="col">User Name</th>
                
            </tr>
        </thead>
    
    )
}

export default TableHeaders