import React from 'react'


function TableData(props){

    return( 
        <tbody>
            <tr>
                <th scope="row"></th>
                <td>{props.firstname}</td>
                <td>{props.lastname}</td>

                
            </tr>
        </tbody>
    )
}





export default TableData