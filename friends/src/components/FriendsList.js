import React, { Component } from 'react';
import Friend from './Friend';
import friends from '../../friends';



class FriendsList extends Component {
  constructor( props ){
    super( props );

    this.state = {
      searchText: "",
      orderBy: "name",
      order: "ascending"
    };
  }

  handleChange(field, e) {
    this.setState( { [ field ]: e.target.value } );
  }

  render() {

    const friendsList = friends
    .filter( friend =>
    friend.name.toLowerCase().indexOf(
      this.state.searchText.toLowerCase() ) !== -1 )
      .sort( (a, b) => a[ this.state.orderBy ] > b[ this.state.orderBy ])
    .map(x=> {
      let y
      if( x.current_location) {
        y =  x.current_location.name
      } else {
        y = x.current_location
      }
      return (
      <Friend
        currentLocation={ y || "" }
        friendCount={ x.friend_count }
        key={ x.$$hashKey }
        name={ x.name }
        pictureUrl={ x.pic_square || {} }
        status={ x.status ? x.status.message : ""}
        />
    )} );

    const displayFriends = this.state.order === "ascending" ? friendsList : friendsList.slice().reverse();

    return (
      <div>
        <form className="form-inline searchForm"
          role="form">
          <div className="form-group">

            <input className="form-control"
                   onChange={ this.handleChange.bind(
                     this, "searchText" ) }
                   placeholder="Search For Friends"
                   value={ this.state.searchText }/>

                  <select className="input-medium"
                          onChange={ this.handleChange.bind(
                            this, "orderBy") }
                          value={ this.state.orderBy }>
                      <option value="name">Name</option>
                      <option value="friend_count">#Friends</option>
                  </select>

                  <select className="input-medium"
                          onChange={ this.handleChange.bind(
                            this, "order")}
                          value={ this.state.order }>
                      <option
                          value="descending">Descending</option>
                      <option
                          value="ascending">Ascending</option>
                  </select>

          </div>
        </form>

        <ul>
          { friendsList, displayFriends }
        </ul>
      </div>
    );
  }
}

export default FriendsList;
