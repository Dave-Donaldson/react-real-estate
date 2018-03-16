import React, { Component} from 'react'


export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.loopListings = this.loopListings.bind(this)
  }
  loopListings () {
    var {listingsData} = this.props
    
    return listingsData.map( (listing, index) => {
      return (<div className="col-md-3" key={index}> 
      <div className="listing" >
        <div className="listing-img" style={{background: `url("${listing.image}")`}}>
          <span className="address">{listing.address}</span>
          <div className="details">
          <div className="col-md-3">
          <div className="user-img"></div>
          </div>
          <div className="col-md-9">
            <div className="user-details">
              <span className="user-name">Nina Smith</span>
              <span className="post-date">05/05/2017</span>
            </div>
            <div className="listing-details">
              <div className="floor-space"> 
                <i className="far fa-square"></i><span>{listing.floorSpace} ft&sup2;</span>  
              </div>
              <div className="bedrooms">
                <i className="fas fa-bed"></i><span>{listing.rooms} bedrooms</span>
              </div>
            </div>
            <div className="view-btn">View Listing</div>
          </div>
        </div>
      </div>
        <div className="bottom-info">
            <span className="price">${listing.price} </span>
            <span className="location"> <i className="fas fa-map-marker"></i> {listing.city}, {listing.state}</span>
          </div>
        </div>
    </div>)
    })
  }

  render () {
    return (
    <section id="listings">
      <div className="container">
      <section className="search-area">
      <input type="text" name="search" />
      </section>

      <div className="sortby-area"> 
        <div className="results">390 results found</div>
          <div className="sort-options"> 
            <select name="sortby" className="sortby">
              <option value="price-asc">Highest Price</option>
              <option value = "price-asc" >Lowest Price</option>
            </select>
              <div className="view">
                < i className = "fas fa-th-list" > </i>
                < i className = "fas fa-th" > </i>
              </div>
            </div>
        
      </div>

    <section className = "listings-results">
     
      {this.loopListings()}
  
  </section>

    

      <section id="pagination"> 
        <ul className="pages">
          <li>Prev</li>
          <li>1</li>
          <li className="active">2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </ul>
      </section>
      </div>
    </section>
  )
  }
}


