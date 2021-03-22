import React, { Component } from "react";
import TableData from './TableData'
import TableHeaders from './TableHeader'
import API from '../utils/API'



class CompleteTable extends Component {
    // state
    state = {
      peopleList: [],
      firstname: []

  }

  // lifecycles

  componentDidMount(){
      this.loadRandomPersons();
  }

  // function


  loadRandomPersons = () => {
      API.getRandomPersons().then(response => {
          console.log(response.data.results)
          const test = response.data.results
          test.forEach(element => console.log(element.name.first))
   

          test.map(object => {
              return{
                  b: object.name.first
              } 
          })
          console.log(test.b)
        



          // // response.data.results.forEach(element => this.setState({b: element.name.first}))
          // this.setState({peopleList: response.data.results.name.first})
          // console.log(`array of names`, this.state.bnames)


         this.setState({peopleList: response.data.results})









         
          this.setState({names: response.data.results.forEach(element => console.log(element.name.first))})
          this.state.peopleList.forEach(element => this.setState({names: element.name.first}))

      }).catch(err => console.log(err));
  };
  
  render(){
    return(
   
        <table className="table">
            {JSON.stringify(this.state.names)}
            <TableHeaders/>
            {this.state.peopleList.map(peopleaname => (

            <TableData
                firstname={peopleaname.name.first}
            />

            ))}
        
        </table>
   
    )

  }
  
  
}




export default CompleteTable




