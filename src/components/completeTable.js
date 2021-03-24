import React, { Component } from "react";
import TableData from './TableData'
import TableHeaders from './TableHeader'
import API from '../utils/API'



class CompleteTable extends Component {
    // state
    state = {
    peopleList: [],
    currentSort: 'desc',
    myInput: "",
    resultsList: []  
  }

  // lifecycles

  componentDidMount(){
      this.loadRandomPersons();
  }

  // function

  loadRandomPersons = () => {
      API.getRandomPersons().then(response => {
        this.setState({peopleList: response.data.results})
        this.setState({resultsList: [...this.state.peopleList]})
        console.log(`the people list`, this.state.resultsList)
      }).catch(err => console.log(err));
  };
    sortEmployees = () => {
        let newState = [...this.state.resultsList]
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
        this.setState({resultsList: newState});

    };


    handleInputChange = ( event ) => {
        // save the input line changes
        this.setState({myInput: event.target.value})
        console.log(`this is what I entered`, this.state.myInput)
       
    }

            
    filterPeople = () => {
        let countryList = [this.state.peopleList]
        console.log(`the country`, countryList)
        console.log(`the value of myInput`, this.state.myInput)
        // debugger
        // const myInput = inputRef.current.value
        countryList = this.state.peopleList.filter( country => country.location.country.indexOf(this.state.myInput )> -1 )
        // let newList = employees.filter( employee=>employee.country === "Norway" )
        
        this.setState({resultsList: countryList});
    }


//     let newList = employees.filter( employee=>employee.country = inputCountry )
//     const myInput = inputRef.current.value
// const newList = employees.filter( employee => employee.country.indexOf( myInput )>-1 )






  render(){
    return(
      
        <>
        <h1>Employee List</h1>
       
        <div class="input-group mb-3">
        <input value={this.state.myInput} onChange={this.handleInputChange}  type="text" class="form-control" placeholder="Recipient's First Name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.filterPeople} >Search</button>
        </div>
        <table class="table table-hover">
            <TableHeaders
                sort={this.sortEmployees} 
            />
            {this.state.resultsList.map(people => (
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




