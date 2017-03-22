import React, { Component } from 'react';
import './MyPic.css';

export default class MyPic extends Component {
  render() {
    return (
      <div className="mypic">
        <img src={require('./ivyalert.jpg')} alt="my cat" />
        <p>My cat is cuter than me</p>
      </div>
    )
  }
}
