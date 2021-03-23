import React from 'react'


// class TableData extends Component{

//     state = {
       
//         firstName: props.name.first
//     }





//     // sortFields = () => {
//     //     this.setState({peopleList:})
//     // }






//     render(){
//         return( 
//             <tbody>
//                 <tr>
//                     <th scope="row">{props.keys}</th>
//                     <td> <img alt={props.image} src={props.image}/></td>
//                     <td>{props.firstname}</td>
//                     <td>{props.lastname}</td>
//                     <td>{props.email}</td>
//                     <td>{props.gender}</td>
//                     <td>{props.nationality}</td>
//                     <td>{props.country}</td>
//                     <td>{props.phone}</td>
//                     <td>{props.mobile}</td>
//                     <td>{props.dob}</td>
//                     <td>{props.username}</td>
//                 </tr>
//             </tbody>
//         )
//     }







// }

















function TableData(props){


    return( 
        <tbody>
            <tr>
                <th scope="row">{props.keys}</th>
                <td> <img alt={props.image} src={props.image}/></td>
                <td>{props.firstname}</td>
                <td>{props.lastname}</td>
                <td>{props.email}</td>
                <td>{props.gender}</td>
                <td>{props.nationality}</td>
                <td>{props.country}</td>
                <td>{props.phone}</td>
                <td>{props.mobile}</td>
                <td>{props.dob}</td>
                <td>{props.username}</td>
            </tr>
        </tbody>
    )
}





export default TableData