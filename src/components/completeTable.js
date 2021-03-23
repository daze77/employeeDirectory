import React, { Component } from "react";
import TableData from './TableData'
import TableHeaders from './TableHeader'
import API from '../utils/API'



class CompleteTable extends Component {
    // state
    state = {
      peopleList: [],
      firstName: [],
      lastName: [],
      firstName1: [],
      b: []
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
         
        this.state.peopleList.map(people => (
            this.setState({firstName: people.name.first})
         ))   
        console.log(this.state.firstName)

        // for (const b of this.state.peopleList){
        //     console.log(b.name.first)
        //     this.setState({firstName1: b.name.first})
        //     console.log(this.state.firstName1)
        // }
      
        this.state.peopleList.forEach(peoples => (
            
            // console.log(peoples.name.first)
            this.setState({b: peoples.name.first})
        ))
        console.log(this.state.b)
        
        // .forEach(peoples =>(
        //     console.log(peoples.name.first)
        
        // ))
        // console.log(this.state.firstName1)


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




