
import React, { Component } from 'react'
import "./style.scss"
import Img from "../../assets/person.svg"

export default class Hero extends Component {
  render() {
    return (
      <div className='apex'>
<div  className="apex-text">
    <pre>Hi, I am John, <br />
    Creative Technologist</pre>
    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    <button>Download Resume</button>
</div>
<div className='apex-img'>
<img src={Img}  />
</div>
      </div>
    )
  }
}
