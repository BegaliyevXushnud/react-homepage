
import React, { Component } from 'react'
import "./style.scss"

export default class Header extends Component {
  render() {
    return (
     <header>
      <ul>
        <li><a href="#" className='blog'>Blog</a></li>
        <li><a href="#">Works</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
     </header>
    )
  }
}
