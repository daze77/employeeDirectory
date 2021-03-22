import React, { Component } from 'react'
import CompleteTable from '../components/completeTable'
import API from '../utils/API'





class Employees extends Component {
    // state
    state = {
        employeesList: [],
     
    }

    // lifecycles

    componentDidMount(){
        this.loadRandomPersons();
    }

    // function

  


    loadRandomPersons = () => {
        API.getRandomPersons().then(response => {
            console.log(response.data.results)
            response.data.results.forEach(element => console.log(element.name.first))
            this.setState({employeesList: response.data.results})
        }).catch(err => console.log(err));
    };
    

        
    gender = () =>
        this.state.employeesList.forEach(element => console.log(element))

 
    


    //render
    render(){
        return(
            <div>
    
                {/* {JSON.stringify(this.state.employeesList)} */}
               
                {JSON.stringify(this.gender)}

                <CompleteTable/>
            </div>
    
        )
    }


}





export default Employees;



