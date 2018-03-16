import React, { Component } from 'react';


export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Joe',
    };
  }

  render() {
    return (
      <section id="filter">
        <div className="inside">

          <h4>Filter</h4>

          <select name="neighborhood" className="filters neighborhood" onChange={this.props.change}>
            <option value="Abingdon">Abingdon</option>
            <option value="Dover">Dover</option>
          </select>

          <select name="housetype" className="filters housetype" onChange={this.props.change} >
            <option value="Ranch"> Ranch  </option>
            <option value="Condo"> Condo  </option>
            <option value="Single Family"> Single Family </option>
            <option value="Town House"> Town House  </option>
          </select>

          <select name="bedrooms" className="filters bedrooms" onChange={this.props.change} >
            <option value="1"> 1 BR </option>
            <option value="2"> 2 BR </option>
            <option value="3"> 3 BR </option>
            <option value="4"> 4 BR </option>
            <option value="5"> 5 BR </option>
            <option value="6"> 6 BR </option>
          </select>

          <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
            <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
          </div>

          <div className="filters floor-space">
            <span className="title" > Floor Space </span>
            <input type="text" name="min_floor_space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
            <input type="text" name="max_floor_space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
          </div>

          <div className="filters extras">
            <span className="title">
            Extras
            </span>
            <label htmlFor="extras">
              <span> Elevators </span>
              <input name="elevator" value="elevator" type="checkbox" />
            </label>

            <label htmlFor="extras">
              <span> Swimming Pool </span>
              <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change} />
            </label>

            <label htmlFor="extras">
              <span> Finished Basement </span>
              <input name="finished_basement" value="finished-basement" type="checkbox" onChange={this.props.change} />
            </label>

            <label htmlFor="extras">
              <span> Gym </span>
              <input name="Gym" value="Gym" type="checkbox" onChange={this.props.change} />
            </label>

            <label htmlFor="extras">
              <span> Garage </span>
              <input name="Garage" value="Garage" type="checkbox" onChange={this.props.change} />
            </label>

          </div>
        </div>
      </section>
    );
  }
}

