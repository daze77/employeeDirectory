import React, { Component } from "react";
import TableData from './TableData'
import TableHeaders from './TableHeader'
import API from '../utils/API'



class CompleteTable extends Component {
    // state
    state = {
    peopleList: [],
    currentSort: 'default',
      
  }

  // lifecycles

  componentDidMount(){
      this.loadRandomPersons();
  }

  // function

  loadRandomPersons = () => {
      API.getRandomPersons().then(response => {
        this.setState({peopleList: response.data.results})
        console.log(`the people list`, this.state.peopleList)
      }).catch(err => console.log(err));
  };
    sortEmployees = () => {
        let newState = [...this.state.peopleList]
        console.log(`this is newstate`, newState)

        newState.sort((a, b) => {
            let fa = a.name.first.toLowerCase(),
                fb = b.name.first.toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })
        this.setState({peopleList: newState});

    };



            
    // function filterEmployees(country){
    //     console.log(`the employees`, employees)
    //     // debugger
    //     const myInput = inputRef.current.value
    //     const newList = employees.filter( employee => employee.country.indexOf( myInput )> -1 )
    //         let newList = employees.filter( employee=>employee.country === "Norway" )
    //     console.log(`this is the part that broke it all `, newList)
    //     setEmployees(newList);
    // }








  render(){
    return(
      
        <>
        <h1>Employee List</h1>
        <button onClick={this.sortEmployees} > Push Here </button>
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
        </>
    )
  }
}




export default CompleteTable




