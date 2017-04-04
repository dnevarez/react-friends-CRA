import React, { Component } from 'react'

class Friend extends Component {
  componentDidMount() {
    //  console.log(this.props)
   }
    render() {
      return (
      <li className='friend'>
      	<img className="profile-pic" alt='' src='http://placebear.com/50/50.jpg' />

      		<h3>{this.props.name}</h3>

      		<div className="location">
      			Location: {this.props.currentLocation}
      		</div>

      		<div className="status">
      			Status: {this.props.status} <span className="hashtag"></span>
      		</div>

      		<div className="num-friends">
      			Friends: {this.props.friendCount}
      		</div>
      </li>
    )
    }
}

export default Friend
