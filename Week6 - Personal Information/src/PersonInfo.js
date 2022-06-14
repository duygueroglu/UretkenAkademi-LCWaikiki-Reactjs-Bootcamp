import React, { Component } from 'react';
import axios from 'axios';

export default class PersonInfo extends Component {
    state = {
        personList: []
    }
    
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(list=>{
            const personList = list.data;
            this.setState({ personList });
        })
    }
    render() {
    return (
      <div>
        <ul>
            {this.state.personList.map(persons=>
            <li>
                {persons.username}<b> : </b>{persons.name}
            </li>
            )}
        </ul>
      </div>
    )
  }
}
