import React, { Component } from 'react';
import './MyText.css';

export default class MyText extends Component {
  render() {
    return (
      <div className="textbox">
      <p>Hi, I&#39;m Chisel! I&#39;m learning React.</p>
      <ul>
        <li>The cat is named Ivy. She knows she&#39;s adorable.</li>
        <li>This is the first page I have ever built using React!</li>
        <li>Below you can find the link to my GitHub profile.</li>
      </ul>
      </div>
    )
  }
}
