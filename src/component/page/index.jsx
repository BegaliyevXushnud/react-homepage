import React, { Component } from 'react'
import "./style.scss"
import Img from"../../assets/bir.svg"
import Img2 from "../../assets/ikki.svg"
import Img3 from "../../assets/uch.svg"
import Img4 from "../../assets/turt.svg"

export default class Page extends Component {
  render() {
    const cards = [
      {
        img: Img,
        title: "Designing Dashboards",
        date: "12 Feb 2019",
        year: "2020", 
        tags: "Dashboard",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
        img: Img2,
        title: "Vibrant Portraits of 2020",
        date: "15 Mar 2019",
        year: "2019",
        tags: "Illustration",
        description: "Closures are a fundamental concept in JavaScript. They allow a function to access variables from its parent scope even after the parent function has closed."
      },
      {
        img: Img3,
        title: "36 Days of Malayalam type",
        date: "22 Apr 2019",
        year: "2018",
        tags: "Typography",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
        img: Img4,
        title: "Components",
        date: "22 Apr 2019",
        year: "2018",
        tags: "Components, Design",
        description: "Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class."
      }
    ];

    return (
      <div className='appes'>
        <h1>Featured works</h1>
        <div className='cards'>
          {cards.map((card, index) => (
            <div key={index} className='card'>
              <img src={card.img} alt={card.title} className='card-img' />
              <div className='card-content'>
                <h2>{card.title}</h2>
                <h3>
                  <span className="year">{card.year}</span> 
                  {card.tags} 
                </h3>
                <h4>{card.description}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
