
import React, { Component } from 'react'
import "./style.scss"

export default class Post extends Component {
  render() {
    return (
      <div className='post'>
<div className="post-title">
    <h2>Recent posts</h2>
    <h2 className='view'>View all</h2>
</div>
<div className="post-cards">
    <div className="card">
        <h2>Making a design system from scratch</h2>
        <h3>12 Feb 2020 <span>|</span> <span>Design, Pattern</span></h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    <div className="card">
        <h2>Creating pixel perfect icons in Figma</h2>
        <h3>12 Feb 2020 <span>|</span> <span>Figma, Icon Design</span></h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
</div>
      </div>
    )
  }
}
