import React, { Component } from 'react';
import './App.css';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import DateFilter from './FilterComponents/DateFilter.js';
import NumericFilter from './FilterComponents/NumericFilter.js';
import StringFilter from './FilterComponents/StringFilter.js';
import ListFilter from './FilterComponents/ListFilter.js';



class App extends Component {
  state = {
    data: []
  }

  /*Fetch data from backend */
  recogerDatos = (state, instance) => {
    console.log(state.filtered);

    //This is where you should fetch data from backend and send property state.filtered 
    //in order to apply filter remotely

    //Load fake data
    this.setState({
      data: [{
        name: "Ricardo",
        age:"31",
        birthday: "2018-08-17",
        favourite_film: "Avengers: Infinity War"
      }, {
        name: "Rocio",
        age:"31",
        birthday: "2018-08-01",
        favourite_film: "Song of music"
      }]
    });

  }
  render() {


      const columns = [{
        Header: 'Nombre',
        accessor: 'name', // String-based value accessors!
        Filter: ({ filter, onChange }) => 
            <StringFilter onChange={onChange}/>
      }, {
        Header: 'Edad',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span>, // Custom cell components!
        Filter: ({ filter, onChange }) => 
            <NumericFilter onChange={onChange}/>
      }, {
        Header: "Cumpleaños",
        accessor: "birthday",
        Filter: ({filter, onChange}) => <DateFilter onChange={onChange}/>
      }, {
        Header: "Pelicula",
        accessor: "favourite_film",
        Filter: ({filter, onChange}) => <ListFilter onChange={onChange} options={[{value: 'Song of music', label: 'Song of music'}, {value: 'Avengers: Infinity War', label: 'Avengers: Infinity War'} ]}/>
      }]
    return (

  <ReactTable
  manual
  onFetchData={this.recogerDatos}
  filterable
    data={this.state.data}
    columns={columns}
  />

    );
  }
}

export default App;
