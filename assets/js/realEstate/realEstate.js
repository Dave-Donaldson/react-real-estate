import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Filter from './Filter.js';
import Listings from './Listings.js';
import listingsData from './data/listingsData.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Joe',
      listingsData,
      neighborhood: 'Abingdon',
      homeType: 'Ranch',
      rooms: 1,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      swimming_pool: false,
      gym: false,
      garage: false,
      filteredData: listingsData,


    };
    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
  }
  change(event) {
    const name = event.target.name;
    const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;

    this.setState({
      [name]: value,
    }, () => {
      console.log(this.state);
      // runs filteredData function on any change to the state
      this.filteredData(); 
    });
  }

  //  this function filters the data using the pice and floor space 
  //  parameters
  filteredData() {
    const newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= 
      this.state.max_price && item.floorSpace >= this.state.min_floor_space &&
      item.floorSpace <= this.state.max_floor_space;
    });
    this.setState({
      filteredData: newData,
    })
  }
  render() {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} />
          <Listings listingsData={this.state.filteredData} />
        </section>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
