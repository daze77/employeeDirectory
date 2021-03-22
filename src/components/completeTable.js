import React, { Component } from "react";
import TableData from './TableData'
import TableHeaders from './TableHeader'
import API from '../utils/API'



class CompleteTable extends Component {
    // state
    state = {
      peopleList: [],
  }

  // lifecycles

  componentDidMount(){
      this.loadRandomPersons();
  }

  // function

  loadRandomPersons = () => {
      API.getRandomPersons().then(response => {
          console.log(response.data.results)
         this.setState({peopleList: response.data.results})
      }).catch(err => console.log(err));
  };
  
  render(){
    return(
   
        <table class="table table-hover">
            <TableHeaders/>
            {this.state.peopleList.map(people => (

            <TableData
                keys={people.login.uuid}
                firstname={people.name.first}
                lastname={people.name.last}
                gender={people.gender}
                nationality={people.nat}
                phone={people.phone}
                dob={people.dob.date}
                image={people.picture.thumbnail}
                email={people.email}
                country={people.location.country}
                username={people.login.username}
                mobile={people.cell}
            />

            ))}
        
        </table>
   
    )

  }
  
  
}




export default CompleteTable




