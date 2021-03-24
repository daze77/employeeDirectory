import React, { Component } from "react";
import TableData from './TableData'
import TableHeaders from './TableHeader'
import API from '../utils/API'



class CompleteTable extends Component {
    // state
    state = {
    peopleList: [],
    currentSort: 'desc',
      
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
        if( this.state.currentSort === 'desc' ) {
            this.setState({currentSort: 'asc'})
        newState.reverse()
        } else {
            this.setState({currentSort: 'desc'})
        }
        this.setState({peopleList: newState});

    };



            
    // filterPeople = (country) => {
    //     console.log(`the people`, this.state.peopleList)
    //     // debugger
    //     // const myInput = inputRef.current.value
    //     const newState = this.state.peopleList.filter( employee => employee.country.indexOf( "Canada" )> -1 )
    //     // let newList = employees.filter( employee=>employee.country === "Norway" )
    //     console.log(`this is the part that broke it all `, this.state.newState)
    //     this.setState({peopleList: newState});
    // }


//     let newList = employees.filter( employee=>employee.country = inputCountry )
//     const myInput = inputRef.current.value
// const newList = employees.filter( employee => employee.country.indexOf( myInput )>-1 )






  render(){
    return(
      
        <>
        <h1>Employee List</h1>
        <button onClick={this.filterPeople} > Push Here </button>
        <table class="table table-hover">
            <TableHeaders
                sort={this.sortEmployees} 
            />
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




